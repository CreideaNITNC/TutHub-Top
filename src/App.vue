<script setup lang="ts">
import { useService } from "@/service/service";

const service = useService();
</script>

<template>
  <Suspense>
    <RouterView :service="service" />
  </Suspense>
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
