<script lang="ts" setup>
import BaseHeader from "@/components/headers/BaseHeader.vue";
import TutHubTopButton from "@/components/headers/parts/TutHubTopButton.vue";
import SignButton from "@/components/headers/parts/SignButton.vue";
import SignInDialog from "@/components/dialogs/SignInDialog.vue";
import { reactive, ref } from "vue";
import SignUpDialog from "@/components/dialogs/SignUpDialog.vue";

const isOpenSignInDialog = ref(false);
const isOpenSignUpDialog = ref(false);

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
  />
  <SignUpDialog
    @submit="log"
    v-model:open="isOpenSignUpDialog"
    v-model:valid="signUp.valid"
    v-model:mail="signUp.mail"
    v-model:name="signUp.name"
    v-model:password="signUp.password"
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
