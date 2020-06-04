import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchProductPage from "./SearchProductPage";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchProductPage Component", () => {
  const wrapper = shallow(<SearchProductPage />);
  it("should contain parent div", () => {
    const parentDiv = wrapper.find("div");
    expect(parentDiv.length).toBe(3);
  });

  it("should have h4 ", () => {
    const h1 = wrapper.find("h4");
    expect(h1.text()).toBe("Search results");
  });
});
