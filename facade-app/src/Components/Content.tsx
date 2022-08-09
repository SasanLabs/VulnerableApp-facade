import React from "react";
import { LevelInformation } from "../interface/State";
import { Panel as RSuitePanel } from "rsuite";
import {
  appendStaticResourcesToDocument,
  getResource,
  manipulateDOM,
} from "../Utilities/Utils";
import { VulnerabilityDefinitionResponse } from "../interface/GeneralContracts";
import { HomePage } from "./HomePage";
import AboutUs from "./AboutUs";
import { GlobalStateProps } from "../interface/GlobalStateProps";

export class Content extends React.Component<GlobalStateProps> {
  selectedLevel?: LevelInformation;

  componentDidUpdate(prevProps: GlobalStateProps) {
    if (
      prevProps.globalState.activeLevel !==
        this.props.globalState.activeLevel ||
      prevProps.globalState.activeVulnerability !==
        this.props.globalState.activeVulnerability ||
      prevProps.globalState.activeApplication !==
        this.props.globalState.activeApplication
    ) {
      const {
        activeApplication,
        applicationData,
        activeVulnerability,
        activeLevel,
      } = this.props.globalState;
      const selectedApplicationState = applicationData?.find(
        (applicationState) =>
          applicationState.applicationName === activeApplication
      );
      if (selectedApplicationState) {
        const selectedVulnerability =
          selectedApplicationState.vulnerabilityDefinitions.find(
            (vulnerabilityDefinition) =>
              vulnerabilityDefinition.id === activeVulnerability
          );
        this.setState({ description: selectedVulnerability?.description });
        if (selectedVulnerability) {
          manipulateDOM(
            "__vuln_description__",
            selectedVulnerability.description
          );
          const selectedLevel = selectedVulnerability.levels.find(
            (level) => level.levelIdentifier === activeLevel
          );
          if (selectedLevel) {
            this.selectedLevel = selectedLevel;
            getResource(
              selectedLevel.resourceInformation.htmlResource.uri,
              this._setLocalState.bind(this),
              false
            );
          }
        }
      }
    }
  }

  _setLocalState(
    vulnerabilityDefinitionResponse: VulnerabilityDefinitionResponse
  ) {
    if (vulnerabilityDefinitionResponse.data) {
      manipulateDOM("__content__", vulnerabilityDefinitionResponse.data);
      if (this.selectedLevel) {
        appendStaticResourcesToDocument(this.selectedLevel);
      }
    }
  }

  render() {
    const {
      activeVulnerability,
      activeApplication,
      activeLevel,
      activateHomePage,
      activateAboutUsPage,
      showHints,
    } = this.props.globalState;
    const { setGlobalState } = this.props;
    return (
      <div className="VulnerableApp-Facade-Info">
        {activateHomePage ? (
          <HomePage></HomePage>
        ) : activateAboutUsPage ? (
          <AboutUs></AboutUs>
        ) : (
          <div className="VulnerableApp-Facade-Content-Container">
            {activeVulnerability ? (
              <div>
                <RSuitePanel
                  header="Vulnerability Description"
                  className="VulnerableApp-Facade-Content-Vulnerability-Description-Header"
                  collapsible={true}
                  defaultExpanded={true}
                >
                  <div className="VulnerableApp-Facade-Content">
                    <div
                      id="__vuln_description__"
                      data-testid={"VULNERABILITY_CONTENT_DESCRIPTION"}
                    />
                  </div>
                </RSuitePanel>
              </div>
            ) : (
              <div />
            )}
            {activeVulnerability ? (
              <div>
                <RSuitePanel
                  header="Practice Vulnerability"
                  className="VulnerableApp-Facade-Content-Practice-Vulnerability-Header"
                >
                  <div className="VulnerableApp-Facade-Content">
                    <div
                      id="__content__"
                      data-testid={"VULNERABILITY_MAIN_CONTENT"}
                    />
                  </div>
                </RSuitePanel>
                {this.selectedLevel &&
                this.selectedLevel.hints &&
                this.selectedLevel.hints.length > 0 ? (
                  <RSuitePanel
                    header="Hints"
                    className="VulnerableApp-Facade-Content-Hint-Content"
                    collapsible={true}
                    defaultExpanded={false}
                    expanded={showHints}
                    onSelect={() =>
                      setGlobalState({
                        activeApplication: activeApplication,
                        activeVulnerability: activeVulnerability,
                        activeLevel: activeLevel,
                        activateHomePage: false,
                        activateAboutUsPage: false,
                        showHints: !showHints,
                      })
                    }
                  >
                    <ol data-testid={"VULNERABILITY_HINTS"}>
                      {this.selectedLevel.hints.map((hint) => {
                        // TODO: add key prop
                        return <li>{hint.description}</li>;
                      })}
                    </ol>
                  </RSuitePanel>
                ) : (
                  <div />
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    );
  }
}
