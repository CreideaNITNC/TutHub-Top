<script setup lang="ts">
import SignHeader from "@/components/sign/SignHeader.vue";
import { PropType, ref } from "vue";
import Service from "@/service/service";
import SignInDialogData, {
  SIGN_IN_DIALOG_DATA_DEFAULT,
} from "@/components/sign/types/signInDialogData";
import SignUpDialogData, {
  SIGN_UP_DIALOG_DATA_DEFAULT,
} from "@/components/sign/types/signUpDialogData";
import { useRouter } from "vue-router";

const props = defineProps({
  service: {
    type: Object as PropType<Service>,
    required: true,
  },
});

const router = useRouter();
const signIn = ref<SignInDialogData>(SIGN_IN_DIALOG_DATA_DEFAULT);
const signUp = ref<SignUpDialogData>(SIGN_UP_DIALOG_DATA_DEFAULT);

async function onSignIn(): Promise<void> {
  const result = await props.service.signInService.signIn(
    signIn.value.isMail,
    signIn.value.id,
    signIn.value.password
  );
  if (result.type === "success") {
    signIn.value = { ...signIn.value, open: false };
    await router.push("/");
  } else {
    signIn.value = { ...signIn.value, error: result.reason };
  }
}

async function onSignUp(): Promise<void> {
  const result = await props.service.signUpService.signUp(
    signUp.value.mail,
    signUp.value.name,
    signUp.value.password
  );
  if (result.type === "success") {
    signUp.value = { ...signUp.value, open: false };
    await router.push("/");
  } else {
    signUp.value = { ...signUp.value, error: result.reason };
  }
}
</script>

<template>
  <SignHeader
    v-model:sign-in="signIn"
    v-model:sign-up="signUp"
    @sign-in="onSignIn"
    @sign-up="onSignUp"
  />
</template>
