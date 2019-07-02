import * as actionTypes  from '../constants/actionTypes'

const todos = (state = [], action) => {
  switch(action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          completed: false
        }
      ]
    case actionTypes.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
        )
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
        )
    default:
      return state
  }
}

export default todos;