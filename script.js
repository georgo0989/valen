console.log("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", () => {
  // ❤️ Love counter
  let loveCounter = 0;
  const btn = document.getElementById("loveBtn");
  const text = document.getElementById("loveCount");

  if (btn && text) {
    btn.addEventListener("click", () => {
      loveCounter++;
      text.textContent = `Love Counter: ${loveCounter}`;
      text.style.transform = "scale(1.3)";
      setTimeout(() => (text.style.transform = "scale(1)"), 150);
    });
  }

  // ✉️ Envelope opening
  const openBtn = document.getElementById("openLetter");
  const envelope = document.querySelector(".envelope");

  if (openBtn && envelope) {
    openBtn.addEventListener("click", () => {
      envelope.classList.add("open");
    });
  }
});

// 📸 Gallery Carousel
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// 💕 Valentine proposal
const openProposal = document.getElementById("openProposal");
const initialScreen = document.querySelector(".valentine-initial");
const proposalScreen = document.querySelector(".valentine-proposal");

if (openProposal) {
  openProposal.addEventListener("click", () => {
    initialScreen.classList.remove("active");
    proposalScreen.classList.add("active");
  });
}

// cute response
document.querySelectorAll(".yes-btn").forEach(btn => {
  btn.addEventListener("click", () => {
  });
});

function launchConfetti() {
  const colors = ["#ef4444", "#22c55e", "#ec4899", "#a855f7", "#f97316"];

  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    confetti.style.opacity = Math.random();

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

document.querySelectorAll(".yes-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    launchConfetti();
  });
});

const glowBtn = document.querySelector(".Glow");
const loveSection = document.querySelector("#love");

glowBtn.addEventListener("click", () => {
  loveSection.scrollIntoView({
    behavior: "smooth"
  });
});