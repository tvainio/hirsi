import React from "react";
import { shallow } from "enzyme";
import Info from "./Info";
import renderer from "react-test-renderer";

it("shows game over message only if health equals 0", () => {
  

  expect(shallow(<Info health={1} />).find("#message").text()).not.toContain("You missed:");
  expect(shallow(<Info health={0} />).find("#message").text()).toContain("You missed:");


});

