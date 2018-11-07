import React from "react";
import { shallow } from "enzyme";
import PoorFellow from "./PoorFellow";
import renderer from "react-test-renderer";

it.skip("shows gamestate", () => {
  const state = 3;
  const wrapper = shallow(<PoorFellow health={state} />);
  const temp = wrapper.find("#health");
  expect(temp.text()).toContain("health 3");
});
