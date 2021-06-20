import React from "react";
import { Footer as RSuiteFooter, Navbar as RSuiteNavBar } from "rsuite";
import { Props } from "../interface/Props";

export class Footer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <RSuiteFooter>
        <RSuiteNavBar>
          <RSuiteNavBar.Body
            style={{ textAlign: "center", height: "30px", fontSize: "15px" }}
          >
            <div>&copy; Copyright {new Date().getFullYear()}, SasanLabs</div>
          </RSuiteNavBar.Body>
        </RSuiteNavBar>
      </RSuiteFooter>
    );
  }
}
