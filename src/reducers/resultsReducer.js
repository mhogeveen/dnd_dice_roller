import { ADD_RESULT, CLEAR_RESULTS } from '../actions/types'

export default (state = [], action) => {
   switch (action.type) {
      case ADD_RESULT:
         return [...state, action.payload]
      case CLEAR_RESULTS:
         return []
      default:
         return state
   }
}
