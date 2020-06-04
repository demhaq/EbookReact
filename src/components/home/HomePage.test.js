import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "./HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("Home Component", () => {
  const wrapper = shallow(<HomePage />);
  it("should contain parent div", () => {
    const parentDiv = wrapper.find("div");
    expect(parentDiv.length).toBe(1);
  });

  it("should have h1 with the Ebook", () => {
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Ebook");
  });
});
