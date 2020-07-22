import { ADD_RESULT, CLEAR_RESULTS } from '../actions/types'

// const storedResults = localStorage.getItem('results')

let initialState = {
   // 0: {
   //    date: Date.toLocaleString(),
   //    rolls: [],
   //    subtotal: 0,
   //    total: 0,
   //    modAmount: 0,
   //    dieAmount: 0,
   //    dieType: 0,
   // },
}

// if (storedResults) {
//    initialState = JSON.parse(storedResults)
// } else {
//    initialState = {}
// }

export default (state = initialState, action) => {
   switch (action.type) {
      case ADD_RESULT:
         // localStorage.setItem('results', JSON.stringify([action.payload, ...state]))
         const { [action.id]: _, ...newState } = state
         return { [action.id]: action.payload, ...newState }
      case CLEAR_RESULTS:
         // localStorage.setItem('results', JSON.stringify([]))
         return {}
      default:
         return state
   }
}
