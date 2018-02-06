export const state = () => ({
  todos: []
});

export const mutations = {
  init(state, todos) {
    state.todos = todos;
  },
  add(state, todo) {
    state.todos = [...state.todos, todo];
  }
};

export const actions = {
  add({ commit }, task) {
    commit("add", { task, complete: false });
  }
};
