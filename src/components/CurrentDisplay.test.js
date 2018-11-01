import React from "react";
import { shallow } from "enzyme";
import CurrentDisplay from "./CurrentDisplay";
import renderer from "react-test-renderer";

it("matches snapshot", () => {
  const title = "asdf";
  const data = {
    temp1: 40.8,
    temp2: 45.1,
    temp3: 47.8,
    temp4: 48.8,
    temp5: 49.4
  };
  const tree = renderer
    .create(<CurrentDisplay data={data} title={title} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it.skip("shows correct title", () => {
  const data = {};
  const title = "temperatures";
  const wrapper = shallow(<CurrentDisplay data={data} title={title} />);
  expect(wrapper.contains(<h2>Current temperatures</h2>)).toBe(true);
});

it("shows data with units", () => {
  const data = {
    temp1: 40.8,
    temp2: 45.1
  };
  const unit = "X";
  const timestamp = "2017-12-31T22:45:07.099Z";
  const wrapper = shallow(
    <CurrentDisplay title="asdf" unit={unit} data={data} />
  );
  const temp = wrapper.find("#data");
  expect(temp.text()).toContain("temp1: 40.8X temp2: 45.1X");
});

it("shows data without units", () => {
  const data = {
    temp1: 40.8,
    temp2: 45.1
  };
  const timestamp = "2017-12-31T22:45:07.099Z";
  const wrapper = shallow(<CurrentDisplay title="asdf" data={data} />);
  const temp = wrapper.find("#data");
  expect(temp.text()).toContain("temp1: 40.8 temp2: 45.1");
});
