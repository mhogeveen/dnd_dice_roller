import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_TYPE,
   UPDATE_MOD_AMOUNT,
   RESET_ROW,
} from '../actions/types'

const initialState = {
   dieAmount: 1,
   dieType: 4,
   modType: '+',
   modAmount: 0,
}

export default (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_DIE_AMOUNT:
         return
      case UPDATE_DIE_TYPE:
         return
      case UPDATE_MOD_TYPE:
         return
      case UPDATE_MOD_AMOUNT:
         return
      case RESET_ROW:
         return
      default:
         return state
   }
}
