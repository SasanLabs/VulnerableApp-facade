import { LevelInformation, ResourceType } from "../interface/State";

/**
 * Utility function for fetching data by doing an Http Get call.
 * @param uri , resource URL
 * @param callback , callback function to invoke on Api response
 * @param isJson , to parse the response and return json object if True and text in case of False
 */
export function getResource(uri: string, callback: Function, isJson: boolean): void {
  fetch(uri)
    .then((res) => (isJson ? res.json() : res.text()))
    .then(
      (result) => {
        callback({ isSuccessful: true, data: result });
      },
      (error) => {
        callback({ isSuccessful: false, error: error });
      }
    );
}

export function removeChildByParentElementId(elementId: string): void {
  let documentElement = document.getElementById(elementId);
  while (documentElement && documentElement.lastElementChild) {
    documentElement.removeChild(documentElement.lastElementChild);
  }
}


export function appendStaticResourcesToDocument(selectedLevel: LevelInformation): void {
  removeChildByParentElementId("scripts");
  removeChildByParentElementId("styles");
  selectedLevel.resourceInformation.staticResources.forEach(
  (resourceURI) => {
    if (resourceURI.resourceType === ResourceType.JAVASCRIPT) {
      const script = document.createElement("script");
      script.src = resourceURI.uri;
      script.type = "text/javascript";
      script.async = true;
      document.getElementById("scripts")?.appendChild(script);
    } else if (resourceURI.resourceType === ResourceType.CSS) {
      let cssElement = document.createElement("link");
      cssElement.href = resourceURI.uri;
      cssElement.type = "text/css";
      cssElement.rel = "stylesheet";
      document.getElementById("styles")?.appendChild(cssElement);
    }
  }
  );
}