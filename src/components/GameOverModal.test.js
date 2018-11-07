import React from "react";
import { shallow } from "enzyme";
import GameOverModal from "./GameOverModal";
import renderer from "react-test-renderer";

it("calls close function when button is clicked", () => {
  const mock = jest.fn();
  const wrapper = shallow(
    <GameOverModal visible={true} close={mock} win={false} />
  );
  wrapper.find("Button").simulate("click");
  expect(mock).toHaveBeenCalled();
});

it("says game over if game is lost", () => {
  const mock = jest.fn();
  const wrapper = shallow(
    <GameOverModal visible={true} close={mock} win={false} />
  );
  expect(wrapper.find("#message").text()).toContain("GAME OVER");
});

it("says you won if game is lost", () => {
  const mock = jest.fn();
  const wrapper = shallow(
    <GameOverModal visible={true} close={mock} win={true} />
  );
  expect(wrapper.find("#message").text()).toContain("SUCCESS");
});
