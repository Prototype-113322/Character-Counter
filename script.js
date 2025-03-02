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

// function toggleTheme() {
//   themeContainer.style.border = "2px solid red";
//   themeContainer.addEventListener("click", function () {
//     backgroundBody.classList.toggle("dark-theme");
//     backgroundBody.classList.toggle("light-theme");
//     console.log(backgroundBody);
//     if (backgroundBody.classList.contains("light-theme")) {
//       // Text Area Color
//       textArea.style.backgroundColor = "#f1f3f5";
//       textArea.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";

//       // Changing Theme Logo
//       darkLogo.classList.add("hidden");
//       lightLogo.classList.remove("hidden");
//       themeContainer.style.backgroundColor = "white";

//       // CHARACTER LOGO CHANGE
//       darkCharacterLogo.classList.add("hidden");
//       lightCharacterLogo.classList.remove("hidden");
//     }
//   });
// }

// function toggleTheme() {
//   themeContainer.addEventListener("click", function () {
//     if (backgroundBody) {
//       backgroundBody.classList.toggle("dark-theme");
//       backgroundBody.classList.toggle("light-theme");
//     }

//     if (mainHeading) {
//       mainHeading.classList.toggle("dark-theme-heading");
//       mainHeading.classList.toggle("light-theme-heading");
//     }
//   });
// }

// THIS METHOD IS ALSO CORRECT
// function toggleTheme() {
//   themeContainer.addEventListener("click", function () {
//     console.log("Hi");
//     if (mainHeading.classList.contains("dark-theme-heading")) {
//       mainHeading.classList.remove("dark-theme-heading");
//       mainHeading.classList.add("light-theme-heading");
//       console.log("1");
//     } else if (mainHeading.classList.contains("light-theme-heading")) {
//       mainHeading.classList.add("dark-theme-heading");
//       mainHeading.classList.remove("light-theme-heading");
//       console.log("2");
//     }
//   });
// }
// toggleTheme();

// function lightTheme() {
//   themeContainer.addEventListener("click", function () {
//     console.log("Am I Working");
//     // BODY COLOR
//     backgroundBody.classList.add("light-theme");
//     backgroundBody.classList.remove("container-theme");
//     // HEADING COLOR
//     mainHeading.style.color = "black";
//     // CHECKBOX COLOR
//     for (let i = 0; i <= checkboxLabel.length - 1; i++) {
//       checkboxLabel[i].style.color = "Black";
//     }
//     // Text Area Color
//     textArea.style.backgroundColor = "#f1f3f5";
//     textArea.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";

//     // THEME LOGO CHANGE
//     darkLogo.classList.add("hidden");
//     lightLogo.classList.remove("hidden");
//     themeContainer.style.backgroundColor = "white";

//     // CHARACTER LOGO CHANGE
//     darkCharacterLogo.classList.add("hidden");
//     lightCharacterLogo.classList.remove("hidden");
//   });
// }

// lightTheme();
// themeConverter();
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
