<template>
  <div class="base-header">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #231823;

  padding: 0 20px;
}
</style>
