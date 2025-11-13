const texts = ["Web Designer ", "Frontend Developer ", "Frontend Tutor "];

const el = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100; // typing speed in ms

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    el.textContent = currentText.substring(0, charIndex--);
    speed = 60; // faster deleting
  } else {
    el.textContent = currentText.substring(0, charIndex++);
    speed = 120; // slower typing
  }

  if (!isDeleting && charIndex === currentText.length) {
    // pause at end
    isDeleting = true;
    speed = 1000; // wait before deleting
  } else if (isDeleting && charIndex === 0) {
    // move to next text
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 400; // pause before typing next
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

//   Tab
let buttons = document.querySelectorAll("#btn");
let tabs = document.querySelectorAll(".box");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const tabId = button.getAttribute("data-tab");
    tabs.forEach((tb) => {
      tb.classList.remove("active");
      if (tabId === "All") {
        tb.classList.add("active");
      } else if (tabId === tb.id) {
        tb.classList.add("active");
      }
    });
  });
});

const namer = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// e.preventDefault();
window.onload = () => {
  namer.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
};

// Intersection
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".inside");
const menuLinks2 = document.querySelectorAll(".inside2");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("box");
        // entry.target.classList.add("active")
        menuLinks.forEach((menuLink) => menuLink.classList.remove("active"));
        menuLinks2.forEach((menuLink2) => menuLink2.classList.remove("active"));

        const activeLink = document.querySelector(
          `.inside[href="#${entry.target.id}"]`
        );
        const activeLink2 = document.querySelector(
          `.inside2[href="#${entry.target.id}"]`
        );

        if (activeLink) activeLink.classList.add("active");
        if (activeLink2) activeLink2.classList.add("active");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((section) => observer.observe(section));
