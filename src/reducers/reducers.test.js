import { lettersReducer } from "./letters-reducer";
import * as types from "../actions/action-types";

describe("KEYPRESS", () => {
  it("adds key to state", () => {
    const event = { type: types.KEYPRESS, event: "A" };
    expect(lettersReducer({ usedLetters: [] }, event).usedLetters).toEqual([
      "A"
    ]);
  });

  it("prevents duplicates", () => {
    const event = { type: types.KEYPRESS, event: "a" };
    expect(lettersReducer({ usedLetters: ["A"] }, event).usedLetters).toEqual([
      "A"
    ]);
  });

  it("handles everything as uppercase", () => {
    const event = { type: types.KEYPRESS, event: "a" };
    expect(lettersReducer({ usedLetters: [] }, event).usedLetters).toEqual([
      "A"
    ]);
  });
});
