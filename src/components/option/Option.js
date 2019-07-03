import React from 'react'
import PropTypes from 'prop-types'

const Option = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    disabled={!active}
    style={
      {
        marginLeft: '4px'
      }
    }
  >
    {children}
  </button>
)

Option.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Option