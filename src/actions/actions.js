import * as types from "./action-types";

let DATA_URL = "https://jeejeeejee";

export function reset() {
  return (dispatch, getState) => {
    return fetch(DATA_URL, {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY
      },
      method: "GET", // *GET, PUT, DELETE, etc.
      mode: "cors" // no-cors, *same-origin
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.RESET,
          data
        });
      });
  };
}

export function keypress(event) {
  return {
    type: types.KEYPRESS,
    event
  };
}

export function newWord(word) {
  return {
    type: types.NEW_WORD,
    word
  };
}
