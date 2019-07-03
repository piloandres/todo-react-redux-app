import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, content }) => (
  <div
    onClick={onClick}
    style={
      {
        textDecoration: completed ? 'line-through' : 'none'
      }
    }
  >
    {content}
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}

export default Todo