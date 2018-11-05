export function getWord() {
  /*    return fetch(process.env.REACT_APP_API_URL, {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY
      },
      method: "GET", // *GET, PUT, DELETE, etc.
      mode: "cors" // no-cors, *same-origin
});
    */
  console.log("API: getWord");
  return Promise.resolve("tablet");
}
export default getWord;
