import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/types'

export default (state = false, action) => {
   switch (action.type) {
      case OPEN_DRAWER:
         return true
      case CLOSE_DRAWER:
         return false
      default:
         return state
   }
}
