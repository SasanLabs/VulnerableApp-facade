import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "../Components/HomePage";

describe("Home Page", () => {
  it("renders correctly", () => {
    const { container } = render(<HomePage />);

    expect(container).toMatchSnapshot();
  });

  it("renders main container", () => {
    render(<HomePage />);

    const mainContainer = screen.getByTestId("HOME_PAGE_MAIN_CONTAINER");
    expect(mainContainer).toBeInTheDocument();
  });

  it("renders main header", () => {
    render(<HomePage />);

    const header = screen.getByText("Welcome to Owasp VulnerableApp-Facade");
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute("role", "rowheader");
  });

  it("renders main description", () => {
    render(<HomePage />);

    const description =
      "As we are seeing a lot of technological enhancements in the industry" +
      " from past few years, these technical enhancements are solving one or" +
      " the other problem however, with that they also bring few different" +
      " vulnerabilities. Vulnerable Applications are generally written in one" +
      " of the techstacks like either Node.js or Java with a SQL or NoSQL" +
      " database etc and hence they are not able to expand to a whole new set" +
      " of vulnerabilities which are present in other technologies. Also" +
      " adding more vulnerabilities in a single vulnerable application makes" +
      " it heavier and complex which finally makes it unmaintainable. So" +
      " VulnerableApp-facade is built to solve this problem by building a" +
      " distributed farm of Vulnerable Applications such that they can be" +
      " built agnostic to tech stacks.";

    const container = screen.getByTestId("HOME_PAGE_CONTENT_CONTAINER");
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent(description);
  });

  it("renders hero image", () => {
    render(<HomePage />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Unable to lead the design diagram");
  });

  it("renders warning header", () => {
    render(<HomePage />);

    const header = screen.getByTestId("HOME_PAGE_WARNING_CONTAINER");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Warning");
  });

  it("renders warning text", () => {
    render(<HomePage />);

    const text =
      "As VulnerableApp-Facade is a proxy wrapper over the actual Vulnerable" +
      " Applications which can be very dangerous if exposed over the public" +
      " internet. So we suggest you to please run it in local dev environments" +
      " or environments without any public internet access.";
    const container = screen.getByTestId("HOME_PAGE_WARNING_CONTAINER");
    expect(container).toHaveTextContent(text);
  });
});
