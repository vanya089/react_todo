export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo
})

export const getAllTodoAction = (todo) => ({
  type: "GET_ALL_TODO",
  payload: todo
})

export const checkTodoAction = (id) => ({
  type: "CHECK_TODO",
  payload: id
})

export const deleteTodoAction = (todo) => ({
  type: "DELETE_TODO",
  payload: todo
})


export const deleteCheckedAction = (todo) => ({
  type: "DELETE_CHECKED",
  payload: todo
})

export const checkAllActon = () => ({
  type: "CHECK_ALL",

})

