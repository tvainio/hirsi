import React from "react";
import { shallow } from "enzyme";
import GameOverModal from "./GameOverModal";
import renderer from "react-test-renderer";


it("does something...", () => {
  const mock = () => {};
  const wrapper = shallow(<GameOverModal visible={true} close={mock} />);
});
