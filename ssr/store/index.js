export const state = () => ({
  todos: []
});

export const mutations = {
  init(state, todos) {
    state.todos = todos;
  },
  add(state, todo) {
    state.todos = [...state.todos, todo];
  },
  toggle(state, todo) {
    state.todos = state.todos.map(t => (t.id === todo.id ? todo : t));
  }
};

export const actions = {
  add({ commit }, task) {
    commit("add", { task, complete: false });
  },

  toggle({ commit }, todo) {
    const _todo = Object.assign({}, todo);
    _todo.complete = !_todo.complete;
    commit("toggle", _todo);
  }
};
