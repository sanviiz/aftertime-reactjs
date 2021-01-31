import React from "react";
import { shallow } from "enzyme";
import Send from "./Send";

describe("Send", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Send />);
    expect(wrapper).toMatchSnapshot();
  });
});
