// TODO: better type here?
export interface VulnerabilityDefinitionResponseData {
  name?: string;
  id?: string;
  description?: string;
}

export interface VulnerabilityDefinitionResponse {
  isSuccessful: boolean;
  error?: string;
  data?: Array<VulnerabilityDefinitionResponseData>;
}
