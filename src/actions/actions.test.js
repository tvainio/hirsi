import { newWord } from "./actions";
import * as types from "./action-types";

describe("actions", () => {
  describe("newWord", () => {
    it("returns new word action", () => {
      const expected = { type: types.NEW_WORD, word: "Mediterranean" };
      expect(newWord(expected.word)).toEqual(expected);
    });
  });
});
