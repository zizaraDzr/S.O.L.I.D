<script setup>
</script>

<template>
  <div class="container">
    <div class="todo-list">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
