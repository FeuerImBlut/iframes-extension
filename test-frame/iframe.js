let isParentInitialized = false;

window.onload = () => {
  console.log("Child initialized");
  init();
};

const init = () => {
  window.top.addEventListener("message", (event) => {
    if (event.data && event.data.sender && event.data.sender === "theParent") {
      if (!isParentInitialized) {
        if (event.data.isInialized) {
          console.log("The parent has initialized.");
          isParentInitialized = true;
          sendMessage();
        }
        return;
      }
      if (event.data.action === "do_smth") {
        console.log("The child is doing something.");
      }
    }
  });
};

const message = {
  sender: "childIframe",
  url: window.location.href,
};

const sendMessage = () => {
  window.top.postMessage(message, "*");
};
