import React from "react";
import { shallow } from "enzyme";
import GameOverModal from "./GameOverModal";
import renderer from "react-test-renderer";


it("calls close function when button is clicked", () => {
  const mock = jest.fn();
  const wrapper = shallow(<GameOverModal visible={true} close={mock} />);
  wrapper.find("Button").simulate('click');
  expect(mock).toHaveBeenCalled();
});
