import {
   UPDATE_DIE_AMOUNT,
   UPDATE_DIE_TYPE,
   UPDATE_MOD_AMOUNT,
   UPDATE_NAME,
   UPDATE_COLOR,
   REMOVE_ROW,
   ADD_ROW,
   ADD_RESULT,
   CLEAR_RESULTS,
   TOGGLE_EDIT,
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

export const updateName = (value, id) => {
   return {
      type: UPDATE_NAME,
      id,
      payload: value,
   }
}

export const updateColor = (value, id) => {
   return {
      type: UPDATE_COLOR,
      id,
      payload: value,
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

export const addResult = (result, id) => {
   return {
      type: ADD_RESULT,
      payload: result,
      id,
   }
}

export const clearResults = () => {
   return {
      type: CLEAR_RESULTS,
   }
}

export const toggleEdit = (id) => {
   return {
      type: TOGGLE_EDIT,
      id,
   }
}
