// plans

// Accordion
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    ".the-best-service-for-you-accordion-button"
  );

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
        button.classList.remove("open");
      } else {
        document
          .querySelectorAll(".the-best-service-for-you-accordion-content")
          .forEach((item) => {
            item.style.display = "none";
          });
        document
          .querySelectorAll(".the-best-service-for-you-accordion-button")
          .forEach((btn) => {
            btn.classList.remove("open");
          });
        content.style.display = "block";
        button.classList.add("open");
      }
    });
  });
});
