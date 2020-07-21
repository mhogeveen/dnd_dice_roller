import { combineReducers } from 'redux'
import diceReducer from './diceReducer'
import resultsReducer from './resultsReducer'
import editReducer from './editReducer'
import drawerReducer from './drawerReducer'

export default combineReducers({
   dice: diceReducer,
   results: resultsReducer,
   edit: editReducer,
   drawer: drawerReducer,
})
