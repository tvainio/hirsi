export function getWord() {
  let DATA_URL = process.env.REACT_APP_API_URL;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    DATA_URL = "/dev/word";
  }

  return fetch(DATA_URL, {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY
    },
    method: "GET", // *GET, PUT, DELETE, etc.
    mode: "cors" // no-cors, *same-origin
  }).then(res => res.text());
}
export default getWord;
