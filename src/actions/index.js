import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_AMOUNT,
   RESET_ROW,
   REMOVE_ROW,
   ADD_ROW,
   ADD_RESULT,
   CLEAR_RESULTS,
   OPEN_DRAWER,
   CLOSE_DRAWER,
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

export const addResult = (result) => {
   return {
      type: ADD_RESULT,
      payload: result,
   }
}

export const clearResults = () => {
   return {
      type: CLEAR_RESULTS,
   }
}

export const openDrawer = () => {
   return {
      type: OPEN_DRAWER,
   }
}

export const closeDrawer = () => {
   return {
      type: CLOSE_DRAWER,
   }
}
