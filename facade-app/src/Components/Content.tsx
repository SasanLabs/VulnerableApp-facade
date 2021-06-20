import React from "react";
import { GlobalState, LevelInformation } from "../interface/State";
import { Panel as RSuitePanel } from "rsuite";
import {
  appendStaticResourcesToDocument,
  getResource,
  manipulateDOM,
} from "../Utilities/Utils";
import { VulnerabilityDefinitionResponse } from "../interface/GeneralContracts";

export class Content extends React.Component<GlobalState> {
  selectedLevel?: LevelInformation;
  constructor(props: GlobalState) {
    super(props);
  }

  componentDidUpdate(prevProps: GlobalState) {
    if (
      prevProps.activeLevel != this.props.activeLevel ||
      prevProps.activeVulnerability != this.props.activeVulnerability ||
      prevProps.activeApplication != this.props.activeApplication
    ) {
      const {
        activeApplication,
        applicationData,
        activeVulnerability,
        activeLevel,
      } = this.props;
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
    const { activeVulnerability, activeLevel } = this.props;
    return (
      <div>
        {activeVulnerability ? (
          <div>
            <RSuitePanel header="Vulnerability Description" bodyFill>
              <div id="__vuln_description__" />
            </RSuitePanel>
          </div>
        ) : (
          <div />
        )}
        {activeVulnerability ? (
          <div>
            <RSuitePanel
              header="Practice Vulnerability"
              bodyFill
              style={{ alignContent: "center" }}
            >
              <div id="__content__" />
            </RSuitePanel>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
