/**
 * Utility function for fetching data by doing an Http Get call.
 * @param uri , resource URL
 * @param callback , callback function to invoke on Api response
 * @param isJson , to parse the response and return json object if True and text in case of False
 */
export function getResource(uri: string, callback: Function, isJson: boolean) {
    fetch(uri)
    .then((res) => isJson ? res.json() : res.text())
    .then(
      (result) => {
        callback({isSuccessful: true, data: result});
      },
      (error) => {
        callback({isSuccessful: true, data: error});
      }
    );
}