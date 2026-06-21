import React from "react";
import { LevelInformation } from "../interface/State";
import { Panel as RSuitePanel } from "rsuite";
import { ChallengeCard } from "./ChallengeCard";
import {
  appendStaticResourcesToDocument,
  getResource,
  manipulateDOM,
} from "../Utilities/Utils";
import { VulnerabilityDefinitionResponse } from "../interface/GeneralContracts";
import { HomePage } from "./HomePage";
import AboutUs from "./AboutUs";
import { Props } from "../interface/Props";

interface ContentState {
  description?: string;
}

export class Content extends React.Component<Props, ContentState> {
  selectedLevel?: LevelInformation;

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.globalState.activeLevel !==
        this.props.globalState.activeLevel ||
      prevProps.globalState.activeVulnerability !==
        this.props.globalState.activeVulnerability ||
      prevProps.globalState.activeApplication !==
        this.props.globalState.activeApplication
    ) {
      const {
        activeApplication,
        applicationData,
        activeVulnerability,
        activeLevel,
      } = this.props.globalState;
      const selectedApplicationState = applicationData?.find(
        (applicationState) =>
          applicationState.applicationName === activeApplication
      );
      if (selectedApplicationState) {
        const selectedVulnerability =
          selectedApplicationState.vulnerabilityDefinitions.find(
            (vulnerabilityDefinition) =>
              vulnerabilityDefinition.id === activeVulnerability
          );
        this.setState({ description: selectedVulnerability?.description });
        if (selectedVulnerability) {
          const selectedLevel = selectedVulnerability.levels.find(
            (level) => level.levelIdentifier === activeLevel
          );
          if (selectedLevel) {
            this.selectedLevel = selectedLevel;
            getResource(
              selectedLevel.resourceInformation.htmlResource.uri,
              this._setLocalState.bind(this),
              false
            );
          }
        }
      }
    }
  }

  _setLocalState(
    vulnerabilityDefinitionResponse: VulnerabilityDefinitionResponse
  ) {
    if (vulnerabilityDefinitionResponse.data) {
      manipulateDOM("__content__", vulnerabilityDefinitionResponse.data);
      if (this.selectedLevel) {
        appendStaticResourcesToDocument(this.selectedLevel);
      }
    }
  }

  render() {
    const {
      activeVulnerability,
      activateHomePage,
      activateAboutUsPage,
      showHints,
      isChallengeModeEnabled,
    } = this.props.globalState;
    const { setGlobalState } = this.props;

    const challengeCards =
      this.selectedLevel?.challengeCards ||
      (this.selectedLevel?.challenge ? [this.selectedLevel.challenge] : []);

    // THE FALLBACK LOGIC:
    // Even if global mode is Challenge, if there's no data, it falls back to Scanner.
    const isChallengeAvailable = challengeCards.length > 0;
    const showChallengeMode = isChallengeModeEnabled && isChallengeAvailable;

    // --- MASONRY LAYOUT LOGIC ---
    // Left column gets evens (0, 2, 4...), Right gets odds (1, 3, 5...)
    const leftColumnCards = challengeCards.filter(
      (_, index) => index % 2 === 0
    );
    const rightColumnCards = challengeCards.filter(
      (_, index) => index % 2 !== 0
    );
    const challengeRenderScopeKey = `${
      this.props.globalState.activeApplication || ""
    }-${this.props.globalState.activeVulnerability || ""}-${
      this.props.globalState.activeLevel || ""
    }`;

    return (
      <div className="VulnerableApp-Facade-Info">
        {activateHomePage ? (
          <HomePage></HomePage>
        ) : activateAboutUsPage ? (
          <AboutUs></AboutUs>
        ) : (
          <div className="VulnerableApp-Facade-Content-Container">
            {/* Main Content Area */}
            {activeVulnerability && (
              <div>
                {/* 1. Vulnerability Description (Scanner Mode Only) */}
                {
                  <RSuitePanel
                    header="Vulnerability Description"
                    className="VulnerableApp-Facade-Content-Vulnerability-Description-Header"
                    collapsible={true}
                    defaultExpanded={!showChallengeMode}
                  >
                    <div
                      className="VulnerableApp-Facade-Content"
                      data-testid="VULNERABILITY_CONTENT_DESCRIPTION"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state?.description || "",
                        }}
                      />
                    </div>
                  </RSuitePanel>
                }

                {/* 2. Practice Vulnerability (Always displayed) */}
                <RSuitePanel
                  header="Practice Vulnerability"
                  className="VulnerableApp-Facade-Content-Practice-Vulnerability-Header"
                >
                  <div className="VulnerableApp-Facade-Content">
                    <div
                      id="__content__"
                      data-testid={"VULNERABILITY_MAIN_CONTENT"}
                    />
                  </div>
                </RSuitePanel>

                {/* 3. Challenge Cards (Challenge Mode Only) */}
                {showChallengeMode && (
                  <div
                    style={{
                      margin: "15px",
                      display: "flex",
                      gap: "15px",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Left Column */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        flex: 1,
                      }}
                    >
                      {leftColumnCards.map((challenge, index) => (
                        <ChallengeCard
                          key={`${challengeRenderScopeKey}-left-${index}`}
                          challenge={challenge}
                          challengeNumber={index * 2 + 1}
                        />
                      ))}
                    </div>

                    {/* Right Column */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        flex: 1,
                      }}
                    >
                      {rightColumnCards.map((challenge, index) => (
                        <ChallengeCard
                          key={`${challengeRenderScopeKey}-right-${index}`}
                          challenge={challenge}
                          challengeNumber={index * 2 + 2}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Hints (Scanner Mode Only) */}
                {!showChallengeMode &&
                  this.selectedLevel &&
                  this.selectedLevel.hints &&
                  this.selectedLevel.hints.length > 0 && (
                    <RSuitePanel
                      header="Hints"
                      className="VulnerableApp-Facade-Content-Hint-Content"
                      collapsible={true}
                      defaultExpanded={false}
                      expanded={showHints}
                      onSelect={() =>
                        setGlobalState({
                          ...this.props.globalState,
                          showHints: !showHints,
                        })
                      }
                      style={{ marginTop: "15px" }}
                    >
                      <ol data-testid={"VULNERABILITY_HINTS"}>
                        {this.selectedLevel.hints.map((hint, index) => {
                          return (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{
                                __html: hint.description,
                              }}
                            />
                          );
                        })}
                      </ol>
                    </RSuitePanel>
                  )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
