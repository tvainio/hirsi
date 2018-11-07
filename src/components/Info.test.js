import React from "react";
import { shallow } from "enzyme";
import Info from "./Info";
import renderer from "react-test-renderer";

it("shows game over message only if health equals 0", () => {
  expect(
    shallow(<Info health={0} usedLetters={[]} word={""} />)
      .find("#message")
      .text()
  ).toContain("YOU MISSED:");
});
it("shows missed letters", () => {
  expect(
    shallow(<Info health={0} usedLetters={["A", "B"]} word={"TABLET"} />)
      .find("#missed")
      .text()
  ).toBe("T, L, E");
});
