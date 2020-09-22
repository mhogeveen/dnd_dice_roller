import { ADD_RESULT, CLEAR_RESULTS } from '../actions/types'

export default (state = {}, action) => {
   switch (action.type) {
      case ADD_RESULT:
         const { [action.id]: _, ...newState } = state
         return { [action.id]: action.payload, ...newState }
      case CLEAR_RESULTS:
         return {}
      default:
         return state
   }
}
