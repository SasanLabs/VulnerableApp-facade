import React from "react";
import { Panel as RSuitePanel, PanelGroup as RSuitePanelGroup } from "rsuite";

export class HomePage extends React.Component {
  Card = () => (
    <div data-testid={"HOME_PAGE_MAIN_CONTAINER"}>
      <RSuitePanel
        header="Welcome to Owasp VulnerableApp-Facade"
        className="VulnerableApp-Facade-HomePage-Content-Header"
      >
        <div
          className="VulnerableApp-Facade-HomePage-Content"
          data-testid={"HOME_PAGE_CONTENT_CONTAINER"}
        >
          As we are seeing a lot of technological enhancements in the industry
          from past few years, these technical enhancements are solving one or
          the other problem however, with that they also bring few different
          vulnerabilities. Vulnerable Applications are generally written in one
          of the techstacks like either Node.js or Java with a SQL or NoSQL
          database etc and hence they are not able to expand to a whole new set
          of vulnerabilities which are present in other technologies. Also
          adding more vulnerabilities in a single vulnerable application makes
          it heavier and complex which finally makes it unmaintainable. So
          VulnerableApp-facade is built to solve this problem by building a
          distributed farm of Vulnerable Applications such that they can be
          built agnostic to tech stacks.
          <p>Following is the design diagram of Owasp VulnerableApp-Facade:</p>
          <img
            width="80%"
            src="/images/VulnerableApp-facade.jpeg"
            alt="Unable to lead the design diagram"
          />
          <p>
            Here VulnerableApp-Facade is running as a gateway or a proxy which
            is routing calls to actual Vulnerable Applications based on a
            criteria defined in the nginx configuration.
          </p>
        </div>
      </RSuitePanel>
      <RSuitePanel
        className="VulnerableApp-Facade-HomePage-Content-Header"
        header="Warning"
        data-testid={"HOME_PAGE_WARNING_CONTAINER"}
      >
        <div className="VulnerableApp-Facade-HomePage-Content">
          As VulnerableApp-Facade is a proxy wrapper over the actual Vulnerable
          Applications which can be very dangerous if exposed over the public
          internet. So we suggest you to please run it in local dev environments
          or environments without any public internet access.
        </div>
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
