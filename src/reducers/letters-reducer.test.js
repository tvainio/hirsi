import lettersReducer from "./letters-reducer";
import * as types from "../actions/action-types";

it("adds key to state", () => {
  const event = { type: types.KEYPRESS, event: "a" };
  expect(lettersReducer([], event)).toEqual(["a"]);
});
