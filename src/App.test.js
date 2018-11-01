import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it.skip("renders without crashing", () => {
  shallow(<App />);
});
