<script lang="ts" setup>
import { PropType } from "vue";
import RepositoryOverview from "@/components/repository/types/repositoryOverview";
import RepositoryCard from "@/components/repository/RepositoryCard.vue";

defineProps({
  repositories: {
    type: Array as PropType<readonly RepositoryOverview[]>,
    required: true,
  },
});
const emits = defineEmits<{
  (e: "remove", value: string): void;
}>();
</script>

<template>
  <div class="repository-list">
    <v-container class="container">
      <v-row class="row">
        <v-col
          class="col"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="4"
          v-for="repository in repositories"
          :key="repository.name"
        >
          <RepositoryCard
            :overview="repository"
            class="card"
            @remove="(v) => emits('remove', v)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.repository-list {
}
</style>
