const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const sectionSelect = document.getElementById("sectionSelect");

const pdfBySection = {
  nursery: {
    curriculum: "assets/pdfs/sample-curriculum.pdf",
    homework: "assets/pdfs/sample-homework.pdf",
    exam: "assets/pdfs/sample-exam-dates.pdf",
    syllabus: "assets/pdfs/sample-syllabus.pdf"
  },
  primary: {
    curriculum: "assets/pdfs/sample-curriculum.pdf",
    homework: "assets/pdfs/sample-homework.pdf",
    exam: "assets/pdfs/sample-exam-dates.pdf",
    syllabus: "assets/pdfs/sample-syllabus.pdf"
  },
  middle: {
    curriculum: "assets/pdfs/sample-curriculum.pdf",
    homework: "assets/pdfs/sample-homework.pdf",
    exam: "assets/pdfs/sample-exam-dates.pdf",
    syllabus: "assets/pdfs/sample-syllabus.pdf"
  },
  secondary: {
    curriculum: "assets/pdfs/sample-curriculum.pdf",
    homework: "assets/pdfs/sample-homework.pdf",
    exam: "assets/pdfs/sample-exam-dates.pdf",
    syllabus: "assets/pdfs/sample-syllabus.pdf"
  }
};

function applyPdfLinks(sectionKey) {
  const config = pdfBySection[sectionKey];
  if (!config) return;

  const curriculumLink = document.getElementById("curriculumLink");
  const homeworkLink = document.getElementById("homeworkLink");
  const examLink = document.getElementById("examLink");
  const syllabusLink = document.getElementById("syllabusLink");

  if (curriculumLink) curriculumLink.href = config.curriculum;
  if (homeworkLink) homeworkLink.href = config.homework;
  if (examLink) examLink.href = config.exam;
  if (syllabusLink) syllabusLink.href = config.syllabus;
}

if (sectionSelect) {
  applyPdfLinks(sectionSelect.value);
  sectionSelect.addEventListener("change", (event) => {
    applyPdfLinks(event.target.value);
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".photo-card");

if (filterButtons.length && galleryItems.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      button.classList.add("is-active");

      galleryItems.forEach((item) => {
        const category = item.dataset.category;
        const shouldShow = selected === "all" || category === selected;
        item.style.display = shouldShow ? "block" : "none";
      });
    });
  });
}

const heroBanner = document.getElementById("heroBanner");
const heroSlides = document.querySelectorAll(".hero-slide");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
const heroDotsWrap = document.getElementById("heroDots");

if (heroBanner && heroSlides.length > 1) {
  let currentSlide = 0;
  let isPaused = false;
  let autoTimer = null;
  const dots = [];

  function goToSlide(index) {
    heroSlides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoRotate() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (!isPaused) nextSlide();
    }, 3500);
  }

  heroSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `hero-dot${index === 0 ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    heroDotsWrap.appendChild(dot);
    dots.push(dot);
  });

  if (heroNext) heroNext.addEventListener("click", nextSlide);
  if (heroPrev) heroPrev.addEventListener("click", prevSlide);

  heroBanner.addEventListener("mouseenter", () => { isPaused = true; });
  heroBanner.addEventListener("mouseleave", () => { isPaused = false; });
  heroBanner.addEventListener("focusin", () => { isPaused = true; });
  heroBanner.addEventListener("focusout", () => { isPaused = false; });

  startAutoRotate();
}
