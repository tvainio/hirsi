import * as types from "./action-types";

export function keypress(event) {
  return {
    type: types.KEYPRESS,
    event
  };
}

export function newWord(word = "tablet") {
  return (dispatch, getState, api) => {
    return api().then(data => {
      dispatch({
        type: types.NEW_WORD,
        word: data
      });
    });
  };
}
