import React from "react";
import {
  Sidenav as RSuiteSidenav,
  Dropdown as RSuiteDropdown,
  Nav as RSuiteNav,
  Icon as RSuiteIcon,
} from "rsuite";
import { Props } from "../interface/Props";
import { LevelInformation, VulnerabilityDefinition } from "../interface/State";

export class LeftNav extends React.Component<Props> {
  constructor(props: Props) {
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
    });
  }

  _getApplicationVulnerabilityLevels(
    applicationName: string,
    vulnerabilityName: string,
    levels: Array<LevelInformation>
  ) {
    return (
      <RSuiteDropdown
        eventKey={applicationName + "." + vulnerabilityName}
        title={vulnerabilityName}
        onOpen={() =>
          this._handleVulnerabilityTypeSelect(
            applicationName,
            vulnerabilityName
          )
        }
      >
        {levels.map((vulnerabilityLevel) => (
          <RSuiteDropdown.Item
            eventKey={
              applicationName +
              "." +
              vulnerabilityName +
              "." +
              vulnerabilityLevel.levelIdentifier
            }
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
          >
            {vulnerabilityLevel.levelIdentifier}
          </RSuiteDropdown.Item>
        ))}
      </RSuiteDropdown>
    );
  }

  _getApplicationVulnerabilities(
    applicationName: string,
    vulnerabilityDefinition: Array<VulnerabilityDefinition>,
    isApplicationDropDownClosed: boolean,
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
              open={!isApplicationDropDownClosed}
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
    let index = 0;
    if (isSuccessfullyLoaded && applicationData) {
      return (
        <div>
          {applicationData.map((applicationData) => {
            let applicationName = applicationData.applicationName;
            let vulnerabilityDefinitions =
              applicationData.vulnerabilityDefinitions;
            return this._getApplicationVulnerabilities(
              applicationName,
              vulnerabilityDefinitions,
              index++ === 0,
              activeApplication
            );
          })}
        </div>
      );
    }
    return <div />;
  }
}
