<script lang="ts" setup>
import { computed, PropType } from "vue";

type Pattern = "username" | "mail" | "password";
type Rule = (value: string) => true | string;

const props = defineProps({
  pattern: {
    type: String as PropType<Pattern>,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const RULES: Record<Pattern, readonly Rule[]> = {
  username: [
    (value: string) => !!value || "1文字以上です",
    (value: string) => !!value.match(/^[a-zA-Z0-9]+$/) || "半角英数字のみです",
  ],
  mail: [
    (v: string) => !!v || "入力してください",
    (v: string) => /.+@.+/.test(v) || "メールアドレスが正しくありません",
  ],
  password: [
    (value: string) => value.length >= 8 || "8文字以上でお願いできませんか？",
    (value: string) => !!value.match(/^[a-zA-Z0-9]+$/) || "半角英数字のみです",
  ],
};

const rules = computed(() => RULES[props.pattern]);
</script>

<template>
  <div class="sign-text-field">
    <v-text-field
      class="shrink"
      :label="pattern"
      :rules="rules"
      hide-details="auto"
      bg-color="white"
      @update:model-value="(v) => emits('update:modelValue', v)"
      :model-value="modelValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.sign-text-field {
  width: 350px;
}
</style>
