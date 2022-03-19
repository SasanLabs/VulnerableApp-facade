import React from "react";
import "./App.css";
import {
  Container as RSuiteContainer,
  Sidebar as RSuitesSidebar,
} from "rsuite";
import "rsuite/dist/styles/rsuite-default.min.css";
import { Header } from "./Components/Header";
import { LeftNav } from "./Components/LeftNav";
import { GlobalState } from "./interface/State";
import Footer  from "./Components/Footer";
import { Content } from "./Components/Content";
import { getResource } from "./Utilities/Utils";
import { VulnerabilityDefinitionResponse } from "./interface/GeneralContracts";

export default class App extends React.Component {
  state: GlobalState = {
    isSuccessfullyLoaded: false,
    activateAboutUsPage: false,
    activateHomePage: true,
    showHints: false,
  };

  _getResourcesInformationsForLevel(levelInformationRes: any) {
    let resourceInformationHtml = {
      isAbsolute:
        levelInformationRes["resourceInformation"]["htmlResource"][
          "isAbsolute"
        ],
      uri: levelInformationRes["resourceInformation"]["htmlResource"]["uri"],
    };

    let staticResourceInformation = [];
    for (let staticResourceInformationIndexRes in levelInformationRes[
      "levels"
    ]) {
      let staticResourceInformationRes =
        levelInformationRes["levels"][staticResourceInformationIndexRes];
      staticResourceInformation.push({
        isAbsolute: staticResourceInformationRes["isAbsolute"],
        uri: staticResourceInformationRes["uri"],
        resourceType: staticResourceInformationRes["resourceType"],
      });
    }
    return {
      resourceInformationHtml: resourceInformationHtml,
      staticResourceInformation: staticResourceInformation,
    };
  }

  _getHintsForLevel(levelInformationRes: any) {
    let hints = [];
    for (let hintIndexRes in levelInformationRes["hints"]) {
      let hintRes = levelInformationRes["hints"][hintIndexRes];
      let vulnerabilityTypes = [];
      for (let vulnerabilityTypeIndexRes in hintRes["vulnerabilityTypes"]) {
        vulnerabilityTypes.push({
          identifierType:
            hintRes["vulnerabilityTypes"][vulnerabilityTypeIndexRes][
              "identifierType"
            ],
          value:
            hintRes["vulnerabilityTypes"][vulnerabilityTypeIndexRes]["value"],
        });
      }
      let hint = {
        description: hintRes[hintIndexRes],
        vulnerabilityTypes: vulnerabilityTypes,
      };
      hints.push(hint);
    }
    return hints;
  }

  _getVulnerabilityTypesForLevel(vulnerabilityDefinitionsRes: any) {
    let vulnerabilityTypes = [];
    for (let vulnerabilityTypeIndexRes in vulnerabilityDefinitionsRes[
      "vulnerabilityTypes"
    ]) {
      vulnerabilityTypes.push({
        identifierType:
          vulnerabilityDefinitionsRes["vulnerabilityTypes"][
            vulnerabilityTypeIndexRes
          ]["identifierType"],
        value:
          vulnerabilityDefinitionsRes["vulnerabilityTypes"][
            vulnerabilityTypeIndexRes
          ]["value"],
      });
    }
    return vulnerabilityTypes;
  }

  _populateLevelsForVulnerability(
    vulnerabilityDefinitionsRes: any,
    vulnerabilityDefinitionIndexRes: string
  ) {
    let levels = [];
    for (let vulnerabilityLevelIndexRes in vulnerabilityDefinitionsRes[
      vulnerabilityDefinitionIndexRes
    ]["levels"]) {
      let levelInformationRes =
        vulnerabilityDefinitionsRes[vulnerabilityDefinitionIndexRes]["levels"][
          vulnerabilityLevelIndexRes
        ];
      //Hint population
      let hints = this._getHintsForLevel(levelInformationRes);
      // Resource population
      let resourceInformations =
        this._getResourcesInformationsForLevel(levelInformationRes);

      let levelInformation = {
        levelIdentifier: levelInformationRes["levelIdentifier"],
        variant: levelInformationRes["variant"],
        hints: hints,
        resourceInformation: {
          htmlResource: resourceInformations.resourceInformationHtml,
          staticResources: resourceInformations.staticResourceInformation,
        },
      };
      levels.push(levelInformation);
      return levels;
    }
  }

  _populateGlobalState(
    vulnerabilityDefinitionResponse: VulnerabilityDefinitionResponse
  ) {
    if (vulnerabilityDefinitionResponse.isSuccessful) {
      if (!vulnerabilityDefinitionResponse.data) {
        return;
      }
      let applicationsDataRes = vulnerabilityDefinitionResponse.data;
      let applicationDataArray = [];
      for (let vulnerableAppRes in applicationsDataRes) {
        let vulnerabilityDefinitionsRes = applicationsDataRes[vulnerableAppRes];
        let vulnerabilityDefinitions = [];
        for (let vulnerabilityDefinitionIndexRes in vulnerabilityDefinitionsRes) {
          let levels = this._populateLevelsForVulnerability(
            vulnerabilityDefinitionsRes,
            vulnerabilityDefinitionIndexRes
          );
          let vulnerabilityTypes = this._getVulnerabilityTypesForLevel(
            vulnerabilityDefinitionIndexRes
          );
          let vulnerabilityDefinition = {
            name: vulnerabilityDefinitionsRes["name"],
            id: vulnerabilityDefinitionsRes["id"],
            description: vulnerabilityDefinitionsRes["description"],
            vulnerabilityTypes: vulnerabilityTypes,
            levels: levels,
          };
          vulnerabilityDefinitions.push(vulnerabilityDefinition);
        }
        applicationDataArray.push({
          applicationName: vulnerableAppRes,
          vulnerabilityDefinitions: vulnerabilityDefinitionsRes,
        });
      }
      this.setState({
        applicationData: applicationDataArray,
        activeApplication:
          applicationDataArray.length >= 1
            ? applicationDataArray[0].applicationName
            : null,
        isSuccessfullyLoaded: true,
      });
    } else {
      console.log(vulnerabilityDefinitionResponse.error);
    }
  }

  componentDidMount() {
    getResource(
      "/VulnerabilityDefinitions",
      this._populateGlobalState.bind(this),
      true
    );
  }

  setGlobalState = (globalState: GlobalState) => {
    this.setState(globalState);
    //Sets the global state such that the vulnerable applications
    //knows the execution context details which can help them write the
    //templates.
    (window as any).globalUtilityState = {
      activeVulnerabilityIdentifier: globalState.activeVulnerability,
      activeVulnerabilityLevelIdentifier: globalState.activeLevel,
      baseURI: window.location.toString(),
    };
  };

  render() {
    return (
      <RSuiteContainer className="show-container">
        <Header
          globalState={this.state}
          setGlobalState={this.setGlobalState}
        ></Header>
        <RSuiteContainer className="show-container" style={{display:"flex", width:"100vw"}}>
          <RSuitesSidebar>
            <LeftNav
              globalState={this.state}
              setGlobalState={this.setGlobalState}
            />
          </RSuitesSidebar>
          <Content 
            globalState={this.state}
            setGlobalState={this.setGlobalState}
          ></Content>
        </RSuiteContainer>
        <Footer globalState={this.state} setGlobalState={this.setGlobalState}>
          Footer
        </Footer>
      </RSuiteContainer>
    );
  }
}
