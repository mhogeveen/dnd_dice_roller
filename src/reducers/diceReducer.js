import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_AMOUNT,
   UPDATE_NAME,
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

const savedState = JSON.parse(localStorage.getItem('state'))

const stateOnLoad = () => {
   if (savedState === null) {
      return initialState
   } else {
      return savedState
   }
}

export default (state = stateOnLoad(), action) => {
   switch (action.type) {
      case UPDATE_DIE_AMOUNT:
         const stateDieAmount = {
            ...state,
            [action.id]: { ...state[action.id], dieAmount: action.payload },
         }
         localStorage.setItem('state', JSON.stringify(stateDieAmount))
         return stateDieAmount
      case UPDATE_DIE_TYPE:
         const stateDieType = {
            ...state,
            [action.id]: { ...state[action.id], dieType: action.payload },
         }
         localStorage.setItem('state', JSON.stringify(stateDieType))
         return stateDieType
      case UPDATE_MOD_AMOUNT:
         const stateModAmount = {
            ...state,
            [action.id]: { ...state[action.id], modAmount: action.payload },
         }
         localStorage.setItem('state', JSON.stringify(stateModAmount))
         return stateModAmount
      case UPDATE_NAME:
         const stateName = { ...state, [action.id]: { ...state[action.id], name: action.payload } }
         localStorage.setItem('state', JSON.stringify(stateName))
         return stateName
      case REMOVE_ROW:
         const { [action.id]: _, ...stateRemoveRow } = state
         localStorage.setItem('state', JSON.stringify(stateRemoveRow))
         return stateRemoveRow
      case ADD_ROW:
         const stateAddRow = { ...state, [nextId()]: { ...initialDie } }
         localStorage.setItem('state', JSON.stringify(stateAddRow))
         return stateAddRow
      case TOGGLE_EDIT:
         const stateToggleEdit = {
            ...state,
            [action.id]: { ...state[action.id], edit: !state[action.id].edit },
         }
         localStorage.setItem('state', JSON.stringify(stateToggleEdit))
         return stateToggleEdit
      default:
         return state
   }
}
