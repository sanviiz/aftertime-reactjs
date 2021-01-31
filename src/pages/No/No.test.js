import React from "react";
import { shallow } from "enzyme";
import No from "./No";

describe("No", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<No />);
    expect(wrapper).toMatchSnapshot();
  });
});
