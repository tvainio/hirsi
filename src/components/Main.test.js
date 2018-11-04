import React from "react";
import { shallow } from "enzyme";
import { Main } from "./Main";
import renderer from "react-test-renderer";

describe("Main component", () => {
  const health = 0;
  const usedLetters = ["A"];
  const word = "JEE";
  const dispatch = jest.fn();

  it("shows GameOverModal if health is 0", () => {
    const wrapper = shallow(
      <Main
        health={health}
        usedLetters={usedLetters}
        word={word}
        dispatch={dispatch}
      />
    );
    expect(wrapper.find("GameOverModal").props()["visible"]).toEqual(true);
  });

  it("doesn't show GameOverModal if health is not 0", () => {
    const wrapper = shallow(
      <Main
        health={1}
        usedLetters={usedLetters}
        word={word}
        dispatch={dispatch}
      />
    );
    expect(wrapper.find("GameOverModal").props()["visible"]).toEqual(false);
  });
});
