import React from "react";
import {
  Sidenav as RSuiteSidenav,
  Dropdown as RSuiteDropdown,
  Nav as RSuiteNav,
} from "rsuite";
import { Props } from "../interface/Props";
import { LevelInformation, VulnerabilityDefinition } from "../interface/State";

export class LeftNav extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  _getApplicationVulnerabilityLevels(
    applicationName: string,
    vulnerabilityName: string,
    levels: Array<LevelInformation>
  ) {
    return (
      <RSuiteDropdown.Menu
        eventKey={applicationName + "." + vulnerabilityName}
        title={vulnerabilityName}
      >
        {levels.map((vulnerabilityLevel, index) => (
          <RSuiteDropdown.Item
            eventKey={applicationName + "." + vulnerabilityName + "." + index}
            active={index === 0}
          >
            {vulnerabilityLevel.levelIdentifier}
          </RSuiteDropdown.Item>
        ))}
      </RSuiteDropdown.Menu>
    );
  }

  _getApplicationVulnerabilities(
    applicationName: string,
    vulnerabilityDefinition: Array<VulnerabilityDefinition>
  ) {
    return (
      <div style={{ width: "20%" }}>
        <RSuiteSidenav>
          <RSuiteSidenav.Body>
            <RSuiteNav>
              <RSuiteDropdown
                eventKey={applicationName}
                title={applicationName}
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
      </div>
    );
  }

  render() {
    const { isSuccessfullyLoaded, applicationData } = this.props.globalState;
    if (isSuccessfullyLoaded && applicationData) {
      return (
        <div>
          {applicationData.map((applicationData) => {
            let applicationName = applicationData.applicationName;
            let vulnerabilityDefinitions =
              applicationData.vulnerabilityDefinitions;

            return this._getApplicationVulnerabilities(
              applicationName,
              vulnerabilityDefinitions
            );
          })}
        </div>
      );
    }
    return <div />;
  }
}
