import * as types from "../actions/action-types";

const initialState = { health: 11, usedLetters: [], word: "" };

const gameOver = function(word, usedLetters, health) {
  return (
    word.split("").reduce((prev, letter) => {
      if (prev === false) return false;
      return usedLetters.includes(letter);
    }, true) || health === 0
  );
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case types.KEYPRESS:
      if (gameOver(state.word, state.usedLetters, state.health)) return state;

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
