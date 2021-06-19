import React from "react";
import { GlobalState } from "../interface/State";
import { Panel as RPanel } from "rsuite";
import {
  appendStaticResourcesToDocument,
  getResource,
} from "../Utilities/Utils";
import { VulnerabilityDefinitionResponse } from "../interface/GeneralContracts";

interface State {
  htmlResource?: string;
  description?: string;
}

export class Content extends React.Component<GlobalState, State> {
  constructor(props: GlobalState) {
    super(props);
    this.state = {};
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
          const selectedLevel = selectedVulnerability.levels.find(
            (level) => level.levelIdentifier === activeLevel
          );
          if (selectedLevel) {
            // Fetch this resource selectedLevel.resourceInformation.htmlResource
            this._fetchResource(
              selectedLevel.resourceInformation.htmlResource.uri
            );
            appendStaticResourcesToDocument(selectedLevel);
          }
        }
      }
    }
  }

  _setLocalState(
    vulnerabilityDefinitionResponse: VulnerabilityDefinitionResponse
  ) {
    if (vulnerabilityDefinitionResponse.isSuccessful) {
      this.setState({
        htmlResource: vulnerabilityDefinitionResponse.data,
      });
    } else {
      this.setState({
        htmlResource:
          "<div>Error" + vulnerabilityDefinitionResponse.error + "</div>",
      });
    }
  }

  _fetchResource(uri: string) {
    getResource(uri, this._setLocalState.bind(this), false);
  }

  render() {
    const { htmlResource, description } = this.state;
    if (!description && !htmlResource) {
      return <div />;
    }

    if (description && !htmlResource) {
      return <div dangerouslySetInnerHTML={{ __html: description }} />;
    }

    if (description && htmlResource) {
      return (
        <div>
          <div>
            <RPanel
              header="Vulnerability Description"
              bodyFill /*style={{fontSize: "20px"}}*/
            >
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </RPanel>
          </div>
          <div>
            <RPanel
              header="Practise Vulnerability"
              bodyFill
              style={{ alignContent: "center" }}
            >
              <div dangerouslySetInnerHTML={{ __html: htmlResource }} />
            </RPanel>
          </div>
        </div>
      );
    }
    return <div />;
  }
}
