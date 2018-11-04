import { combineReducers } from "redux";

// Reducers
import { lettersReducer} from "./reducers";

// Combine Reducers
var reducers = combineReducers({
  letters: lettersReducer
});

export default reducers;
