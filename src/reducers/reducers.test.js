import { lettersReducer } from "./reducers";
import * as types from "../actions/action-types";

const initialState = () => ({ usedLetters: [], word: "", gameState: 11 });

describe("lettersReducer", () => {
  describe("KEYPRESS", () => {
    it("adds key to state", () => {
      const event = { type: types.KEYPRESS, event: "A" };
      expect(lettersReducer({ ...initialState() }, event).usedLetters).toEqual([
        "A"
      ]);
      expect(
        lettersReducer({ ...initialState(), word: "jeejeejee" }, event).word
      ).toEqual("jeejeejee");
    });

    it("prevents duplicates", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(
        lettersReducer({ ...initialState(), usedLetters: ["A"] }, event)
          .usedLetters
      ).toEqual(["A"]);
    });

    it("handles everything as uppercase", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(lettersReducer(initialState(), event).usedLetters).toEqual(["A"]);
    });

    it("decreases gameState if new letter is entered", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(lettersReducer(initialState(), event).gameState).toEqual(
        initialState().gameState - 1
      );
    });
    it("prevents duplicates from changing gameState", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(
        lettersReducer({ ...initialState(), usedLetters: ["A"] }, event)
          .gameState
      ).toEqual(initialState().gameState);
    });
  });

  describe("NEW_WORD", () => {
    it("stores new word to state", () => {
      const event = { type: types.NEW_WORD, word: "Mediterranean" };
      expect(lettersReducer(initialState(), event).word).toEqual(
        "MEDITERRANEAN"
      );
    });
  });
});
