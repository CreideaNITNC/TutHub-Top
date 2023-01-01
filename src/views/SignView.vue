<script setup lang="ts">
import SignHeader from "@/components/headers/SignHeader.vue";
import { PropType } from "vue";
import Service from "@/service/service";

const props = defineProps({
  service: {
    type: Object as PropType<Service>,
    required: true,
  },
});
</script>

<template>
  <SignHeader
    :sign-in-service="props.service.signInService"
    :sign-up-service="props.service.signUpService"
  />
</template>
