import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import { Content } from "../Components/Content";
import testFixture from "./fixtures";

jest.mock("../Utilities/Utils", () => {
  const actual = jest.requireActual("../Utilities/Utils");
  return {
    ...actual,
    getResource: jest.fn(),
  };
});

describe("UnrestrictedFileUpload content", () => {
  const vulnerabilityLevels = [
    "LEVEL_1",
    "LEVEL_2",
    "LEVEL_3",
    "LEVEL_4",
    "LEVEL_5",
    "LEVEL_6",
  ];

  it("should render correctly", () => {
    const mock = () => jest.fn();
    const state = {
      ...testFixture,
      activeApplication: "VulnerableApp",
      activeVulnerability: "UnrestrictedFileUpload",
      activeLevel: "LEVEL_1",
    };
    const { container } = render(
      <Content globalState={state} setGlobalState={mock} />
    );

    expect(container).toMatchSnapshot();
  });

  it.each(vulnerabilityLevels)(
    `%s should render vulnerability description`,
    async (level) => {}
  );

  it.each(vulnerabilityLevels)(
    `%s should render practice vulnerability section`,
    async (level) => {}
  );

  const input = [
    ["LEVEL_1", '"ipaddress" query param\'s value is directly executed.'],
    [
      "LEVEL_2",
      '"ipaddress" query param\'s value is directly executed if ";", "&" or space characters are not present in it.',
    ],
    [
      "LEVEL_3",
      '"ipaddress" query param\'s value is directly executed if ";", "&", "%26", "%3B" or space characters are not present in it.',
    ],
    [
      "LEVEL_4",
      '"ipaddress" query param\'s value is directly executed if ";", "&", "%26", "%3B", "%3b" or space characters are not present in it.',
    ],
    [
      "LEVEL_5",
      '"ipaddress" query param\'s value is directly executed if ";", "&", "%26", "%3B", "%3b", "%7C", "%7c" or space characters are not present in it.',
    ],
  ];

  it.each(input)(`%s should render hints`, async (level, hint) => {});
});
