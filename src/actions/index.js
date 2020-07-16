import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_TYPE,
   UPDATE_MOD_AMOUNT,
   RESET_ROW,
   REMOVE_ROW,
   ADD_ROW,
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

export const updateModAmount = (value, id) => {
   return {
      type: UPDATE_MOD_AMOUNT,
      id,
      payload: value,
   }
}

export const resetRow = (id) => {
   return {
      type: RESET_ROW,
      id,
   }
}

export const removeRow = (id) => {
   return {
      type: REMOVE_ROW,
      id,
   }
}

export const addRow = () => {
   return {
      type: ADD_ROW,
   }
}
