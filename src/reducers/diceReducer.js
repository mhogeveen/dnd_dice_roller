import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_AMOUNT,
   RESET_ROW,
   REMOVE_ROW,
   ADD_ROW,
} from '../actions/types'

const initialState = {
   0: {
      dieAmount: 1,
      dieType: 20,
      modAmount: 0,
   },
}

const resetDie = {
   dieAmount: 1,
   dieType: 20,
   modAmount: 0,
}

let id = Object.keys(initialState).length - 1
const nextId = () => {
   id++
   return id
}

export default (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_DIE_AMOUNT:
         return { ...state, [action.id]: { ...state[action.id], dieAmount: action.payload } }
      case UPDATE_DIE_TYPE:
         return { ...state, [action.id]: { ...state[action.id], dieType: action.payload } }
      case UPDATE_MOD_AMOUNT:
         return { ...state, [action.id]: { ...state[action.id], modAmount: action.payload } }
      case RESET_ROW:
         return { ...state, [action.id]: { ...resetDie } }
      case REMOVE_ROW:
         const { [action.id]: _, ...newState } = state
         return newState
      case ADD_ROW:
         return { ...state, [nextId()]: { ...resetDie } }
      default:
         return state
   }
}
