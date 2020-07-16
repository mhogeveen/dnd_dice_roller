import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_TYPE,
   UPDATE_MOD_AMOUNT,
   RESET_ROW,
} from './types'

export const updateDieAmount = () => {
   return {
      type: UPDATE_DIE_AMOUNT,
   }
}

export const updateDieType = () => {
   return {
      type: UPDATE_DIE_TYPE,
   }
}

export const updateModType = () => {
   return {
      type: UPDATE_MOD_TYPE,
   }
}

export const updateModAmount = () => {
   return {
      type: UPDATE_MOD_AMOUNT,
   }
}

export const resetRow = () => {
   return {
      type: RESET_ROW,
   }
}
