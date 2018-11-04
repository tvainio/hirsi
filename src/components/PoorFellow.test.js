import React from "react";
import { shallow } from "enzyme";
import PoorFellow from "./PoorFellow";
import renderer from "react-test-renderer";

it("shows gamestate", () => {
  const state = 3;
  const wrapper = shallow(
    <PoorFellow gameState={state} />
  );
  const temp = wrapper.find("#state");
  expect(temp.text()).toContain("game state 3");
});
