<template>
  <div class="pv4 dark-red">

    <form @submit.prevent="add(task)">
      <input v-model="task" type="text" />
    </form>

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li :key="todo.task" v-for="todo of todos" class="ph3 pv3 bb b--light-silver">
          {{todo.task}}
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { init } from "./shared";

export default {
  fetch: init,
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  data() {
    return {
      task: "aaa"
    };
  },
  methods: {
    ...mapActions(["add"])
  }
};
</script>
