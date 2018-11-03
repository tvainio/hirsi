import * as types from "../actions/action-types";

const lettersReducer = function(state = { usedLetters: [] }, action) {
  switch (action.type) {
    case types.KEYPRESS:
      return {
        usedLetters: [
          ...new Set([action.event.toUpperCase(), ...state.usedLetters])
        ]
      };

    default:
      return state;
  }
};

export default lettersReducer;
