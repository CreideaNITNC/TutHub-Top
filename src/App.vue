<script setup lang="ts">
import { useService } from "@/service/service";
import { ref } from "vue";

const service = ref(useService());
</script>

<template>
  <RouterView :service="service" />
</template>

<style>
html,
body {
  background-color: black;
}
</style>

<style lang="scss" scoped>
h1 {
  color: gold;
}
.dialog {
  display: block;
  width: 100px;
  height: 100px;
}
</style>
