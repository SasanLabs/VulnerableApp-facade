import React from "react";
import "./App.css";
import {
  Container as RSuiteContainer,
  Sidebar as RSuitesSidebar,
} from "rsuite";
import "rsuite/dist/styles/rsuite-default.min.css";
import Header from "./Components/Header";
import LeftNav from "./Components/LeftNav";
import { GlobalState } from "./interface/State";
import Footer from "./Components/Footer";
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
    const copyRightYear = new Date().getFullYear();

    return (
      <RSuiteContainer className="show-container">
        <Header
          globalState={this.state}
          setGlobalState={this.setGlobalState}
        ></Header>
        <RSuiteContainer
          className="show-container"
          style={{ display: "flex", width: "100vw" }}
        >
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
        <Footer copyRightYear={copyRightYear}>Footer</Footer>
      </RSuiteContainer>
    );
  }
}
