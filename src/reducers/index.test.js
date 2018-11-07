import reducer from ".";
import * as types from "../actions/action-types";

const initialState = () => ({ usedLetters: [], word: "JEE", health: 11 });

describe("reducer", () => {
  describe("KEYPRESS", () => {
    it("adds key to state", () => {
      const event = { type: types.KEYPRESS, event: "A" };
      expect(reducer({ ...initialState() }, event).usedLetters).toEqual(["A"]);
      expect(
        reducer({ ...initialState(), word: "jeejeejee" }, event).word
      ).toEqual("jeejeejee");
    });

    it("prevents duplicates", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(
        reducer({ ...initialState(), usedLetters: ["A"] }, event).usedLetters
      ).toEqual(["A"]);
    });

    it("handles everything as uppercase", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(reducer(initialState(), event).usedLetters).toEqual(["A"]);
    });

    it("decreases health if new letter is entered", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(reducer(initialState(), event).health).toEqual(
        initialState().health - 1
      );
    });
    it("prevents duplicates from changing health", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      expect(
        reducer({ ...initialState(), usedLetters: ["A"] }, event).health
      ).toEqual(initialState().health);
    });

    it("prevents correct guesses from changing health", () => {
      const event = { type: types.KEYPRESS, event: "T" };
      expect(
        reducer({ ...initialState(), word: "TABLE", usedLetters: ["A"] }, event)
          .health
      ).toEqual(initialState().health);
    });

    it("ignores everything if health is 0", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      const stateWithAllHealthGone = { ...initialState(), health: 0 };
      expect(reducer(stateWithAllHealthGone, event)).toEqual(
        stateWithAllHealthGone
      );
    });

    it("ignores everything if puzzle is already solved", () => {
      const event = { type: types.KEYPRESS, event: "a" };
      const state = { usedLetters: ["O", "K"], word: "OK", health: 11 };
      expect(reducer(state, event)).toEqual(state);
    });
  });

  describe("NEW_WORD", () => {
    it("stores new word to state", () => {
      const event = { type: types.NEW_WORD, word: "Mediterranean" };
      expect(reducer(initialState(), event).word).toEqual("MEDITERRANEAN");
    });
    it("resets game", () => {
      const event = { type: types.NEW_WORD, word: "Mediterranean" };
      expect(reducer(initialState(), event).health).toEqual(
        initialState().health
      );
      expect(reducer(initialState(), event).usedLetters).toEqual(
        initialState().usedLetters
      );
    });
  });
});
