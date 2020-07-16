import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_TYPE,
   UPDATE_MOD_AMOUNT,
   RESET_ROW,
} from './types'

export const updateDieAmount = (value, id) => {
   return {
      type: UPDATE_DIE_AMOUNT,
      id,
      payload: value,
   }
}

export const updateDieType = (value, id) => {
   return {
      type: UPDATE_DIE_TYPE,
      id,
      payload: value,
   }
}

export const updateModType = (value, id) => {
   return {
      type: UPDATE_MOD_TYPE,
      id,
      payload: value,
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
