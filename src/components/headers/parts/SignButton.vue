<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button class="sign-button">{{ text }}</button>
</template>

<style lang="scss" scoped>
.sign-button {
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 44px;

  width: 150px;
  height: 44px;

  color: white;

  border: 1px solid white;
  border-radius: 14px;
}
</style>
