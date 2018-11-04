import { combineReducers } from "redux";

// Reducers
import {gameStateReducer, lettersReducer} from "./letters-reducer";

// Combine Reducers
var reducers = combineReducers({
  gameState: gameStateReducer,
  letters: lettersReducer
});

export default reducers;
