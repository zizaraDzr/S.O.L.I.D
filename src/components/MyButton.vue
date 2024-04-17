<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    default: "Кнопка",
  },
});
const emit = defineEmits(["click-button"]);
</script>

<template>
  <button @click="emit('click-button')">{{ buttonText }}</button>
</template>

<style scoped lang="scss">
button {
        background: teal;
        color: white;
        padding: 5px;
        border-radius: 5px;
        min-width: 100px;
        display: inline-block;
        cursor: pointer;
}
</style>
