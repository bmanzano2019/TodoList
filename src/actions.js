export const addTodo = (todo) => {
  return { type: "ADD_TODO", payload: todo };
}

export const deleteTodo = (id) => {
  return { type: "DELETE_TODO", payload: id };
}

export const changeStatus = (id) => {
  return { type: "CHANGE_STATUS", payload: id };
}

export const initTodos = (todos) => {
  return { type: "INIT_TODOS", payload: todos };
}
