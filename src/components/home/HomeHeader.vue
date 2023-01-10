<script lang="ts" setup>
import BaseHeader from "@/components/headers/BaseHeader.vue";
import TutHubTopButton from "@/components/headers/parts/TutHubTopButton.vue";
import CreateRepositoryDialog from "@/components/home/CreateRepositoryDialog.vue";
import { PropType } from "vue";

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  names: {
    type: Array as PropType<readonly string[]>,
    default: () => [],
  },
});

const emits = defineEmits<{
  (e: "update:open", value: boolean): void;
  (e: "update:title", value: string): void;
  (e: "update:name", value: string): void;
  (e: "create"): void;
}>();
</script>

<template>
  <BaseHeader>
    <TutHubTopButton />
    <v-btn
      icon="mdi-shape-square-rounded-plus"
      color="black"
      @click="emits('update:open', true)"
    />
  </BaseHeader>
  <CreateRepositoryDialog
    :open="open"
    @update:open="(v) => emits('update:open', v)"
    :name="name"
    @update:name="(v) => emits('update:name', v)"
    :title="title"
    @update:title="(v) => emits('update:title', v)"
    :names="names"
    @create="emits('create')"
  />
</template>

<style scoped></style>
