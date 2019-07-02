import * as actionTypes from '../constants/actionTypes'

let newTodoId = 0

export const addTodo = (content) => (
  {
    type: actionTypes.ADD_TODO,
    id: newTodoId++,
    content
  }
)

export const deleteTodo = (id) => (
  {
    type: actionTypes.DELETE_TODO,
    id
  }
)

export const toggleTodo = (id) => (
  {
    type: actionTypes.TOGGLE_TODO,
    id
  }
)

export const setFilter = (filter) => (
  {
    type: actionTypes.SET_FILTER,
    filter
  }
)