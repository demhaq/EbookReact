import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DeleteProductPage from "./DeleteProductPage";

Enzyme.configure({ adapter: new Adapter() });

describe("DeleteProductPage Component", () => {
  const wrapper = shallow(<DeleteProductPage />);
  it("should contain parent div", () => {
    const parentDiv = wrapper.find("div");
    expect(parentDiv.length).toBe(1);
  });

  it("should have h4 ", () => {
    const h4 = wrapper.find("h4");
    expect(h4.length).toBe(1);
  });
  it("should have link ", () => {
    const link = wrapper.find("Link");
    expect(link.length).toBe(1);
  });
});
