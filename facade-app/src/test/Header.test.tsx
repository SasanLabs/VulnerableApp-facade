import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../Components/Header";

describe("Header", () => {
  it("renders correctly", () => {
    const mock = () => jest.fn();
    const state = {
      isSuccessfullyLoaded: false,
      activateAboutUsPage: false,
      activateHomePage: true,
      showHints: false,
    };
    const { container } = render(
      <Header setGlobalState={mock} globalState={state} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders header image", () => {
    const mock = () => jest.fn();
    const state = {
      isSuccessfullyLoaded: false,
      activateAboutUsPage: false,
      activateHomePage: true,
      showHints: false,
    };
    const { container } = render(
      <Header setGlobalState={mock} globalState={state} />
    );

    const image = screen.getAllByRole("img")[0];

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "vulnerable app logo");
  });

  it("renders first nav item", () => {
    const mock = () => jest.fn();
    const state = {
      isSuccessfullyLoaded: false,
      activateAboutUsPage: false,
      activateHomePage: true,
      showHints: false,
    };
    const { container } = render(
      <Header setGlobalState={mock} globalState={state} />
    );

    const item = screen.getByText("Owasp VulnerableApp-Facade");

    expect(item).toBeInTheDocument();
  });

  it("renders second nav item", () => {
    const mock = () => jest.fn();
    const state = {
      isSuccessfullyLoaded: false,
      activateAboutUsPage: false,
      activateHomePage: true,
      showHints: false,
    };
    const { container } = render(
      <Header setGlobalState={mock} globalState={state} />
    );

    const item = screen.getByText("Home");
    const homeIcon = screen.getAllByRole("img")[1];
    const text = screen.getByText("Home");

    expect(item).toBeInTheDocument();
    expect(homeIcon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("renders third nav item", () => {
    const mock = () => jest.fn();
    const state = {
      isSuccessfullyLoaded: false,
      activateAboutUsPage: false,
      activateHomePage: true,
      showHints: false,
    };
    const { container } = render(
      <Header setGlobalState={mock} globalState={state} />
    );

    const text = screen.getByText("About Us");

    expect(text).toBeInTheDocument();
  });

  it("renders Github link", () => {
    const mock = () => jest.fn();
    const state = {
      isSuccessfullyLoaded: false,
      activateAboutUsPage: false,
      activateHomePage: true,
      showHints: false,
    };
    const { container } = render(
      <Header setGlobalState={mock} globalState={state} />
    );

    const link = screen.getAllByRole("link")[0];
    const githubIcon = screen.getAllByRole("img")[2];
    const text = screen.getByText("Github");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/SasanLabs/VulnerableApp-facade"
    );
    expect(githubIcon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  describe("dropdown", () => {
    it("renders dropdown", () => {
      const mock = () => jest.fn();
      const state = {
        isSuccessfullyLoaded: false,
        activateAboutUsPage: false,
        activateHomePage: true,
        showHints: false,
      };
      const { container } = render(
        <Header setGlobalState={mock} globalState={state} />
      );

      const dropDownTitle = screen.getByText("Projects by SasanLabs");

      expect(dropDownTitle).toBeInTheDocument();
    });

    it("renders first item", () => {
      const mock = () => jest.fn();
      const state = {
        isSuccessfullyLoaded: false,
        activateAboutUsPage: false,
        activateHomePage: true,
        showHints: false,
      };
      const { container } = render(
        <Header setGlobalState={mock} globalState={state} />
      );

      const owaspLink = screen.getAllByRole("link")[1];
      const owaspIcon = screen.getAllByRole("img")[3];
      const text = screen.getByText("Owasp VulnerableApp");

      expect(owaspLink).toBeInTheDocument();
      expect(owaspLink).toHaveAttribute(
        "href",
        "https://github.com/SasanLabs/VulnerableApp"
      );
      expect(owaspIcon).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });

    it("renders second item", () => {
      const mock = () => jest.fn();
      const state = {
        isSuccessfullyLoaded: false,
        activateAboutUsPage: false,
        activateHomePage: true,
        showHints: false,
      };
      const { container } = render(
        <Header setGlobalState={mock} globalState={state} />
      );

      const zapLink = screen.getAllByRole("link")[2];
      const zapIcon = screen.getAllByRole("img")[4];
      const text = screen.getByText("ZAP JWT Addon");

      expect(zapLink).toBeInTheDocument();
      expect(zapLink).toHaveAttribute(
        "href",
        "https://github.com/SasanLabs/owasp-zap-jwt-addon"
      );
      expect(zapIcon).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });

    it("renders third item", () => {
      const mock = () => jest.fn();
      const state = {
        isSuccessfullyLoaded: false,
        activateAboutUsPage: false,
        activateHomePage: true,
        showHints: false,
      };
      const { container } = render(
        <Header setGlobalState={mock} globalState={state} />
      );

      const zapLink = screen.getAllByRole("link")[3];
      const zapIcon = screen.getAllByRole("img")[5];
      const text = screen.getByText("ZAP FileUpload Addon");

      expect(zapLink).toBeInTheDocument();
      expect(zapLink).toHaveAttribute(
        "href",
        "https://github.com/SasanLabs/owasp-zap-fileupload-addon"
      );
      expect(zapIcon).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });
});
