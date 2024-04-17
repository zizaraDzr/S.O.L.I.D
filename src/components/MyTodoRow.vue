<script setup>
const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="todo-list__row">
    <span>{{ id }}. </span>
    <span :class="{ 'todo-list__row--completed': completed }">
      {{ title }}
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
