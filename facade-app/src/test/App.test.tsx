import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { getResource } from "../Utilities/Utils";
import testFixture from "./fixtures";

import App from "../App";

jest.mock("../Utilities/Utils");

describe("App", () => {
  const _renderAppFully = () => {
    //mock getResource since it will not work during testing
    (getResource as jest.Mock).mockImplementation(
      (uri: string, callback: Function, isJson: boolean) => {
        //testFixture structure does not match the web response.
        //so, we restructure it
        const response = {
          VulnerableApp:
            testFixture.applicationData[0].vulnerabilityDefinitions,
          "VulnerableApp-jsp":
            testFixture.applicationData[1].vulnerabilityDefinitions,
          "VulnerableApp-php":
            testFixture.applicationData[2].vulnerabilityDefinitions,
        };

        callback({ isSuccessful: true, data: response });
      }
    );

    return render(<App />);
  };

  const _renderAppFail = () => {
    (getResource as jest.Mock).mockImplementation(
      (uri: string, callback: Function, isJson: boolean) => {
        callback({ isSuccessful: false, error: "error" });
      }
    );

    return render(<App />);
  };

  const _renderAppNull = () => {
    (getResource as jest.Mock).mockImplementation(
      (uri: string, callback: Function, isJson: boolean) => {
        callback({ isSuccessful: true, data: null });
      }
    );

    return render(<App />);
  };

  const _renderAppEmpty = () => {
    (getResource as jest.Mock).mockImplementation(
      (uri: string, callback: Function, isJson: boolean) => {
        callback({ isSuccessful: true, data: {} });
      }
    );

    return render(<App />);
  };

  it("renders correctly", async () => {
    expect(_renderAppFully().container).toMatchSnapshot();
  });

  it("renders content on nav item click", () => {
    _renderAppFully();

    fireEvent(
      screen.getByTestId("VulnerableApp.CommandInjection.LEVEL_1"),
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    const content = screen.getByTestId("VULNERABILITY_CONTENT_DESCRIPTION");
    expect(content).toBeInTheDocument();
  });

  it("does not render nav when data is null", async () => {
    _renderAppNull();
    expect(screen.queryByTestId(/LEFT_NAV_CONTAINER/i)).toBeNull();
  });

  it("does not render nav when getResource failed", async () => {
    _renderAppFail();
    expect(screen.queryByTestId(/LEFT_NAV_CONTAINER/i)).toBeNull();
  });

  it("does not render nav items when empty", async () => {
    _renderAppEmpty();
    expect(screen.queryByTestId(/VulnerableApp.CommandInjection/i)).toBeNull();
  });
});
