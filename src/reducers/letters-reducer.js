import * as types from "../actions/action-types";

const initialState = { usedLetters: [] };

export const lettersReducer = function(state = initialState, action) {
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

export const gameStateReducer = function(state = 0, action) {
  switch (action.type) {
    case types.RESET:
      return 0;
    case types.KEYPRESS:
      return state + 1;
    default:
      return state;
  }
};
