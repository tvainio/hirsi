import * as types from "../actions/action-types";

const initialState = { health: 11, usedLetters: [], word: "" };

const puzzleSolved = function(word, usedLetters) {
  return word.split("").reduce((prev, letter) => {
    if (prev === false) return false;
    return usedLetters.includes(letter);
  }, true);
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case types.KEYPRESS:
      if (state.health === 0) return state;
      if (puzzleSolved(state.word, state.usedLetters)) return state;
      const newLetter = action.event.toUpperCase();

      if (state.usedLetters.includes(newLetter)) return state;

      return {
        ...state,
        health: state.word.split("").includes(newLetter)
          ? state.health
          : state.health - 1,
        usedLetters: [...new Set([newLetter, ...state.usedLetters])]
      };

    case types.NEW_WORD:
      return {
        ...initialState,
        word: action.word.toUpperCase()
      };

    default:
      return state;
  }
};

export default reducer;
