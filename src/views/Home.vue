<script setup>
import { onMounted, ref, reactive  } from "vue";
import MyHeader from "../components/MyHeader.vue";
import MyTodoList from "../components/MyTodoList.vue";
import MyTodoCard from "../components/MyTodoCard.vue";
import MyTodoRow from "../components/MyTodoRow.vue";
import { Api } from "../services/api";
import MyButton from "../components/MyButton.vue";

const listText = {
  card: "Вид карточками",
  row: "Вид списком",
};

let todos = ref([]);
let view = ref(false);
let textBtn = reactive({ text: listText.card });

// БУКВА - S
// const fetchTodos = () => {
//             fetch('https://jsonplaceholder.typicode.com/todos/')
//                 .then((response) => response.json())
//                 .then((response) => {
//                     todos.value = response;
//                 });
//         };
const fetchTodos = async () => {
  const api = new Api();
  return await api.fetch("todos");
};
onMounted(async () => {
  todos.value = await fetchTodos();
});

function toggleBtn() {
  view.value = !view.value;
  view.value
    ? (textBtn.text = listText.row)
    : (textBtn.text = listText.card);
}
</script>

<template>
  <div>
    <MyHeader :listName="'List'" />
    <MyButton @click-button="toggleBtn" :buttonText="textBtn.text"></MyButton>
    <main>
      <MyTodoList>
        <!-- Буква О  переключать между компонентами-->
        <!-- Буква Iразделение одного пропса todo с объектом на разные пропсы  :title="todo.title" :completed="todo.completed"-->
        <MyTodoCard
          v-if="view"
          v-for="todo in todos"
          :key="todo.id"
          :title="todo.title"
          :completed="todo.completed"
        />
        <MyTodoRow
          v-if="!view"
          v-for="todo in todos"
          :id="todo.id"
          :key="todo.id"
          :title="todo.title"
          :completed="todo.completed"
        />
      </MyTodoList>
    </main>
  </div>
</template>

<style lang="scss">
.header {
  width: 100%;
  &-nav {
    background: teal;
    width: 100%;
    height: 56px;
  }
}
.container {
  padding: 1rem;
}
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  &__task {
    width: 24%;
    padding: 1.5rem;
    margin: 0.5%;
    text-align: left;
    color: #4169e1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    &--completed {
      color: #2e8b57;
      text-decoration: line-through;
    }
  }
}
</style>
