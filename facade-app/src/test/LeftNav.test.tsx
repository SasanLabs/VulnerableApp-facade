import React from "react";
import { render, screen } from "@testing-library/react";

import LeftNav from "../Components/LeftNav";

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
});
