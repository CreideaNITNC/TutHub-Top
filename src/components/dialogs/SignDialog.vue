<script lang="ts" setup>
const props = defineProps({
  submitText: {
    type: String,
    default: "Sign",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  valid: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "update:modelValue", value: boolean): void;
}>();

function close() {
  emit("update:modelValue", false);
}

const onSubmit = (): void => {
  if (!props.valid) return;
  emit("submit");
  close();
};
</script>

<template>
  <v-dialog
    transition="dialog-bottom-transition"
    class="sign-dialog"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', false)"
  >
    <div class="dialog-board">
      <div class="header">
        <button @click="close" class="cancel btn">cancel</button>
        <button @click="onSubmit" class="submit btn">{{ submitText }}</button>
      </div>
      <div class="slot"><slot /></div>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
.sign-dialog {
  .dialog-board {
    $boardHeight: 550px;
    $headerHeight: 39px;
    $padding: 20px;

    width: 500px;
    height: $boardHeight;
    margin: auto;
    padding: $padding;
    background: #f5f5f5;
    border-radius: 12px;

    & > .header {
      display: flex;
      justify-content: space-between;

      height: $headerHeight;

      & > .btn {
        width: 104px;
        height: $headerHeight;
        font-family: "Helvetica Neue", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: $headerHeight;
        color: #bfa445;
      }
    }

    & > .slot {
      position: relative;
      width: 100%;
      height: $boardHeight - $headerHeight - ($padding * 2);
    }
  }
}
</style>
