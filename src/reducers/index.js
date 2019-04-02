import { combineReducers } from "redux";
import game from './game';
import timerReducer from './timer'

const rootReducer = combineReducers({
  game,
  timerReducer,
});

export default rootReducer;