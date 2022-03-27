import React from "react";
import { render, screen } from "@testing-library/react";

import LeftNav from "../Components/LeftNav";
import testFixture from "./fixtures";

describe("LeftNav", () => {
  it("renders correctly", () => {
    const mock = () => jest.fn();
    const state = {
      isSuccessfullyLoaded: false,
      activateAboutUsPage: false,
      activateHomePage: true,
      showHints: false,
    };
    const { container } = render(
      <LeftNav globalState={state} setGlobalState={mock} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders left nav container", () => {
    const mock = () => jest.fn();
    render(<LeftNav globalState={testFixture} setGlobalState={mock} />);

    const container = screen.getByTestId("LEFT_NAV_CONTAINER");

    expect(container).toBeInTheDocument();
  });
});
