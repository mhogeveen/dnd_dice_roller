import { v4 as uuidv4 } from 'uuid'
import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_AMOUNT,
   UPDATE_NAME,
   UPDATE_COLOR,
   REMOVE_ROW,
   ADD_ROW,
   TOGGLE_EDIT,
} from '../actions/types'
import { initialState, initialDie } from '../../assets'

const savedState = JSON.parse(localStorage.getItem('dnd_dice_roller'))

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
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateDieAmount))
         return stateDieAmount
      case UPDATE_DIE_TYPE:
         const stateDieType = {
            ...state,
            [action.id]: { ...state[action.id], dieType: action.payload },
         }
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateDieType))
         return stateDieType
      case UPDATE_MOD_AMOUNT:
         const stateModAmount = {
            ...state,
            [action.id]: { ...state[action.id], modAmount: action.payload },
         }
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateModAmount))
         return stateModAmount
      case UPDATE_NAME:
         const stateName = { ...state, [action.id]: { ...state[action.id], name: action.payload } }
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateName))
         return stateName
      case UPDATE_COLOR:
         const stateColor = {
            ...state,
            [action.id]: { ...state[action.id], color: action.payload },
         }
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateColor))
         return stateColor
      case REMOVE_ROW:
         const { [action.id]: _, ...stateRemoveRow } = state
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateRemoveRow))
         return stateRemoveRow
      case ADD_ROW:
         const stateAddRow = { ...state, [uuidv4()]: { ...initialDie } }
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateAddRow))
         return stateAddRow
      case TOGGLE_EDIT:
         const stateToggleEdit = {
            ...state,
            [action.id]: { ...state[action.id], edit: !state[action.id].edit },
         }
         localStorage.setItem('dnd_dice_roller', JSON.stringify(stateToggleEdit))
         return stateToggleEdit
      default:
         return state
   }
}
