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
        activeApplication: undefined,
        activeVulnerability: undefined,
        activeLevel: undefined,
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
      <RSuiteContainer className="show-container VulnerableApp-Facade-AppLayout">
        <Header
          globalState={this.state}
          setGlobalState={this.setGlobalState}
        ></Header>
        <RSuiteContainer
          className="show-container VulnerableApp-Facade-MainLayout"
        >
          <RSuitesSidebar className="VulnerableApp-Facade-MasterPane">
            <div className="VulnerableApp-Facade-MasterPane-Inner">
              <LeftNav
                globalState={this.state}
                setGlobalState={this.setGlobalState}
              />
            </div>
          </RSuitesSidebar>
          <div className="VulnerableApp-Facade-DetailsPane">
            <Content
              globalState={this.state}
              setGlobalState={this.setGlobalState}
            ></Content>
          </div>
        </RSuiteContainer>
        <Footer copyRightYear={copyRightYear}>Footer</Footer>
      </RSuiteContainer>
    );
  }
}
