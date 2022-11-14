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

import "../styles/Header.css";

export default class Header extends React.Component<Props, {}> {
  render() {
    const { globalState, setGlobalState } = this.props;
    return (
      <RSuiteHeader>
        <RSuiteNavBar appearance="inverse">
          <RSuiteNavBar.Header>
            <img
              src={VulnerableAppLogo}
              width="55"
              height="55"
              alt="vulnerable app logo"
            />
          </RSuiteNavBar.Header>
          <RSuiteNavBar.Body>
            <RSuiteNav>
              <RSuiteNav.Item
                onSelect={() =>
                  setGlobalState({
                    ...globalState,
                    activateHomePage: true,
                    activateAboutUsPage: false,
                  })
                }
              >
                <b>Owasp VulnerableApp-Facade</b>
              </RSuiteNav.Item>
            </RSuiteNav>
            <RSuiteNav pullRight>
              <RSuiteNav.Item
                onSelect={() =>
                  setGlobalState({
                    ...globalState,
                    activateHomePage: true,
                    activateAboutUsPage: false,
                  })
                }
                icon={<RSuiteIcon icon="home" role={"img"} />}
              >
                Home
              </RSuiteNav.Item>
              <RSuiteNav.Item
                onSelect={() =>
                  setGlobalState({
                    ...globalState,
                    activateHomePage: false,
                    activateAboutUsPage: true,
                  })
                }
              >
                About Us
              </RSuiteNav.Item>
              <RSuiteDropDown title="Scanners">
                <RSuiteDropDown.Item title="Dynamic Application Security Testing">
                  DAST
                </RSuiteDropDown.Item>
                <RSuiteDropDown.Item title="Static Application Security Testing">
                  SAST
                </RSuiteDropDown.Item>
              </RSuiteDropDown>
              <a href="https://github.com/SasanLabs/VulnerableApp-facade">
                <RSuiteNav.Item
                  icon={<RSuiteIcon icon="github" role={"img"} />}
                >
                  Github
                </RSuiteNav.Item>
              </a>
              <RSuiteDropDown title="Projects by SasanLabs">
                <a href="https://github.com/SasanLabs/VulnerableApp">
                  <RSuiteDropDown.Item
                    icon={<RSuiteIcon icon="github" role={"img"} />}
                  >
                    Owasp VulnerableApp
                  </RSuiteDropDown.Item>
                </a>
                <a href="https://github.com/SasanLabs/owasp-zap-jwt-addon">
                  {" "}
                  <RSuiteDropDown.Item
                    icon={<RSuiteIcon icon="github" role={"img"} />}
                  >
                    ZAP JWT Addon
                  </RSuiteDropDown.Item>
                </a>
                <a href="https://github.com/SasanLabs/owasp-zap-fileupload-addon">
                  <RSuiteDropDown.Item
                    icon={<RSuiteIcon icon="github" role={"img"} />}
                  >
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
