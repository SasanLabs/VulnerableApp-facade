import React from "react";
import VulnerableAppLogo from "../images/Logo.png";

import {
  Header as RSuiteHeader,
  Navbar as RSuiteNavBar,
  Nav as RSuiteNav,
  Icon as RSuiteIcon,
  Dropdown as RSuiteDropDown,
} from "rsuite";
import { Props } from "../interface/Props";

export class Header extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { setGlobalState } = this.props;
    return (
      <RSuiteHeader>
        <RSuiteNavBar appearance="inverse">
          <RSuiteNavBar.Header>
            <img src={VulnerableAppLogo} width="55" height="55" />
          </RSuiteNavBar.Header>
          <RSuiteNavBar.Body>
            <RSuiteNav>
              <RSuiteNav.Item>
                <b>Owasp VulnerableApp-Facade</b>
              </RSuiteNav.Item>
            </RSuiteNav>
            <RSuiteNav pullRight>
              <RSuiteNav.Item
                onSelect={() =>
                  setGlobalState({
                    activateHomePage: true,
                    activateAboutUsPage: false,
                  })
                }
                icon={<RSuiteIcon icon="home" />}
              >
                Home
              </RSuiteNav.Item>
              <RSuiteNav.Item
                onSelect={() =>
                  setGlobalState(
                    { activateHomePage: false, activateAboutUsPage: true },
                    true
                  )
                }
              >
                About Us
              </RSuiteNav.Item>
              <a href="https://github.com/SasanLabs/VulnerableApp-facade">
                <RSuiteNav.Item icon={<RSuiteIcon icon="github" />}>
                  Github
                </RSuiteNav.Item>
              </a>
              <RSuiteDropDown title="Projects by SasanLabs">
                <a href="https://github.com/SasanLabs/VulnerableApp">
                  <RSuiteDropDown.Item icon={<RSuiteIcon icon="github" />}>
                    Owasp VulnerableApp
                  </RSuiteDropDown.Item>
                </a>
                <a href="https://github.com/SasanLabs/owasp-zap-jwt-addon">
                  {" "}
                  <RSuiteDropDown.Item icon={<RSuiteIcon icon="github" />}>
                    ZAP JWT Addon
                  </RSuiteDropDown.Item>
                </a>
                <a href="https://github.com/SasanLabs/owasp-zap-fileupload-addon">
                  <RSuiteDropDown.Item icon={<RSuiteIcon icon="github" />}>
                    ZAP FileUpload Addon
                  </RSuiteDropDown.Item>
                </a>
              </RSuiteDropDown>
            </RSuiteNav>
          </RSuiteNavBar.Body>
        </RSuiteNavBar>
      </RSuiteHeader>
    );
  }
}
