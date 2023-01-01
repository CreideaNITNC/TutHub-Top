<script lang="ts" setup>
import BaseHeader from "@/components/headers/BaseHeader.vue";
import TutHubTopButton from "@/components/headers/parts/TutHubTopButton.vue";
import SignButton from "@/components/sign/SignButton.vue";
import SignInDialog from "@/components/sign/dialogs/SignInDialog.vue";
import { PropType } from "vue";
import SignUpDialog from "@/components/sign/dialogs/SignUpDialog.vue";
import SignInDialogData, {
  SIGN_IN_DIALOG_DATA_DEFAULT,
} from "@/components/sign/types/signInDialogData";
import SignUpDialogData, {
  SIGN_UP_DIALOG_DATA_DEFAULT,
} from "@/components/sign/types/signUpDialogData";

defineProps({
  signIn: {
    type: Object as PropType<SignInDialogData>,
    default: SIGN_IN_DIALOG_DATA_DEFAULT,
  },
  signUp: {
    type: Object as PropType<SignUpDialogData>,
    default: SIGN_UP_DIALOG_DATA_DEFAULT,
  },
});

const emits = defineEmits<{
  (e: "update:signIn", value: SignInDialogData): void;
  (e: "update:signUp", value: SignUpDialogData): void;
  (e: "signIn"): void;
  (e: "signUp"): void;
}>();

function openSignIn(): void {
  emits("update:signIn", { ...SIGN_IN_DIALOG_DATA_DEFAULT, open: true });
}
function openSignUp(): void {
  emits("update:signUp", { ...SIGN_UP_DIALOG_DATA_DEFAULT, open: true });
}
</script>

<template>
  <BaseHeader class="sign-header">
    <TutHubTopButton class="top-button" />
    <div class="signs">
      <SignButton class="in" text="Sign in" @click="openSignIn" />
      <SignButton class="up" text="Sign up" @click="openSignUp" />
    </div>
  </BaseHeader>
  <SignInDialog
    @update:model-value="(v) => emits('update:signIn', v)"
    :model-value="signIn"
    @submit="emits('signIn')"
  />
  <SignUpDialog
    @update:model-value="(v) => emits('update:signUp', v)"
    :model-value="signUp"
    @submit="emits('signUp')"
  />
</template>

<style lang="scss" scoped>
.sign-header {
  & > .signs {
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .in {
      border-color: #9f9dff;
    }

    & > .up {
      border-color: #ffaaaa;
    }
  }
}
</style>
