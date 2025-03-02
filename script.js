"use strict";

// Selecting Elements

// THEME ELEMENTS
let bodyContainer = document.querySelector("body");
console.log(bodyContainer);
let backgroundBody = document.querySelector(".container");
let mainHeading = document.querySelector(".hero-heading");
console.log(mainHeading);
let themeContainer = document.querySelector(".logo-theme-container");
let checkboxLabel = document.querySelectorAll(".label");
let darkLogo = document.querySelector(".dark-logo");
let lightLogo = document.querySelector(".light-logo");
let darkCharacterLogo = document.querySelector(".dark-character-counter-logo");
let lightCharacterLogo = document.querySelector(
  ".light-character-counter-logo"
);

let textArea = document.querySelector("#text-area");
let excludeSpacesCheckBox = document.querySelector("#exclude-spaces-checkbox");
let characterLimitCheckBox = document.querySelector(
  "#character-limit-checkbox"
);
let characterCount = document.querySelector(".character-count");
let wordCount = document.querySelector(".word-count");
let sentenceCount = document.querySelector(".sentence-count");
let readingTime = document.querySelector(".read-time");

function toggleTheme() {
  themeContainer.addEventListener("click", function () {
    backgroundBody.classList.toggle("dark-theme");
    backgroundBody.classList.toggle("light-theme");

    // Storing value of light theme in a variable.
    const isLightTheme = backgroundBody.classList.contains("light-theme");
    console.log(isLightTheme);

    // Change Color of body wrt container theme
    bodyContainer.style.backgroundColor = isLightTheme ? "#fff" : "#1c2022";

    // TextArea Theme
    textArea.style.backgroundColor = isLightTheme ? "#fff" : "#343A40";
    textArea.style.color = isLightTheme ? "black" : "#fff";
    textArea.style.boxShadow = isLightTheme
      ? "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      : "none";

    // LOGO THEME
    darkLogo.classList.toggle("hidden", isLightTheme);
    lightLogo.classList.toggle("hidden", !isLightTheme);
    themeContainer.style.backgroundColor = isLightTheme ? "#fff" : "#1c2022";

    // Website Logo Theme
    darkCharacterLogo.classList.toggle("hidden", isLightTheme);
    lightCharacterLogo.classList.toggle("hidden", !isLightTheme);
  });
}
toggleTheme();

function textAreaFunctionality() {
  textArea.addEventListener("input", function () {
    charCount();
    wordCounter();
    sentenceCounter();
    readingTimeCounter();
  });
}

// For Character Count
function charCount() {
  if (excludeSpacesCheckBox.checked) {
    characterCount.innerText = textArea.value.replace(/\s/g, "").length;
  } else {
    characterCount.innerText = textArea.value.length;
  }
}

function wordCounter() {
  return (wordCount.innerText = textArea.value.trim().split(/\s+/).length);
}

// For Sentence Counter
// Formula for Sentence Counter
// const countSentences = (text) => {
//   return text.split(/[.?!]/g).filter(Boolean).length;
// };

function sentenceCounter() {
  return (sentenceCount.innerText = textArea.value
    .split(/(?<=[.?!])\s+/g)
    .filter(Boolean).length);
}

// Calculate Reading Time Based on words.
function readingTimeCounter() {
  let text = textArea.value;
  if (text === "") {
    readingTime.innerText = "0 min";
    return;
  }
  let words = text.split(/\s+/).length;
  let estimatedTime = Math.ceil(words / 150);
  readingTime.innerText = `${estimatedTime} min`;
}

// Check Box Functionality
excludeSpacesCheckBox.addEventListener("change", charCount);

textAreaFunctionality();
