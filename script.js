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
