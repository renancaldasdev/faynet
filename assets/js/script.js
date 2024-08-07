import "../css/styles.css";
import "../images/banner_hero/banner1.jpg";
import "../images/banner_hero/banner2.jpg";
import "../images/banner_hero/faynet_logo.png";
import "../images/icons/arrow_rigth.svg";
import "../images/icons/atendimento-tecnico.svg";
import "../images/icons/check.svg";
import "../images/icons/download.svg";
import "../images/icons/email.svg";
import "../images/icons/facebook.svg";
import "../images/icons/financeiro-tecnico.svg";
import "../images/icons/instagram.svg";
import "../images/icons/phone.svg";
import "../images/icons/qualidade.svg";
import "../images/icons/reparo-tecnico.svg";
import "../images/icons/upload-tecnico.svg";
import "../images/icons/upload.svg";
import "../images/icons/user.svg";
import "../images/icons/velocidade-tecnico.svg";
import "../images/icons/whatsapp.svg";
import "../images/icons/wifi.svg";
import "../images/images_all/callcenter.webp";
import "../images/images_all/img.jpg";
import "../images/images_all/internet_your_family.webp";

document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("show");
  document.getElementById("menu").classList.toggle("show");
});

document.querySelectorAll("#menu li a").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("hamburger").classList.remove("show");
    document.getElementById("menu").classList.remove("show");
  });
});

function setOpeningHours(isOnSchedule) {
  const statusElement = document.querySelector(
    ".header-top-opening-hours-status"
  );

  if (isOnSchedule) {
    statusElement.textContent = "On-line";
    statusElement.classList.remove("offline");
  } else {
    statusElement.textContent = "Off-line";
    statusElement.classList.add("offline");
  }
}

function checkOpeningHours() {
  const timeNow = new Date();
  const dayOfTheWeek = timeNow.getDay();
  const currentTime = timeNow.getHours();

  const isOnSchedule =
    dayOfTheWeek >= 1 &&
    dayOfTheWeek <= 6 &&
    currentTime >= 8 &&
    currentTime < 21;

  setOpeningHours(isOnSchedule);
}

checkOpeningHours();
const checkInterval = setInterval(checkOpeningHours, 60);

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
  const photos = [
    {
      url: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Foto da Montanha",
      description: "Lorem ipsum dolor sit amet consectetur,",
    },
    {
      url: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Por do Sol na Praia",
      description:
        "Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cidade à Noite",
      description:
        "Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
    },
  ];

  const swiperWrapper = document.querySelector(".mySwiper .swiper-wrapper");
  swiperWrapper.innerHTML = "";

  photos.forEach((photo) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
        <img src="${photo.url}" alt="${photo.title}">
               <p class="testimonials-title">${photo.title}</p>
               <p class="testimonials-description">${photo.description}</p>
        `;
    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 4000,
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
});
