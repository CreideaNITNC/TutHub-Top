<script lang="ts" setup>
import SignDialog from "@/components/dialogs/SignDialog.vue";
import SignTextField from "@/components/dialogs/SignTextField.vue";
import { computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  isMail: {
    type: Boolean,
    default: false,
  },
  valid: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits<{
  (e: "update:id", value: string): void;
  (e: "update:password", value: string): void;
  (e: "update:isMail", value: boolean): void;
  (e: "update:valid", value: boolean): void;
  (e: "update:open", value: boolean): void;
  (e: "submit"): void;
}>();

const toggleLabel = computed(() => {
  return props.isMail ? "by mail" : "by name";
});
function emitId(v: string) {
  emits("update:id", v);
}
</script>

<template>
  <div class="sign-in-dialog">
    <SignDialog
      class="sign-in-dialog"
      @update:model-value="(v) => emits('update:open', v)"
      :model-value="open"
      :valid="valid"
      @submit="emits('submit')"
      submit-text="Sign in"
    >
      <v-form
        class="form"
        @update:model-value="(v) => emits('update:valid', v)"
        :model-value="valid"
      >
        <SignTextField
          v-if="isMail"
          pattern="mail"
          :model-value="id"
          @update:model-value="emitId"
        />
        <SignTextField
          v-else
          pattern="username"
          :model-value="id"
          @update:mode-value="emitId"
        />
        <SignTextField
          pattern="password"
          :model-value="password"
          @update:model-value="(v) => emits('update:password', v)"
        />
        <div class="toggle">
          <v-switch
            :model-value="isMail"
            @update:model-value="(v) => emits('update:isMail', v)"
            :label="toggleLabel"
            color="success"
          />
        </div>
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
  }
}
</style>
