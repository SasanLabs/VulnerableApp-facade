import React from "react";
import { GlobalState } from "../interface/State";

export class Content extends React.Component<GlobalState>{
    constructor(props: GlobalState) {
        super(props);
    }

    _populateContent() {
        const {activeApplication, applicationData, activeVulnerability, activeLevel} = this.props;
        const selectedApplicationState = applicationData?.find(applicationState => applicationState.applicationName === activeApplication);
        if(selectedApplicationState) {
            const selectedVulnerability = selectedApplicationState.vulnerabilityDefinitions.find(vulnerabilityDefinition => vulnerabilityDefinition.id === activeVulnerability);
            if(selectedVulnerability) {
                const selectedLevel = selectedVulnerability.levels.find(level => level.levelIdentifier === activeLevel);
                if(selectedLevel) {
                    // Fetch this resource selectedLevel.resourceInformation.htmlResource
                }
            }
        }   
        return <div/>;
    }


    render() {
        return <div>{
            this._populateContent()
            }</div>
    }

} 