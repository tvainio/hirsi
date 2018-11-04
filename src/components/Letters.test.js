import React from "react";
import { shallow } from "enzyme";
import Letters from "./Letters";
import renderer from "react-test-renderer";


it("only shows correctly guessed letters", () => {
  const letters = ["A", "B"];
  const word = "TABLET";
  const wrapper = shallow(<Letters usedLetters={letters} word={word} />);
  expect(wrapper.contains("T")).toBe(false);
  expect(wrapper.contains("A")).toBe(true);
  expect(wrapper.contains("B")).toBe(true);
  expect(wrapper.contains("L")).toBe(false);
  expect(wrapper.contains("E")).toBe(false);
  expect(wrapper.contains("T")).toBe(false);
});
