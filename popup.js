const catcherSwitcher = document.querySelector("#switchCatcher");
const testButton = document.querySelector("#testButton");

catcherSwitcher.addEventListener("change", (event) => {
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: testFn,
        args: ["true"],
      });
    }
  });
});

window.onload = () => {
  console.log('window loaded');
}

window.top.setTimeout(() => {  
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: testFn,
      });
    }
  });
  console.log('Started');
}, 1000)

testButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: buttonFn,
      });
    }
  });
});

const buttonFn = () => {
  // const iframes = document.querySelectorAll("iframe");
  // iframes.forEach((iframe) => {
  //   iframe.contentWindow.window.top.postMessage("fet", "*");
  //   console.log("posted");
  // });
  // window.top.postMessage("fet", "*");
};

const testFn = (arg) => {
  const isInitialized = true;
  console.log('started');

  setTimeout(() => {
    window.top.postMessage({
      sender: 'theParent',
      data: {isInitialized}
    })
  }, 2000);

  // window.top.addEventListener("message", (event) => {
  //   console.log(event);
  // });
};
