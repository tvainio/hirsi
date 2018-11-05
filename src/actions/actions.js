import * as types from "./action-types";
/*
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
*/
export function keypress(event) {
  return {
    type: types.KEYPRESS,
    event
  };
}

export function newWord(word = "tablet") {
  return (dispatch, getState, api) => {
    return api()
//      .then(res => res.json())
      .then(data => {
        dispatch({
          
          type: types.NEW_WORD,
          word: data
        });
      })
  }
}
