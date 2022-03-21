import React from "react";
import { Footer as RSuiteFooter, Navbar as RSuiteNavBar } from "rsuite";
import { Props } from "../interface/Props";

interface IFooter extends Props{
  copyRightYear: number
}

export default class Footer extends React.Component<IFooter, {}> {
  render() {
    const { copyRightYear } = this.props;
    return (
      <RSuiteFooter>
        <RSuiteNavBar>
          <RSuiteNavBar.Body
            style={{ textAlign: "center", height: "30px", fontSize: "15px" }}
          >
            <div data-testid={"FOOTER_COPYRIGHT_TEXT"}>&copy; Copyright {copyRightYear}, SasanLabs</div>
          </RSuiteNavBar.Body>
        </RSuiteNavBar>
      </RSuiteFooter>
    );
  }
}
