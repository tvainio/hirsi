import * as types from "../actions/action-types";

const initialState = { gameState: 0, usedLetters: [], word: "" };

export const lettersReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.KEYPRESS:
      const newLetter = action.event.toUpperCase();
      return {
        ...state,
        gameState: state.usedLetters.includes(newLetter)
          ? state.gameState
          : state.gameState + 1,
        usedLetters: [...new Set([newLetter, ...state.usedLetters])]
      };
    case types.NEW_WORD:
      return {
        ...state,
        usedLetters: [...state.usedLetters],
        word: action.word.toUpperCase()
      };

    default:
      return state;
  }
};
