import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_AMOUNT,
   UPDATE_NAME,
   RESET_ROW,
   REMOVE_ROW,
   ADD_ROW,
   TOGGLE_EDIT,
} from '../actions/types'

const initialState = {
   0: {
      name: '',
      edit: false,
      dieAmount: 1,
      dieType: 20,
      modAmount: 0,
   },
}

const initialDie = {
   name: '',
   edit: false,
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
      case UPDATE_NAME:
         return { ...state, [action.id]: { ...state[action.id], name: action.payload } }
      case RESET_ROW:
         return { ...state, [action.id]: { ...initialDie } }
      case REMOVE_ROW:
         const { [action.id]: _, ...newState } = state
         return newState
      case ADD_ROW:
         return { ...state, [nextId()]: { ...initialDie } }
      case TOGGLE_EDIT:
         return { ...state, [action.id]: { ...state[action.id], edit: !state[action.id].edit } }
      default:
         return state
   }
}
