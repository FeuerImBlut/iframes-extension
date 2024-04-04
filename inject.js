window.top.addEventListener("message", (message) => {
  if (message.data.sender && message.data.sender === "childIframe") {
    console.log(`The child is initialized with url: ${message.data.url}.`);
  }
});

setTimeout(() => {
  console.log("Parent is initialized.");
  console.log("Parent is broadcasting.");
  window.top.postMessage({
    sender: "theParent",
    isInialized: true,
  });

}, 2000);
