<script lang="ts" setup>
import { PropType, ref } from "vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  names: {
    type: Array as PropType<readonly string[]>,
    default: () => [],
  },
  name: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
const emits = defineEmits<{
  (e: "update:open", value: boolean): void;
  (e: "update:title", value: string): void;
  (e: "update:name", value: string): void;
  (e: "create"): void;
}>();

const repositoryNameRules = [
  (v: string) => !!v || "入力してください",
  (v: string) =>
    /^[0-9a-zA-Z-_]+$/.test(v) ||
    "半角英数字、ハイフン、アンダースコアのみ使用可能です",
  (v: string) => !props.names.includes(v) || "既にそのリポジトリ名は存在します",
];

const valid = ref(false);

function onCreate() {
  if (valid.value) emits("create");
}
</script>

<template>
  <v-dialog
    transition="dialog-bottom-transition"
    class="sign-dialog"
    :model-value="open"
    @update:model-value="emits('update:open', false)"
  >
    <div class="dialog-board">
      <div class="header">
        <button @click="emits('update:open', false)" class="cancel btn">
          cancel
        </button>
        <button @click="onCreate" class="submit btn">作成</button>
      </div>
      <v-form class="v-form" v-model="valid">
        <div class="text">
          <v-text-field
            class="shrink v-text-field"
            label="リポジトリ名 （例）PHP-Laravel-todo"
            :rules="repositoryNameRules"
            hide-details="auto"
            bg-color="white"
            @update:model-value="(v) => emits('update:name', v)"
            :model-value="name"
          />
        </div>
        <div class="text">
          <v-text-field
            class="shrink v-text-field"
            label="タイトル （例）PHP LaravelでTodoアプリ実装"
            hide-details="auto"
            bg-color="white"
            @update:model-value="(v) => emits('update:title', v)"
            :model-value="title"
          />
        </div>
      </v-form>
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
    background: #21384f;
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
        color: #a2a19e;
      }
    }

    & > .v-form {
      width: 100%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      & > .text {
        width: 80%;
      }
    }
  }
}
</style>
