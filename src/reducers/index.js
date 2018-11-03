import { combineReducers } from "redux";

// Reducers
import gameStateReducer from "./gamestate-reducer";

// Combine Reducers
var reducers = combineReducers({
  gameState: gameStateReducer
});

export default reducers;
