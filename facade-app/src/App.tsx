import React from "react";
import "./App.css";
import { Sidenav, Nav, Icon, Dropdown, Container, Content } from "rsuite";
import "rsuite/dist/styles/rsuite-default.min.css";
import { MyComponent } from "./MyComponent";
import { Header } from "./Components/Header";
import { GlobalState } from "./interface/State";
const instance = (
  <div style={{ width: 250 }}>
    <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
            Dashboard
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
            User Group
          </Nav.Item>
          <Dropdown eventKey="3" title="Advanced" icon={<Icon icon="magic" />}>
            <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
            <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
            <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
          </Dropdown>
          <Dropdown
            eventKey="4"
            title="Settings"
            icon={<Icon icon="gear-circle" />}
          >
            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
            <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
            <Dropdown.Menu eventKey="4-5" title="Custom Action">
              <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);

interface VulnerabilityDefinitionResponse {
  successful: boolean;
  error?: string;
  data?: any;
}

export default class App extends React.Component {
  globalState?: GlobalState;

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
          ]) {
            let levelInformationRes =
              vulnerabilityDefinitionsRes[vulnerabilityDefinitionIndexRes][
                vulnerabilityLevelIndexRes
              ];
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
              isAbsolute: levelInformationRes["htmlResource"]["isAbsolute"],
              uri: levelInformationRes["htmlResource"]["uri"]
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
                uri: staticResourceInformationRes["uri"]
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
            levels: levels
          };
          vulnerabilityDefinitions.push(vulnerabilityDefinition);
        }
        applicationDataArray.push({
          applicationName: vulnerabilityDefinitionsRes["name"],
          vulnerabilityDefinitions:
            vulnerabilityDefinitionsRes["vulnerabilityDefinitions"]
        });
      }
      this.globalState = {
        applicationData: applicationDataArray,
        activeApplication:
          applicationDataArray.length >= 1
            ? applicationDataArray[0].applicationName
            : null,
        activeVulnerability:
          applicationDataArray.length >= 1 &&
          applicationDataArray[0].vulnerabilityDefinitions.length >= 1
            ? applicationDataArray[0].vulnerabilityDefinitions[0]
            : null,
        activeLevel:
          applicationDataArray.length >= 1 &&
          applicationDataArray[0].vulnerabilityDefinitions.length >= 1 &&
          applicationDataArray[0].vulnerabilityDefinitions[0].levels.length >= 1
            ? applicationDataArray[0].vulnerabilityDefinitions[0].levels[0]
                .identifier
            : null,
        isSuccessfullyLoaded: true,
      };
      this.setState(this.globalState);
    } else {
      console.log(vulnerabilityDefinitionResponse.error);
      this.setState({
        isSuccessfullyLoaded: false,
      });
    }
  }

  componentDidMount() {
    fetch("/VulnerabilityDefinitions")
      .then((res) => res.json())
      .then(
        (result) => {
          this._populateGlobalState({ successful: true, data: result });
        },
        (error) => {
          this._populateGlobalState({
            successful: false,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div>
        <Container>
          <Header></Header>
          <Container>
            {instance}
            <Content></Content>
          </Container>
          {/* <Footer>Footer</Footer> */}
        </Container>

        <MyComponent name="Sasan"></MyComponent>
      </div>
    );
  }
}
