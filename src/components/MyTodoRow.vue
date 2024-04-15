<script setup>
const props = defineProps({
  todo: {
    type: Object,
    default() {
      return { completed: false, title: "default props", id: 0 };
    },
  },
});
</script>

<template>
  <div class="todo-list__row">
    <span :class="{ 'todo-list__row--completed': todo.completed }">
      {{ todo.title }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  &__row {
    width: 100%;
    text-align: left;
    color: #4169e1;
    &--completed {
      text-decoration: line-through;
      color: #2e8b57;
    }
  }
}
</style>
