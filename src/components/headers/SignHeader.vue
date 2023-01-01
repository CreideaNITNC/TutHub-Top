<script lang="ts" setup>
import BaseHeader from "@/components/headers/BaseHeader.vue";
import TutHubTopButton from "@/components/headers/parts/TutHubTopButton.vue";
import SignButton from "@/components/headers/parts/SignButton.vue";
import SignInDialog from "@/components/dialogs/SignInDialog.vue";
import { PropType, reactive, ref, watch } from "vue";
import SignUpDialog from "@/components/dialogs/SignUpDialog.vue";
import { useRouter } from "vue-router";
import SignInService from "@/models/sign/signInService";
import SignUpService from "@/models/sign/signUpService";

const router = useRouter();
const props = defineProps({
  signInService: {
    type: Object as PropType<SignInService>,
    required: true,
  },
  signUpService: {
    type: Object as PropType<SignUpService>,
    required: true,
  },
});

const isOpenSignInDialog = ref(false);
const isOpenSignUpDialog = ref(false);

const error = ref("");
watch([isOpenSignInDialog, isOpenSignUpDialog], () => (error.value = ""));

const signIn = reactive({
  valid: false,
  isMail: true,
  id: "",
  password: "",
});

const signUp = reactive({
  valid: false,
  mail: "",
  name: "",
  password: "",
});

async function onSignIn() {
  const result = await props.signInService.signIn(
    signIn.isMail,
    signIn.id,
    signIn.password
  );
  if (result.type === "success") {
    isOpenSignInDialog.value = false;
    await router.push("/");
  } else {
    error.value = result.reason;
  }
}

async function onSignUp() {
  const result = await props.signUpService.signUp(
    signUp.mail,
    signUp.name,
    signUp.password
  );
  if (result.type === "success") {
    isOpenSignInDialog.value = false;
    await router.push("/");
  } else {
    error.value = result.reason;
  }
}
</script>

<template>
  <BaseHeader class="sign-header">
    <TutHubTopButton class="top-button" />
    <div class="signs">
      <SignButton
        class="in"
        text="Sign in"
        @click="isOpenSignInDialog = true"
      />
      <SignButton
        class="up"
        text="Sign up"
        @click="isOpenSignUpDialog = true"
      />
    </div>
  </BaseHeader>
  <SignInDialog
    v-model:open="isOpenSignInDialog"
    v-model:valid="signIn.valid"
    v-model:is-mail="signIn.isMail"
    v-model:id="signIn.id"
    v-model:password="signIn.password"
    :error="error"
    @submit="onSignIn"
  />
  <SignUpDialog
    v-model:open="isOpenSignUpDialog"
    v-model:valid="signUp.valid"
    v-model:mail="signUp.mail"
    v-model:name="signUp.name"
    v-model:password="signUp.password"
    :error="error"
    @submit="onSignUp"
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
