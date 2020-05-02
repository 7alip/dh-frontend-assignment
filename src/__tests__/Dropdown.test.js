import React from "react";
import { mount, shallow } from "enzyme";
import "jest-styled-components";

import Dropdown from "../components/Dropdown";

describe("<Dropdown />", () => {
  it("should render down", () => {
    expect(mount(<Dropdown list={[]} dir="down" />).props().dir).toEqual(
      "down"
    );
  });

  it("shoul be at top of the input", () => {
    expect(mount(<Dropdown list={[]} dir="up" />)).toHaveStyleRule(
      "bottom",
      "75px"
    );
  });

  it("should fill input field after item is clicked", () => {
    const component = shallow(
      <Dropdown
        list={[{ name: "Talip" }]}
        setInput={(name) => console.log(name)}
      />
    );
    component
      .find(".item")
      .filterWhere((n) => n.contains("Talip"))
      .simulate("click");
    const input = component.find("input").text;
    expect(input === "Talip");
  });
});
