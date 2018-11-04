import { combineReducers } from "redux";

// Reducers
import {gameStateReducer, lettersReducer} from "./reducers";

// Combine Reducers
var reducers = combineReducers({
  gameState: gameStateReducer,
  letters: lettersReducer
});

export default reducers;
