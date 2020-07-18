import { ADD_RESULT, CLEAR_RESULTS } from '../actions/types'

const storedResults = localStorage.getItem('results')

let initialState = null

if (storedResults) {
   initialState = JSON.parse(storedResults)
} else {
   initialState = []
}

export default (state = initialState, action) => {
   switch (action.type) {
      case ADD_RESULT:
         localStorage.setItem('results', JSON.stringify([action.payload, ...state]))
         return [action.payload, ...state]
      case CLEAR_RESULTS:
         localStorage.setItem('results', JSON.stringify([]))
         return []
      default:
         return state
   }
}
