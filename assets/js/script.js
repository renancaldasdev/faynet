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

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .then((photos) => {
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      swiperWrapper.innerHTML = "";

      photos.forEach((photo) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
        <img src="${photo.url}" alt="${photo.title}">
               <p>${photo.title}</p>
        `;
        swiperWrapper.appendChild(slide);
      });

      const swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        coverFlow: {
          depth: 100,
        },
      });
    })
    .catch((error) => console.error("Erro ao carregar fotos:", error));
});
