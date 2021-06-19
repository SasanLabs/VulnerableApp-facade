import React from "react";
import { GlobalState, ResourceType } from "../interface/State";

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
            selectedLevel.resourceInformation.staticResources.forEach(
              (resourceURI) => {
                if (resourceURI.resourceType === ResourceType.JAVASCRIPT) {
                  const script = document.createElement("script");
                  script.src = resourceURI.uri;
                  script.async = true;
                  document.getElementById("scripts")?.appendChild(script);
                } else if (resourceURI.resourceType === ResourceType.CSS) {
                  let cssElement = document.createElement("link");
                  cssElement.href = resourceURI.uri;
                  cssElement.type = "text/css";
                  cssElement.rel = "stylesheet";
                  document.getElementById("styles")?.appendChild(cssElement);
                }
              }
            );
          }
        }
      }
    }
  }

  _fetchResource(uri: string) {
    console.log(uri);
    return fetch(uri)
      .then((res) => res.text())
      .then(
        (result) => {
          this.setState({
            htmlResource: result,
          });
        },
        (error) => {
          this.setState({ htmlResource: "<div>Error</div>" });
        }
      );
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
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div dangerouslySetInnerHTML={{ __html: htmlResource }} />
        </div>
      );
    }
    return <div />;
  }
}
