//   read from file
const url = chrome.runtime.getURL('data/domains.json');
var domains = []

fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => domains = json.domains);


// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) { return {cancel: true}; },
//     { urls: domains },
//     ["blocking"]
//     );


chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    { urls: ["*://.doubleclick.net/*"] },
    ["blocking"]
    );
  