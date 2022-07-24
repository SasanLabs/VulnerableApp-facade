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

describe("CommandInjection content", () => {
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
      activeVulnerability: "CommandInjection",
      activeLevel: "LEVEL_1",
    };
    const { container } = render(
      <Content globalState={state} setGlobalState={mock} />
    );

    expect(container).toMatchSnapshot();
  });

  it.each(vulnerabilityLevels)(
    `%s should render vulnerability description`,
    async (level) => {
      const mock = () => jest.fn();
      const state = {
        ...testFixture,
        activeApplication: "VulnerableApp",
        activeVulnerability: "CommandInjection",
        activeLevel: level,
      };
      const { rerender } = render(
        <Content globalState={testFixture} setGlobalState={mock} />
      );

      rerender(<Content globalState={state} setGlobalState={mock} />);

      const header = screen.getByText("Vulnerability Description");
      expect(header).toBeInTheDocument();

      await waitFor(() => {
        const description = screen.getByTestId(
          "VULNERABILITY_CONTENT_DESCRIPTION"
        );
        const link1 = screen.getByText("CWE-77");
        const link2 = screen.getByText("Owasp Wiki Link");

        expect(description).toHaveTextContent(
          "Command injection is an attack in which the goal is execution of arbitrary commands on the host operating system via a vulnerable application. Command injection attacks are possible when an application passes unsafe user supplied data (forms, cookies, HTTP headers etc.) to a system shell. In this attack, the attacker-supplied operating system commands are usually executed with the privileges of the vulnerable application. Command injection attacks are possible largely due to insufficient input validation."
        );
        expect(description).toHaveTextContent(
          "Important Links on Command Injection Vulnerability :"
        );
        expect(link1).toBeInTheDocument();
        expect(link1).toHaveAttribute(
          "href",
          "https://cwe.mitre.org/data/definitions/77.html"
        );
        expect(link2).toBeInTheDocument();
        expect(link2).toHaveAttribute(
          "href",
          "https://owasp.org/www-community/attacks/Command_Injection"
        );
      });
    }
  );

  it.each(vulnerabilityLevels)(
    `%s should render practice vulnerability section`,
    async (level) => {
      const mock = () => jest.fn();
      const state = {
        ...testFixture,
        activeApplication: "VulnerableApp",
        activeVulnerability: "CommandInjection",
        activeLevel: level,
      };
      const { rerender } = render(
        <Content globalState={testFixture} setGlobalState={mock} />
      );

      rerender(<Content globalState={state} setGlobalState={mock} />);

      await waitFor(() => {
        const header = screen.getByText("Practice Vulnerability");
        expect(header).toBeInTheDocument();
      });
    }
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

  it.each(input)(`%s should render hints`, async (level, hint) => {
    const mock = () => jest.fn();
    const state = {
      ...testFixture,
      activeApplication: "VulnerableApp",
      activeVulnerability: "CommandInjection",
      activeLevel: level,
      showHints: true,
    };
    const { rerender } = render(
      <Content globalState={testFixture} setGlobalState={mock} />
    );

    rerender(<Content globalState={state} setGlobalState={mock} />);

    await waitFor(() => {
      const header = screen.getByTestId("VULNERABILITY_HINTS");

      expect(header).toBeInTheDocument();
      expect(header).toHaveTextContent(hint);
    });
  });

  it("should not show hints for level 6", () => {
    const mock = () => jest.fn();
    const state = {
      ...testFixture,
      activeApplication: "VulnerableApp",
      activeVulnerability: "CommandInjection",
      activeLevel: "LEVEL_6",
    };
    render(<Content globalState={state} setGlobalState={mock} />);

    const header = screen.queryByText("Hints");

    expect(header).not.toBeInTheDocument();
  });
});
