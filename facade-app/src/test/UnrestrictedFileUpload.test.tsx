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
      // @ts-ignore
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
        activeVulnerability: "UnrestrictedFileUpload",
        activeLevel: level,
      };
      const { rerender } = render(
        // @ts-ignore
        <Content globalState={testFixture} setGlobalState={mock} />
      );

      // @ts-ignore
      rerender(<Content globalState={state} setGlobalState={mock} />);

      const header = screen.getByText("Vulnerability Description");
      expect(header).toBeInTheDocument();

      await waitFor(() => {
        const description = screen.getByTestId(
          "VULNERABILITY_CONTENT_DESCRIPTION"
        );
        const link1 = screen.getByText("Owasp Wiki Link");
        const link2 = screen.getByText(
          "Ebrahim Hegazy talk on Unrestricted File Uploads"
        );
        const link3 = screen.getByText(
          "Sans rules to implement secure file uploads"
        );

        expect(description).toHaveTextContent(
          "Uploaded files represent a significant risk to applications. The first step in many attacks is to get some code to the system to be attacked. Then the attack only needs to find a way to get the code executed.The consequences of unrestricted file upload can vary, including complete system takeover, an overloaded file system or database, forwarding attacks to back-end systems, client-side attacks, or simple defacement. It depends on what the application does with the uploaded file and especially where it is stored.Important Links: Owasp Wiki Link Ebrahim Hegazy talk on Unrestricted File Uploads Sans rules to implement secure file uploads"
        );
        expect(link1).toBeInTheDocument();
        expect(link1).toHaveAttribute(
          "href",
          "https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload"
        );
        expect(link2).toBeInTheDocument();
        expect(link2).toHaveAttribute(
          "href",
          "https://www.youtube.com/watch?v=CmF9sEyKZNo"
        );
        expect(link3).toBeInTheDocument();
        expect(link3).toHaveAttribute(
          "href",
          "https://www.sans.org/blog/8-basic-rules-to-implement-secure-file-uploads/"
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
        activeVulnerability: "UnrestrictedFileUpload",
        activeLevel: level,
      };
      const { rerender } = render(
        // @ts-ignore
        <Content globalState={testFixture} setGlobalState={mock} />
      );

      // @ts-ignore
      rerender(<Content globalState={state} setGlobalState={mock} />);

      await waitFor(() => {
        const header = screen.getByText("Practice Vulnerability");
        expect(header).toBeInTheDocument();
      });
    }
  );

  const input = [
    ["LEVEL_1", "There is no validation on uploaded file's name."],
    ["LEVEL_2", "There is no validation on uploaded file's name."],
    ["LEVEL_3", "All file extensions are allowed except .html extensions."],
    [
      "LEVEL_4",
      "All file extensions are allowed except .html and .htm extensions.",
    ],
    [
      "LEVEL_5",
      "All file extensions are allowed except case insensitive .html, .htm extensions.",
    ],
    [
      "LEVEL_5",
      "All file extensions are allowed except case insensitive .html, .htm extensions.",
    ],
    [
      "LEVEL_6",
      "Only file name is allowed if it contains case insensitive .jpeg or .png.",
    ],
    [
      "LEVEL_7",
      "Only file name is allowed if it ends with case insensitive .jpeg or .png and it is considered before Null Bytes only.",
    ],
    ["LEVEL_8", "There is no validation on uploaded file's name."],
    [
      "LEVEL_9",
      "Only file name is allowed if it ends with case insensitive .jpeg or .png.",
    ],
  ];

  it.each(input)(`%s should render hints`, async (level, hint) => {
    const mock = () => jest.fn();
    const state = {
      ...testFixture,
      activeApplication: "VulnerableApp",
      activeVulnerability: "UnrestrictedFileUpload",
      activeLevel: level,
      showHints: true,
    };
    const { rerender } = render(
      // @ts-ignore
      <Content globalState={testFixture} setGlobalState={mock} />
    );

    // @ts-ignore
    rerender(<Content globalState={state} setGlobalState={mock} />);

    await waitFor(() => {
      const header = screen.getByText("Hints");
      expect(header).toBeInTheDocument();

      const hintText = screen.getByText(hint);
      expect(hintText).toBeInTheDocument();
    });
  });
});
