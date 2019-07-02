import * as filterTypes from '../constants/filterTypes'
import * as actionTypes from '../constants/actionTypes';

const filters = (state = filterTypes.ALL, action) => {
  switch(action.type) {
    case actionTypes.SET_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filters