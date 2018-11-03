import * as types from "../actions/action-types";

const gameStateReducer = function(state = 0, action) {
  switch (action.type) {
    case types.RESET:
      return [...action.data];
    default:
      return state;
  }
};

export default gameStateReducer;
