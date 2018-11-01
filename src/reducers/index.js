import { combineReducers } from "redux";

// Reducers
import measurementReducer from "./measurement-reducer";

// Combine Reducers
var reducers = combineReducers({
  measurements: measurementReducer
});

export default reducers;
