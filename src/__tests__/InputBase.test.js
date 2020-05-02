import React from "react";
import { mount } from "enzyme";

import InputBase from "../components/InputBase";

describe("<InputBase />", () => {
  it("should render an input element", () => {
    expect(mount(<InputBase />).find("input").length).toEqual(1);
  });
});
