import {GET_MOVIES} from '../actions/constants'

const moviesReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_MOVIES:
        return payload
      default:
        return state
    }
}

export default moviesReducer;
