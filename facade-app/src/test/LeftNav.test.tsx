import React from "react";
import { render, screen } from "@testing-library/react";

import LeftNav from "../Components/LeftNav";
import { GlobalState, ResourceType } from "../interface/State";

function setUp(): GlobalState {
  const mockApplicationData = [
    {
      applicationName: "",
      vulnerabilityDefinitions: [
        {
          name: "",
          id: "",
          description: "",
          vulnerabilityTypes: [{ identifierType: "", value: "" }],
          levels: [
            {
              levelIdentifier: "",
              variant: "",
              hints: [
                {
                  vulnerabilityTypes: [
                    {
                      identifierType: "",
                      value: "",
                    },
                  ],
                  description: "",
                },
              ],
              resourceInformation: {
                htmlResource: {
                  resourceType: ResourceType.HTML,
                  isAbsolute: false,
                  uri: "",
                },
                staticResources: [
                  {
                    resourceType: ResourceType.HTML,
                    isAbsolute: false,
                    uri: "",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ];
  return {
    applicationData: mockApplicationData,
    activeApplication: "",
    activeVulnerability: "",
    activeLevel: "",
    isSuccessfullyLoaded: true,
    activateHomePage: false,
    activateAboutUsPage: false,
    showHints: true,
  };
}

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
    const state = setUp();

    render(<LeftNav globalState={state} setGlobalState={mock} />);

    const container = screen.getByTestId("LEFT_NAV_CONTAINER");

    expect(container).toBeInTheDocument();
  });
});
