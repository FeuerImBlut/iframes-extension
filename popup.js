const childActivateButton = document.querySelector("#child-activate-btn");

childActivateButton.addEventListener("click", () => {
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
  window.top.postMessage({ sender: "theParent", action: "do_smth" }, "*");
};
