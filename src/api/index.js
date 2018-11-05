export function getWord() {
  //  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  //  }
  return Promise.resolve("tablet");
  /*  console.log("FETCHING:", process.env.REACT_APP_API_URL);

  return fetch(process.env.REACT_APP_API_URL, {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY
    },
    method: "GET", // *GET, PUT, DELETE, etc.
    mode: "cors" // no-cors, *same-origin
  }).then(res => res.json());*/
}
export default getWord;
