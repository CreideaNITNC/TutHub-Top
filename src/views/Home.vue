<script lang="ts" setup>
import HomeHeader from "@/components/home/HomeHeader.vue";
import RepositoryOverview from "@/components/repository/types/repositoryOverview";
import RepositoryList from "@/components/repository/RepositoryList.vue";
import { computed, PropType, ref } from "vue";
import Service from "@/service/service";

const props = defineProps({
  service: {
    type: Object as PropType<Service>,
    required: true,
  },
});

async function load(): Promise<readonly RepositoryOverview[]> {
  return await props.service.repositoryListService.load();
}

const repositories = ref(await load());

async function remove(name: string): Promise<void> {
  await props.service.repositoryListService.remove(name);
  repositories.value = await load();
}

const title = ref("");
const name = ref("");
const open = ref(false);
const names = computed(() =>
  repositories.value.map((repository) => {
    return repository.name;
  })
);

async function onCreate(): Promise<void> {
  await props.service.repositoryListService.create(name.value, title.value);
  repositories.value = await load();
  open.value = false;
  name.value = "";
  title.value = "";
}
</script>

<template>
  <HomeHeader
    v-model:open="open"
    v-model:name="name"
    v-model:title="title"
    :names="names"
    @create="onCreate"
  />
  <RepositoryList :repositories="repositories" @remove="remove" />
</template>
