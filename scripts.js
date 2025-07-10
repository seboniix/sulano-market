// Smoothe Scroll Reveal Animation (optional)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const reveal = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const winHeight = window.innerHeight;
      if (top < winHeight - 100) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});
