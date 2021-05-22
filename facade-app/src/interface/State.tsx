export interface VulnerabilityType {
  /**
   * Represents identifier type of Vulnerability like CWE or WASC or any other.
   * We have not restricted to anyone type of the identifier as there is no standard which covers
   * all the types of Vulnerabilities.
   */
  identifierType: string;

  /**
   * E.g. WASC-1
   */
  value: string;
}

/**
 * Hints are to help user to crack the vulnerability level
 */
export interface Hint {
  vulnerabilityTypes: Array<VulnerabilityType>;
  description: string;
}

export interface ResourceURI {
  isAbsolute: boolean;
  uri: string;
}

export interface ResourceInformation {
  htmlResource: ResourceURI;
  staticResources: Array<ResourceURI>;
}

/**
 * Information about the Level present in the Vulnerability.
 * TODO we can work more on things like difficulty levels or scores etc. But currently those
 * things are out of scope of the VulnerableApp-Facade.
 */
export interface LevelInformation {
  /**
   * Identifier of the Level.
   * As this is shown in the UI so we have a convension what it is of the formation LEVEL_*
   * where * represent the number identifier like LEVEL_1, LEVEL_2 etc.
   */
  levelIdentifier: string;

  /**
   * Represents whether the level is SECURE or UNSECURE.
   * This might not be needed for general applications but in case a vulnerable
   * application needs to send few secure implementations too such that scanners
   * are evaluated for false positives.
   */
  variant: string;

  hints: Array<Hint>;

  /**
   * As we know that VulnerableApp-Facade will be building the skeleton
   * so to load the UI of the actual Vulnerable Application we need to inject the
   * Html inside the Skeleton. This Resource Information provides that information.
   */
  resourceInformation: ResourceInformation;
}

export interface VulnerabilityDefinition {
  /**
   * Name of the Vulnerability.
   * This will be shown in the UI and expectation is that it should be human readable.
   */
  name: string;
  /**
   * Unique identifier for each Vulnerability inside an Application
   */
  id: string;
  /**
   * Description about the Vulnerability.
   * This will be shown in the UI and as it describes the vulnerability, it should be human readable.
   */
  description: string;

  /**
   * VulnerabilityTypes represents the different standard identifier for one vulnerability.
   * For example: WASC-01 and CWE-287 both represent Insufficient Authentication vulnerability hence
   * both will be added here.
   */
  vulnerabilityTypes: Array<VulnerabilityType>;

  /**
   * Information about each level present under the vulnerability
   */
  levels: Array<LevelInformation>;
}

/**
 * Represents the VulnerableApplications entire state.
 */
export interface ApplicationState {
  applicationName: string;
  vulnerabilityDefinitions: Array<VulnerabilityDefinition>;
}

/**
 * Global State representing the entire data of the application.
 */
export interface GlobalState {
  applicationData?: Array<ApplicationState>;
  activeApplication?: string;
  activeVulnerability?: string;
  activeLevel?: string;
  isSuccessfullyLoaded: boolean;
}
