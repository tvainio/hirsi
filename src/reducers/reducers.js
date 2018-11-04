import * as types from "../actions/action-types";

const initialState = { usedLetters: [], word: "" };

export const lettersReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.KEYPRESS:
      return {
        ...state,
        usedLetters: [
          ...new Set([action.event.toUpperCase(), ...state.usedLetters])
        ]
      };
    case types.NEW_WORD:
      return {
        usedLetters: [...state.usedLetters],
        word: action.word.toUpperCase()
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
