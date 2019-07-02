import todos from './todos'
import * as actionTypes from '../constants/actionTypes'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: actionTypes.ADD_TODO,
        content: 'Test add todo 1',
        id: 0
      })
    ).toEqual([
      {
        id: 0,
        content: 'Test add todo 1',
        completed : false
      }
    ])

    expect(
      todos([
        {
          id: 0,
          content: 'Test add todo 1',
          completed : true
        }
      ], {
        type: actionTypes.ADD_TODO,
        content: 'Test add todo 2',
        id: 1
      })
    ).toEqual([
      {
        id: 0,
        content: 'Test add todo 1',
        completed : true
      },
      {
        id: 1,
        content: 'Test add todo 2',
        completed: false
      }
    ])
  })

  it('should handle DELETE_TODO', () => {
    expect(
      todos([
        {
          id: 0,
          content: 'Test add todo 1',
          completed : true
        },
        {
          id: 1,
          content: 'Test add todo 2',
          completed: false
        }
      ],
      {
        type: actionTypes.DELETE_TODO,
        id: 1
      })   
    ).toEqual([
      {
        id: 0,
        content: 'Test add todo 1',
        completed : true
      }
    ])
  })
  
})