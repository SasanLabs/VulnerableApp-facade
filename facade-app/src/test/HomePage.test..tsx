import React from "react";
import { render, screen } from "@testing-library/react";
import {HomePage} from "../Components/HomePage";

describe("Home Page", () => {
  it("renders correctly", () => {
    const { container } = render(<HomePage/>);

    expect(container).toMatchSnapshot();
  });

  it("renders main container", () => {

  });

  it("renders main description", () => {

  });

  it("renders hero image", () => {

  });

  it("renders warning text", () => {

  })
})
