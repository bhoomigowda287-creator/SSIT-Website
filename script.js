const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const projectDetails = {
  rover: {
    title: "Obstacle Avoiding Robot",
    text: "Objective: build a small mobile robot that detects objects before it reaches them. Typical components: Arduino-compatible board, distance sensor, motor driver, DC motors, wheels, battery holder and chassis. Start by testing the sensor separately, then connect the motor control."
  },
  arm: {
    title: "Mini Robotic Arm",
    text: "Objective: demonstrate controlled movement using joints. Typical components: lightweight frame, servo motors, controller board and a safe low-voltage power supply. Begin with one joint and add more only after it moves reliably."
  },
  waste: {
    title: "Smart Waste Classifier",
    text: "Objective: explore how image classification can distinguish waste categories. Start with a small, labelled image dataset and a simple model or browser-based demo. Treat predictions as a prototype: lighting, image quality and training data can affect accuracy."
  }
};

const detailPanel = document.querySelector("#project-detail");
const detailTitle = document.querySelector("#detail-title");
const detailText = document.querySelector("#detail-text");

document.querySelectorAll(".details-button").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projectDetails[button.dataset.project];
    detailTitle.textContent = project.title;
    detailText.textContent = project.text;
    detailPanel.classList.add("visible");
    detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

document.querySelector(".detail-close").addEventListener("click", () => {
  detailPanel.classList.remove("visible");
});

document.querySelector("#year").textContent = new Date().getFullYear();
