<script lang="ts" setup>
import HomeHeader from "@/components/home/HomeHeader.vue";
import RepositoryOverview from "@/components/repository/types/repositoryOverview";
import RepositoryList from "@/components/repository/RepositoryList.vue";
import { PropType, ref } from "vue";
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
</script>

<template>
  <HomeHeader />
  <RepositoryList :repositories="repositories" @remove="remove" />
</template>
