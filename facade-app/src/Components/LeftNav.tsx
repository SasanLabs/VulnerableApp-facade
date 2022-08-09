import React from "react";
import {
  Sidenav as RSuiteSidenav,
  Dropdown as RSuiteDropdown,
  Nav as RSuiteNav,
  Icon as RSuiteIcon,
} from "rsuite";
import { GlobalStateProps } from "../interface/GlobalStateProps";
import { LevelInformation, VulnerabilityDefinition } from "../interface/State";

export default class LeftNav extends React.Component<GlobalStateProps> {
  constructor(props: GlobalStateProps) {
    super(props);
    this._handleVulnerabilityLevelSelect =
      this._handleVulnerabilityLevelSelect.bind(this);
    this._handleVulnerabilityTypeSelect =
      this._handleVulnerabilityTypeSelect.bind(this);
  }

  _handleVulnerabilityLevelSelect(
    applicationName: string,
    vulnerabilityName: string,
    levelIdentifier: string
  ) {
    this.props.setGlobalState({
      activeApplication: applicationName,
      activeVulnerability: vulnerabilityName,
      activeLevel: levelIdentifier,
      activateHomePage: false,
      activateAboutUsPage: false,
      showHints: false,
    });
  }

  _handleVulnerabilityTypeSelect(
    applicationName: string,
    vulnerabilityName: string
  ) {
    this.props.setGlobalState({
      activeApplication: applicationName,
      activeVulnerability: vulnerabilityName,
      activeLevel: undefined,
      activateHomePage: false,
      activateAboutUsPage: false,
      showHints: false,
    });
  }

  _getApplicationVulnerabilityLevels(
    applicationName: string,
    vulnerabilityName: string,
    levels: Array<LevelInformation>
  ) {
    const { activeApplication, activeVulnerability, activeLevel } =
      this.props.globalState;
    return (
      <RSuiteDropdown
        eventKey={applicationName + "." + vulnerabilityName}
        title={vulnerabilityName}
        activeKey={
          activeApplication + "." + activeVulnerability + "." + activeLevel
        }
        onOpen={() =>
          this._handleVulnerabilityTypeSelect(
            applicationName,
            vulnerabilityName
          )
        }
        className="VulnerableApp-Facade-LeftNav-Vulnerability-Level"
        data-testid={applicationName + "." + vulnerabilityName}
      >
        {levels.map((vulnerabilityLevel) => {
          const itemKey =
            applicationName +
            "." +
            vulnerabilityName +
            "." +
            vulnerabilityLevel.levelIdentifier;
          return (
            <RSuiteDropdown.Item
              key={itemKey}
              eventKey={itemKey}
              icon={
                vulnerabilityLevel.variant === "SECURE" ? (
                  <RSuiteIcon icon="lock" />
                ) : (
                  <RSuiteIcon icon="unlock" />
                )
              }
              onSelect={() =>
                this._handleVulnerabilityLevelSelect(
                  applicationName,
                  vulnerabilityName,
                  vulnerabilityLevel.levelIdentifier
                )
              }
              data-testid={itemKey}
            >
              {vulnerabilityLevel.levelIdentifier}
            </RSuiteDropdown.Item>
          );
        })}
      </RSuiteDropdown>
    );
  }

  _getApplicationVulnerabilities(
    applicationName: string,
    vulnerabilityDefinition: Array<VulnerabilityDefinition>,
    activeApplication?: string
  ) {
    return (
      <RSuiteSidenav
        defaultOpenKeys={activeApplication ? [activeApplication] : []}
      >
        <RSuiteSidenav.Body>
          <RSuiteNav>
            <RSuiteDropdown
              eventKey={applicationName}
              title={applicationName}
              className="VulnerableApp-Facade-LeftNav-Application"
              icon={<RSuiteIcon icon="server" role={"img"} />}
            >
              <RSuiteDropdown.Item divider />
              {vulnerabilityDefinition.map((vulnerabilityDefinition) =>
                this._getApplicationVulnerabilityLevels(
                  applicationName,
                  vulnerabilityDefinition.name,
                  vulnerabilityDefinition.levels
                )
              )}
            </RSuiteDropdown>
          </RSuiteNav>
        </RSuiteSidenav.Body>
      </RSuiteSidenav>
    );
  }

  render() {
    const { isSuccessfullyLoaded, applicationData, activeApplication } =
      this.props.globalState;
    if (isSuccessfullyLoaded && applicationData) {
      return (
        <div data-testid={"LEFT_NAV_CONTAINER"}>
          {applicationData.map((applicationData) => {
            const applicationName = applicationData.applicationName;
            const vulnerabilityDefinitions =
              applicationData.vulnerabilityDefinitions;
            return this._getApplicationVulnerabilities(
              applicationName,
              vulnerabilityDefinitions,
              activeApplication
            );
          })}
        </div>
      );
    }
    return <div />;
  }
}
