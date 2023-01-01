<script lang="ts" setup>
import SignDialog from "@/components/sign/dialogs/SignDialog.vue";
import SignTextField from "@/components/sign/dialogs/SignTextField.vue";
import { computed, PropType } from "vue";
import SignInDialogData, {
  SIGN_IN_DIALOG_DATA_DEFAULT,
} from "@/components/sign/types/signInDialogData";

const props = defineProps({
  modelValue: {
    type: Object as PropType<SignInDialogData>,
    default: SIGN_IN_DIALOG_DATA_DEFAULT,
  },
});

const emits = defineEmits<{
  (e: "update:modelValue", value: SignInDialogData): void;
  (e: "submit"): void;
}>();

const toggleLabel = computed(() => {
  return props.modelValue.isMail ? "by mail" : "by name";
});

function emit(data: Object): void {
  emits("update:modelValue", { ...props.modelValue, ...data });
}
</script>

<template>
  <div class="sign-in-dialog">
    <SignDialog
      class="sign-in-dialog"
      @update:model-value="(open) => emit({ open })"
      :model-value="modelValue.open"
      :valid="modelValue.valid"
      @submit="emits('submit')"
      submit-text="Sign in"
    >
      <v-form
        class="form"
        @update:model-value="(valid) => emit({ valid })"
        :model-value="modelValue.valid"
      >
        <SignTextField
          v-if="modelValue.isMail"
          pattern="mail"
          :model-value="modelValue.id"
          @update:model-value="(id) => emit({ id })"
        />
        <SignTextField
          v-else
          pattern="username"
          :model-value="modelValue.id"
          @update:model-value="(id) => emit({ id })"
        />
        <SignTextField
          pattern="password"
          :model-value="modelValue.password"
          @update:model-value="(password) => emit({ password })"
        />
        <div class="toggle">
          <v-switch
            :model-value="modelValue.isMail"
            @update:model-value="(isMail) => emit({ isMail })"
            :label="toggleLabel"
            color="success"
          />
        </div>
        <p v-show="modelValue.error" class="error">{{ modelValue.error }}</p>
      </v-form>
    </SignDialog>
  </div>
</template>

<style lang="scss" scoped>
.sign-in-dialog {
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

    & > .error {
      position: absolute;
      bottom: 70px;
      width: 100%;
      text-align: center;
      color: red;
    }
  }
}
</style>
