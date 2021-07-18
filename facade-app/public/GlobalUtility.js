function getCurrentVulnerabilityDetails() {
  return Object.assign({}, window.globalUtilityState);
}

function getCurrentVulnerabilityLevel() {
  let details = window.getCurrentVulnerabilityDetails();
  return details.activeVulnerabilityLevelIdentifier;
}

function getCurrentVulnerability() {
  let details = window.getCurrentVulnerabilityDetails();
  return details.activeVulnerabilityIdentifier;
}

function doPostAjaxCall(callBack, url, isJson, data) {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    return genericResponseHandler(xmlHttpRequest, callBack, isJson);
  };
  xmlHttpRequest.open("POST", url, true);
  xmlHttpRequest.send(data);
}

function doGetAjaxCall(callBack, url, isJson) {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    genericResponseHandler(xmlHttpRequest, callBack, isJson);
  };
  xmlHttpRequest.open("GET", url, true);
  xmlHttpRequest.setRequestHeader(
    "Content-Type",
    isJson ? "application/json" : "text/html"
  );
  xmlHttpRequest.send();
}

function genericResponseHandler(xmlHttpRequest, callBack, isJson) {
  if (xmlHttpRequest.readyState == XMLHttpRequest.DONE) {
    // XMLHttpRequest.DONE == 4
    if (xmlHttpRequest.status == 200 || xmlHttpRequest.status == 401) {
      if (isJson) {
        callBack(JSON.parse(xmlHttpRequest.responseText));
      } else {
        callBack(xmlHttpRequest.responseText);
      }
    } else if (xmlHttpRequest.status == 400) {
      alert("There was an error 400");
    } else {
      alert("something else other than 200/401 was returned");
    }
  }
}

/**
 * DONOT USE THIS METHOD.
 *
 * Only for VulnerableApp, for easy shortcut (Backward compatibility)
 * @returns
 */
function getUrlForVulnerabilityLevel() {
  let details = window.getCurrentVulnerabilityDetails();
  let url =
    "/VulnerableApp/" +
    details.activeVulnerabilityIdentifier +
    "/" +
    details.activeVulnerabilityLevelIdentifier;
  return url;
}
