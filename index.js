

const time = document.getElementById("time");
const date = document.getElementById("date");
const temple = document.getElementById("temple");
const bodyElement = document.body;

const menuBtn = document.querySelector(".menu-btn");
const menuDropdown = document.querySelector(".menu-dropdown");

menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("toggle-dropdown");
})

const updatesBtn = document.querySelector(".updates-btn");
const updatesDropdown = document.querySelector(".updates-dropdown");
const whiteRightArrow = document.querySelector(".white-right-arrow");
const whiteDownArrow = document.querySelector(".white-down-arrow");
const blackRightArrow = document.querySelector(".black-right-arrow");
const blackDownArrow = document.querySelector(".black-down-arrow");

updatesBtn.addEventListener("click", () => {
  updatesDropdown.classList.toggle("toggle-dropdown");
  whiteRightArrow.classList.toggle("toggle-right-arrow");
  whiteDownArrow.classList.toggle("toggle-down-arrow");
  blackRightArrow.classList.toggle("toggle-right-arrow");
  blackDownArrow.classList.toggle("toggle-down-arrow");
})

const communityBtn = document.querySelector(".community-btn");
const communityDropdown = document.querySelector(".community-dropdown")
const whiteRightArrow2 = document.querySelector(".white-right-arrow2");
const whiteDownArrow2 = document.querySelector(".white-down-arrow2");
const blackRightArrow2 = document.querySelector(".black-right-arrow2");
const blackDownArrow2 = document.querySelector(".black-down-arrow2");
communityBtn.addEventListener("click", () => {
  communityDropdown.classList.toggle("toggle-dropdown2");
  whiteRightArrow2.classList.toggle("toggle-right-arrow2");
  whiteDownArrow2.classList.toggle("toggle-down-arrow2");
  blackRightArrow2.classList.toggle("toggle-right-arrow2");
  blackDownArrow2.classList.toggle("toggle-down-arrow2");
  
})



const plusButton = document.querySelector(".plus-btn");
const dropdownOptions = document.querySelector(".dropdown-options");

plusButton.addEventListener("click", () => {
  dropdownOptions.classList.toggle("show-dropdown");
});

let textArea = document.querySelector(".notepad-textarea");
const sizeDropdownBtn = document.querySelector(".size-dropdown-btn");
const notepadLabel = document.querySelector(".notepad-label");

notepadLabel.addEventListener("click", () => {
  plusButton.classList.toggle("hide-plus");
  sizeDropdownBtn.classList.toggle("text-area");
  textArea.classList.toggle("text-area");
  dropdownOptions.classList.toggle("hide-dropdown");
});

textArea.addEventListener("input", () => {
  localStorage.setItem("notesave", textArea.value);
});
const notesave = localStorage.getItem("notesave");
if (notesave) textArea.value = notesave;

const sizeDropdownOptions = document.querySelector(".size-dropdown-options");

sizeDropdownBtn.addEventListener("click", () => {
  sizeDropdownOptions.classList.toggle("show-dropdown");
});

sizeDropdownOptions.addEventListener("click", (event) => {
  const size = event.target.dataset.size;
  if (!size) return;
  textArea.style.fontSize = size;
});

const youtubeLabel = document.querySelector(".youtube-label");
const youtubeEnterContainer = document.querySelector(".youtube-link-container");
youtubeLabel.addEventListener("click", () => {
  plusButton.classList.toggle("hide-plus");
  dropdownOptions.classList.toggle("hide-dropdown");
  youtubeEnterContainer.classList.toggle("show-input");
});

const youtubeInput = document.querySelector(".enter-youtube-link");
const youtubeEnterBtn = document.querySelector(".enter-youtube-btn");

youtubeEnterBtn.addEventListener("click", () => {
  youtubeEnterContainer.classList.toggle("show-resize");
  const url = youtubeInput.value.replace("watch?v=", "embed/");
  youtubeEnterContainer.innerHTML = `<iframe src = "${url}" allowFullScreen = "false" class = "youtube-video"></iframe>`;
});

const darkMode = document.querySelector(".switcher");
darkMode.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark")) {
    bodyElement.classList.remove("dark");
    localStorage.setItem("dark-mode", "off");
  } else {
    bodyElement.classList.add("dark");
    localStorage.setItem("dark-mode", "on");
  }
});
const saved = localStorage.getItem("dark-mode");
if (saved === "on") bodyElement.classList.add("dark");

function updateTimeDate() {
  // time
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hours12 = hours % 12 || 12;

  const minutesPadded = String(minutes).padStart(2, "0");
  const secondsPadded = String(seconds).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";

  // time.textContent = `${hours12}:${minutesPadded}:${secondsPadded} ${ampm}`;
  time.textContent = now.toLocaleTimeString();

  // date
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = now.getMonth();
  const day = now.getDate();
  const year = now.getFullYear();

  const monthName = monthNames[month];

  date.textContent = `${monthName} ${day}, ${year}`;
}
setInterval(updateTimeDate, 1000);
updateTimeDate();




