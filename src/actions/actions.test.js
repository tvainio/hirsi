import { newWord } from "./actions";
import * as types from "./action-types";

describe("actions", () => {
  describe("newWord", () => {
    let dispatchFake;
    let getStateFake;
    let apiFake;

    beforeEach(() => {
      dispatchFake = jest.fn();
      getStateFake = jest.fn();
      apiFake = jest.fn(() => Promise.resolve({}));
    });

    it("returns a thunk function", () => {
      let action = newWord();
      expect(typeof action).toBe("function");
    });

    it("calls api", () => {
      const action = newWord();
      expect.assertions(1);
      return action(dispatchFake, getStateFake, apiFake).then(data => {
        expect(apiFake).toHaveBeenCalled();
      });
    });

    it("dispatches NEW_WORD", () => {
      const action = newWord();
      expect.assertions(2);
      return action(dispatchFake, getStateFake, apiFake).then(data => {
        expect(dispatchFake).toHaveBeenCalledTimes(1);
        expect(dispatchFake.mock.calls[0][0].type).toBe("NEW_WORD");
      });
    });
  });
});
