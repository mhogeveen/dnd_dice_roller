import { combineReducers } from 'redux'
import diceReducer from './diceReducer'
import resultsReducer from './resultsReducer'

export default combineReducers({
   dice: diceReducer,
   results: resultsReducer,
})
