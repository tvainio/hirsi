import React from "react";
import { shallow } from "enzyme";
import Letters from "./Letters";
import renderer from "react-test-renderer";

it("shows correct letters", () => {
  const letters = ["A", "B"];
  const wrapper = shallow(<Letters usedLetters={letters} />);
  expect(wrapper.contains("A")).toBe(true);
  expect(wrapper.contains("B")).toBe(true);
});
