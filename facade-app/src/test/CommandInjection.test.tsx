import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Content } from "../Components/Content";
import testFixture from "./fixtures";

describe("CommandInjection content", () => {
  it("renders correctly", () => {
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

  it("renders vulnerability description section", async () => {
    const mock = () => jest.fn();
    const state = {
      ...testFixture,
      activeApplication: "VulnerableApp",
      activeVulnerability: "CommandInjection",
      activeLevel: "LEVEL_1",
    };
    const { rerender } = render(
      <Content globalState={testFixture} setGlobalState={mock} />
    );

    rerender(<Content globalState={state} setGlobalState={mock} />);

    const header = screen.getByText("Vulnerability Description");
    expect(header).toBeInTheDocument();

    await waitFor(() => {
      const description = screen.getByTestId(
        "CONTENT_VULNERABILITY_DESCRIPTION"
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
  });

  it("renders vulnerability practice section", async () => {});
});
