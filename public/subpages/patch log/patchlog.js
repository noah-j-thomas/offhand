bodyElement = document.body;

const saved = localStorage.getItem("dark-mode");
if (saved === "on") bodyElement.classList.add("dark");