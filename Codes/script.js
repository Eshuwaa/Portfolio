
const texts = [
  "DEVELOPER",
  "PROGRAMMER",
  "FREELANCER",
  "WEB DEVELOPER",
  "YOUTUBER",
  "DESIGNER"
  // Web Developer | Graphic Designer | Freelancer
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
// Dark Mode Toggle Functionality
  const toggleBtn = document.querySelector(".toggle-btn");

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "Light Mode";
    } else {
      toggleBtn.textContent = "Dark Mode";
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "Light Mode";
    } else {
      toggleBtn.textContent = "Dark Mode";
    }
  });
