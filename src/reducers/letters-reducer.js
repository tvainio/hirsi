import * as types from "../actions/action-types";

const lettersReducer = function(state = [], action) {
  switch (action.type) {
    case types.KEYPRESS:
      return [action.event, ...state];
    default:
      return state;
  }
};

export default lettersReducer;
