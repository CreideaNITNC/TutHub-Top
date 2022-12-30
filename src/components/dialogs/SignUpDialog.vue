<script lang="ts" setup>
import SignDialog from "@/components/dialogs/SignDialog.vue";
import SignTextField from "@/components/dialogs/SignTextField.vue";

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  mail: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  valid: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits<{
  (e: "update:open", value: boolean): void;
  (e: "update:mail", value: string): void;
  (e: "update:name", value: string): void;
  (e: "update:password", value: string): void;
  (e: "update:valid", value: boolean): void;
  (e: "submit"): void;
}>();
</script>

<template>
  <div class="sign-up-dialog">
    <SignDialog
      @update:model-value="(v) => emits('update:open', v)"
      :model-value="open"
      :valid="valid"
      submit-text="Sign up"
      @submit="emits('submit')"
    >
      <v-form
        class="form"
        @update:model-value="(v) => emits('update:valid', v)"
        :model-value="valid"
      >
        <SignTextField
          pattern="mail"
          :model-value="mail"
          @update:model-value="(v) => emits('update:mail', v)"
        />
        <SignTextField
          pattern="username"
          :model-value="name"
          @update:model-value="(v) => emits('update:name', v)"
        />
        <SignTextField
          pattern="password"
          :model-value="password"
          @update:model-value="(v) => emits('update:password', v)"
        />
      </v-form>
    </SignDialog>
  </div>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: {
    top: 40px;
    bottom: 140px;
  }

  & > .toggle {
    height: 40px;
    width: 120px;
    margin: {
      left: 70px;
      right: auto;
    }
  }
}
</style>
