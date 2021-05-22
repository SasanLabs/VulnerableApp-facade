import React from "react";
import { Sidenav, Dropdown, Nav, Icon } from "rsuite";
import { GlobalState } from "../interface/State";

export class LeftNav extends React.Component<GlobalState> {
    globalState: GlobalState;
    constructor(props: GlobalState){
        super(props);
        this.globalState = props;
    }

    render() {
        if(this.globalState.applicationData) {
        return (
            <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
<Sidenav.Body>
       {
       this.globalState.applicationData.forEach(applicationState => {
           
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
          </Nav>
        })};
        </Sidenav.Body>
        </Sidenav>
        );
    } else {
        return {};
    }
}
}