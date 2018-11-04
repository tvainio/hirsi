import { lettersReducer } from "./reducers";
import * as types from "../actions/action-types";

describe("lettersReducer", () => {
  describe("KEYPRESS", () => {
    it("adds key to state", () => {
      const event = { type: types.KEYPRESS, event: "A" };
      expect(
        lettersReducer({ usedLetters: [], word: "jeejeejee" }, event)
          .usedLetters
      ).toEqual(["A"]);
      expect(
        lettersReducer({ usedLetters: [], word: "jeejeejee" }, event).word
      ).toEqual("jeejeejee");
    });

    it("prevents duplicates", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(lettersReducer({ usedLetters: ["A"] }, event).usedLetters).toEqual(
        ["A"]
      );
    });

    it("handles everything as uppercase", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(lettersReducer({ usedLetters: [] }, event).usedLetters).toEqual([
        "A"
      ]);
    });
  });

  describe("NEW_WORD", () => {
    it("stores new word to state", () => {
      const event = { type: types.NEW_WORD, word: "Mediterranean" };
      expect(lettersReducer({ usedLetters: [], word: "" }, event).word).toEqual(
        "MEDITERRANEAN"
      );
    });
  });
});
