import React from "react";
import { shallow } from "enzyme";
import Intro from "./Intro";

describe("Intro", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper).toMatchSnapshot();
  });
});
