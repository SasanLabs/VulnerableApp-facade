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

function doPostAjaxCall(callBack, url, isJson, data, headers = {}) {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    return genericResponseHandler(xmlHttpRequest, callBack, isJson);
  };
  xmlHttpRequest.open("POST", url, true);

  for (const header in headers) {
    xmlHttpRequest.setRequestHeader(header, headers[header]);
  }

  xmlHttpRequest.send(data);
}

function doGetAjaxCall(callBack, url, isJson, headers = {}) {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    genericResponseHandler(xmlHttpRequest, callBack, isJson);
  };
  xmlHttpRequest.open("GET", url, true);
  xmlHttpRequest.setRequestHeader(
    "Content-Type",
    isJson ? "application/json" : "text/html"
  );

  for (const header in headers) {
    xmlHttpRequest.setRequestHeader(header, headers[header]);
  }

  xmlHttpRequest.send();
}

function genericResponseHandler(xmlHttpRequest, callBack, isJson) {
  if (xmlHttpRequest.readyState == XMLHttpRequest.DONE) {
    // XMLHttpRequest.DONE == 4
    if (
      xmlHttpRequest.status == 200 ||
      xmlHttpRequest.status == 401 ||
      xmlHttpRequest.status == 403
    ) {
      if (isJson) {
        callBack(JSON.parse(xmlHttpRequest.responseText), xmlHttpRequest);
      } else {
        callBack(xmlHttpRequest.responseText, xmlHttpRequest);
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
 * Only for VulnerableApp, for easy shortcut (Backward compatibility). Reads the active
 * level's protocol (set in globalUtilityState alongside the other identifiers) to return a
 * ws(s):// handshake URL for a WebSocket level and the usual http path for everything else,
 * so a level's own script calls this one method regardless of transport.
 * @returns
 */
function getUrlForVulnerabilityLevel() {
  let details = window.getCurrentVulnerabilityDetails();
  if (details.protocol === "WS") {
    let scheme = window.location.protocol === "https:" ? "wss://" : "ws://";
    return (
      scheme +
      window.location.host +
      "/VulnerableApp/ws/" +
      details.activeVulnerabilityIdentifier +
      "/" +
      details.activeVulnerabilityLevelIdentifier
    );
  }
  return (
    "/VulnerableApp/" +
    details.activeVulnerabilityIdentifier +
    "/" +
    details.activeVulnerabilityLevelIdentifier
  );
}

function getUrlForVulnerability() {
  let details = window.getCurrentVulnerabilityDetails();
  return "/VulnerableApp/" + details.activeVulnerabilityIdentifier;
}

// Only the WebSocket of the level being shown stays open, so it is closed when the user
// moves to another level or vulnerability. The handlers are removed first so the template
// that is being replaced never gets a late callback.
let activeWebSocket = null;

function closeActiveWebSocket() {
  if (activeWebSocket) {
    activeWebSocket.onopen = null;
    activeWebSocket.onmessage = null;
    activeWebSocket.onclose = null;
    activeWebSocket.onerror = null;
    activeWebSocket.close();
    activeWebSocket = null;
  }
}

function openWebSocketForVulnerabilityLevel() {
  closeActiveWebSocket();
  activeWebSocket = new WebSocket(getUrlForVulnerabilityLevel());
  return activeWebSocket;
}
