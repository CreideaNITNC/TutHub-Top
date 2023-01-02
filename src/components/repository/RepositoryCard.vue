<script lang="ts" setup>
import RepositoryOverview from "@/components/repository/types/repositoryOverview";
import { PropType } from "vue";

const props = defineProps({
  overview: {
    type: Object as PropType<RepositoryOverview>,
    required: true,
  },
});

const emits = defineEmits<{
  (e: "remove", value: string): void;
}>();

async function copy(): Promise<void> {
  if (!navigator.clipboard) {
    alert("このブラウザは対応していません");
    return;
  }
  try {
    await navigator.clipboard.writeText(props.overview.remoteURL);
  } catch {
    alert("コピーに失敗しました");
  }
}

function transform(): void {
  window.open(props.overview.webURL);
}
</script>

<template>
  <div class="repository-card">
    <v-card
      class="mx-auto v-card"
      max-width="379"
      max-height="145"
      variant="outlined"
    >
      <v-card-title class="title">{{ overview.title }}</v-card-title>
      <v-card-subtitle class="subtitle">{{ overview.name }}</v-card-subtitle>

      <v-card-actions class="actions justify-end">
        <v-btn
          @click="emits('remove', overview.name)"
          color="white"
          icon="mdi-trash-can-outline"
        />
        <v-btn @click="transform" color="white" icon="mdi-web" />
        <v-btn @click="copy" color="white" icon="mdi-content-copy" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.repository-card {
  width: 569px;
  height: 218px;
  & > .v-card {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #a396f4;
    border-radius: 25px;
    padding-top: 20px;

    & > .title {
      color: white;
    }
    & > .subtitle {
      color: #cbcbcb;
    }
  }
}
</style>
