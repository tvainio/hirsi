import * as types from "../actions/action-types";

const gameStateReducer = function(state = 0, action) {
  switch (action.type) {
    case types.RESET:
      return 0;
    case types.KEYPRESS:
      return state + 1;
    default:
      return state;
  }
};

export default gameStateReducer;
