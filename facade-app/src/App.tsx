import React from "react";
import "./App.css";
import { Container as RContainer, Sidebar as RSidebar } from "rsuite";
import "rsuite/dist/styles/rsuite-default.min.css";
import { Header } from "./Components/Header";
import { LeftNav } from "./Components/LeftNav";
import { GlobalState } from "./interface/State";
import { Footer } from "./Components/Footer";
import { Content } from "./Components/Content";

interface VulnerabilityDefinitionResponse {
  successful: boolean;
  error?: string;
  data?: any;
}

export default class App extends React.Component {
  state: GlobalState = {
    isSuccessfullyLoaded: false,
  };

  _populateGlobalState(
    vulnerabilityDefinitionResponse: VulnerabilityDefinitionResponse
  ) {
    if (vulnerabilityDefinitionResponse.successful) {
      if (!vulnerabilityDefinitionResponse.data) {
        return;
      }
      let applicationsDataRes = vulnerabilityDefinitionResponse.data;
      let applicationDataArray = [];
      for (let vulnerableAppRes in applicationsDataRes) {
        let vulnerabilityDefinitionsRes = applicationsDataRes[vulnerableAppRes];
        let vulnerabilityDefinitions = [];
        for (let vulnerabilityDefinitionIndexRes in vulnerabilityDefinitionsRes) {
          let levels = [];
          for (let vulnerabilityLevelIndexRes in vulnerabilityDefinitionsRes[
            vulnerabilityDefinitionIndexRes
          ]["levels"]) {
            let levelInformationRes =
              vulnerabilityDefinitionsRes[vulnerabilityDefinitionIndexRes][
                "levels"
              ][vulnerabilityLevelIndexRes];
            //Hint population
            let hints = [];
            for (let hintIndexRes in levelInformationRes["hints"]) {
              let hintRes = levelInformationRes["hints"][hintIndexRes];
              let vulnerabilityTypes = [];
              for (let vulnerabilityTypeIndexRes in hintRes[
                "vulnerabilityTypes"
              ]) {
                vulnerabilityTypes.push({
                  identifierType:
                    hintRes["vulnerabilityTypes"][vulnerabilityTypeIndexRes][
                      "identifierType"
                    ],
                  value:
                    hintRes["vulnerabilityTypes"][vulnerabilityTypeIndexRes][
                      "value"
                    ],
                });
              }
              let hint = {
                description: hintRes[hintIndexRes],
                vulnerabilityTypes: vulnerabilityTypes,
              };
              hints.push(hint);
            }
            // Resource population
            let resourceInformationHtml = {
              isAbsolute:
                levelInformationRes["resourceInformation"]["htmlResource"][
                  "isAbsolute"
                ],
              uri: levelInformationRes["resourceInformation"]["htmlResource"][
                "uri"
              ],
            };

            let staticResourceInformation = [];
            for (let staticResourceInformationIndexRes in levelInformationRes[
              "levels"
            ]) {
              let staticResourceInformationRes =
                levelInformationRes["levels"][
                  staticResourceInformationIndexRes
                ];
              staticResourceInformation.push({
                isAbsolute: staticResourceInformationRes["isAbsolute"],
                uri: staticResourceInformationRes["uri"],
              });
            }

            let levelInformation = {
              levelIdentifier: levelInformationRes["levelIdentifier"],
              variant: levelInformationRes["variant"],
              hints: hints,
              resourceInformation: {
                htmlResource: resourceInformationHtml,
                staticResources: staticResourceInformation,
              },
            };
            levels.push(levelInformation);
          }

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
        activeVulnerability:
          applicationDataArray.length >= 1 &&
          applicationDataArray[0].vulnerabilityDefinitions.length >= 1
            ? applicationDataArray[0].vulnerabilityDefinitions[0].id
            : null,
        activeLevel:
          applicationDataArray.length >= 1 &&
          applicationDataArray[0].vulnerabilityDefinitions.length >= 1 &&
          applicationDataArray[0].vulnerabilityDefinitions[0].levels.length >= 1
            ? applicationDataArray[0].vulnerabilityDefinitions[0].levels[0]
                .levelIdentifier
            : null,
        isSuccessfullyLoaded: true,
      });
    } else {
      console.log(vulnerabilityDefinitionResponse.error);
    }
  }

  componentDidMount() {
    fetch("http://localhost:9090/VulnerableApp/VulnerabilityDefinitions")
      .then((res) => res.json())
      .then(
        (result) => {
          //As currently we don't have facade backend ready with new schema.
          this._populateGlobalState({
            successful: true,
            data: { VulnerableApp: result },
          });
        },
        (error) => {
          this._populateGlobalState({
            successful: false,
            error,
          });
        }
      );
  }

  setGlobalState = (globalState: GlobalState) => {
    this.setState(globalState);
  };

  render() {
    return (
      <RContainer className="show-container">
        <Header></Header>
        <RContainer className="show-container">
          <RSidebar>
            <LeftNav
              globalState={this.state}
              setGlobalState={this.setGlobalState}
            />
          </RSidebar>
          <Content {...this.state}></Content>
        </RContainer>
        <Footer globalState={this.state} setGlobalState={this.setGlobalState}>
          Footer
        </Footer>
      </RContainer>
    );
  }
}
