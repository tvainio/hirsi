import * as types from "../actions/action-types";

const userReducer = function(state = [], action) {
  switch (action.type) {
    case types.GET_MEASUREMENTS:
      return [...action.data];
    default:
      return state;
  }
};

export default userReducer;
