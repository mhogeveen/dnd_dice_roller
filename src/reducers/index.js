import { combineReducers } from 'redux'
import diceReducer from './diceReducer'
import resultsReducer from './resultsReducer'
import drawerReducer from './drawerReducer'

export default combineReducers({
   dice: diceReducer,
   results: resultsReducer,
   drawer: drawerReducer,
})
