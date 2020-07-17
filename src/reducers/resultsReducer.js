import { ADD_RESULT } from '../actions/types'

export default (state = [], action) => {
   switch (action.type) {
      case ADD_RESULT:
         return [...state, action.payload]
      default:
         return state
   }
}
