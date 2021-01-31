import React from "react";
import { shallow } from "enzyme";
import Yes from "./Yes";

describe("Yes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Yes />);
    expect(wrapper).toMatchSnapshot();
  });
});
