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
  init();
}, 2000);

const init = () => {
  const button = document.createElement("button");
  button.classList.add("custom-button");
  button.textContent = "Make child do something.";
  window.document.body.appendChild(button);
  button.onclick = () => {
    window.top.postMessage({ sender: "theParent", action: 'do_smth' }, "*");
  };
};
