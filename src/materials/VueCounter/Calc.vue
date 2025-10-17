<template>
  <button @click="add">+</button>
  <button @click="sub">-</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["add", "sub"]);

const add = () => {
  emits("add");
};

const sub = () => {
  emits("sub");
};
</script>
