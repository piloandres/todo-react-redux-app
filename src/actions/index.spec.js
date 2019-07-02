import * as actions from './index'
import * as actionTypes from '../constants/actionTypes'
import * as filterTypes from '../constants/filterTypes'

describe('todos actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(
      actions.addTodo('myFisrtTodo')
    ).toEqual(
      {
        type: actionTypes.ADD_TODO,
        id: 0,
        content: 'myFisrtTodo'
      }
    ) 
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(
      actions.deleteTodo(3141592654)
    ).toEqual(
      {
        type: actionTypes.DELETE_TODO,
        id: 3141592654
      }
    )
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(
      actions.toggleTodo(13)
    ).toEqual(
      {
        type: actionTypes.TOGGLE_TODO,
        id: 13
      }
    )
  })

  it('setFilter should create SET_FILTER action', () => {
    expect(
      actions.setFilter(filterTypes.COMPLETED)
    ).toEqual(
      {
        type: actionTypes.SET_FILTER,
        filter: filterTypes.COMPLETED
      }
    )
  })
})