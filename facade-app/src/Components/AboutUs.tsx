import React from "react";
import {
  Panel as RSuitePanel,
  PanelGroup as RSuitePanelGroup,
  Icon as RSuiteIcon,
} from "rsuite";

export default class AboutUs extends React.Component {
  Card = () => (
    <div>
      <RSuitePanel
        header="About Us"
        className="VulnerableApp-Facade-AboutUs-Content-Header"
      >
        <div className="VulnerableApp-Facade-AboutUs-Content">
          <p>
            VulnerableApp-Facade was started when we were building{" "}
            <a href="https://github.com/SasanLabs/owasp-zap-fileupload-addon">
              File-upload addon
            </a>{" "}
            for <a href="https://www.zaproxy.org/">Owasp ZAP</a>, which is used
            to find the vulnerabilities in the File Upload functionality. As we
            were developing the addon and writing the scan rules, in order to
            test those scan rules we were using{" "}
            <a href="https://github.com/SasanLabs/VulnerableApp">
              Owasp VulnerableApp
            </a>{" "}
            but as Owasp VulnerableApp is written in Java and is a SpringBoot
            application hence testing scan rules related to PHP, ASP, JSP etc
            are not possible. Hence we thought of building a facade application
            which acts as proxy or gateway to route the requests to vulnerable
            applications written in different tech stacks.
          </p>
        </div>
      </RSuitePanel>
      <RSuitePanel
        header="Contact Us"
        className="VulnerableApp-Facade-AboutUs-Content-Header"
      >
        <p className="VulnerableApp-Facade-AboutUs-Content">
          <RSuiteIcon icon="envelope" /> karan.sasan@owasp.org
        </p>
      </RSuitePanel>
    </div>
  );

  render() {
    return (
      <div>
        <RSuitePanelGroup>
          <this.Card />
        </RSuitePanelGroup>
      </div>
    );
  }
}
