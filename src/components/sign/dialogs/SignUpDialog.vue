<script lang="ts" setup>
import SignDialog from "@/components/sign/dialogs/SignDialog.vue";
import SignTextField from "@/components/sign/dialogs/SignTextField.vue";
import { PropType } from "vue";
import SignUpDialogData, {
  SIGN_UP_DIALOG_DATA_DEFAULT,
} from "@/components/sign/types/signUpDialogData";

const props = defineProps({
  modelValue: {
    type: Object as PropType<SignUpDialogData>,
    default: SIGN_UP_DIALOG_DATA_DEFAULT,
  },
});

const emits = defineEmits<{
  (e: "update:modelValue", value: SignUpDialogData): void;
  (e: "submit"): void;
}>();

function emit(data: Object): void {
  emits("update:modelValue", { ...props.modelValue, ...data });
}
</script>

<template>
  <div class="sign-up-dialog">
    <SignDialog
      @update:model-value="(open) => emit({ open })"
      :model-value="modelValue.open"
      :valid="modelValue.valid"
      submit-text="Sign up"
      @submit="emits('submit')"
    >
      <v-form
        class="form"
        @update:model-value="(valid) => emit({ valid })"
        :model-value="modelValue.valid"
      >
        <SignTextField
          pattern="mail"
          :model-value="modelValue.mail"
          @update:model-value="(mail) => emit({ mail })"
        />
        <SignTextField
          pattern="username"
          :model-value="modelValue.name"
          @update:model-value="(name) => emit({ name })"
        />
        <SignTextField
          pattern="password"
          :model-value="modelValue.password"
          @update:model-value="(password) => emit({ password })"
        />
        <p v-show="modelValue.error" class="error">{{ modelValue.error }}</p>
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
  position: relative;

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

  & > .error {
    position: absolute;
    bottom: 70px;
    width: 100%;
    text-align: center;
    color: red;
  }
}
</style>
