import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_AMOUNT,
   RESET_ROW,
   REMOVE_ROW,
   ADD_ROW,
} from '../actions/types'

const initialState = [
   {
      id: 0,
      dieAmount: 1,
      dieType: 4,
      modAmount: 0,
   },
   {
      id: 1,
      dieAmount: 1,
      dieType: 6,
      modAmount: 0,
   },
   {
      id: 2,
      dieAmount: 1,
      dieType: 8,
      modAmount: 0,
   },
   {
      id: 3,
      dieAmount: 1,
      dieType: 10,
      modAmount: 0,
   },
   {
      id: 4,
      dieAmount: 1,
      dieType: 12,
      modAmount: 0,
   },
   {
      id: 5,
      dieAmount: 1,
      dieType: 20,
      modAmount: 0,
   },
]

const resetDie = {
   dieAmount: 1,
   dieType: 20,
   modAmount: 0,
}

let id = 5
const nextId = () => {
   id++
   return id
}

export default (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_DIE_AMOUNT:
         return state.map((die) =>
            die.id === action.id ? { ...die, dieAmount: action.payload } : die
         )
      case UPDATE_DIE_TYPE:
         return state.map((die) =>
            die.id === action.id ? { ...die, dieType: action.payload } : die
         )
      case UPDATE_MOD_AMOUNT:
         return state.map((die) =>
            die.id === action.id ? { ...die, modAmount: action.payload } : die
         )
      case RESET_ROW:
         return state.map((die) => (die.id === action.id ? { ...resetDie, id: die.id } : die))
      case REMOVE_ROW:
         return state.filter((die) => die.id !== action.id)
      case ADD_ROW:
         return [...state, { ...resetDie, id: nextId() }]
      default:
         return state
   }
}
