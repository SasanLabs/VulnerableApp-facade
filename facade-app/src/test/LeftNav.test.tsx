import React from "react";
import { render, screen, within } from "@testing-library/react";

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

  describe("VulnerableApp nav item", () => {
    it("renders correctly", () => {
      const mock = () => jest.fn();
      render(<LeftNav globalState={testFixture} setGlobalState={mock} />);

      const item = screen.getByText("VulnerableApp");
      const serverIcon = screen.getAllByRole("img")[0];

      expect(item).toBeInTheDocument();
      expect(serverIcon).toBeInTheDocument();
    });

    const inputs = [
      ["CommandInjection"],
      ["UnrestrictedFileUpload"],
      ["JWTVulnerability"],
      ["Http3xxStatusCodeBasedInjection"],
      ["PathTraversal"],
      ["RemoteFileInclusion"],
      ["BlindSQLInjectionVulnerability"],
      ["ErrorBasedSQLInjectionVulnerability"],
      ["UnionBasedSQLInjectionVulnerability"],
      ["SSRFVulnerability"],
      ["PersistentXSSInHTMLTagVulnerability"],
      ["XSSWithHtmlTagInjection"],
      ["XSSInImgTagAttribute"],
      ["XXEVulnerability"],
    ];

    it.each(inputs)(`should have sub item %s`, (text) => {
      const mock = () => jest.fn();
      render(<LeftNav globalState={testFixture} setGlobalState={mock} />);
      const item = screen.getByText(text);

      expect(item).toBeInTheDocument();
    });
  });
});
