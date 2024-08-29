document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("show");
  document.getElementById("menu").classList.toggle("show");

  document.body.classList.toggle("no-scroll");
});

document.querySelectorAll("#menu li a").forEach((item) => {
  item.addEventListener("click", function () {
    document.getElementById("hamburger").classList.remove("show");
    document.getElementById("menu").classList.remove("show");

    document.body.classList.remove("no-scroll");
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
  const swiperMobile = window.innerWidth <= 768; // Ativa o slider no mobile (menor que 768px)

  if (swiperMobile) {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      spaceBetween: 20,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const photos = [
    {
      url: "https://lh3.googleusercontent.com/a-/ALV-UjWrGOWuf0DwECJ6Pfv97rjY1O0gSjhw5vZNu3aGBdznBhIEoAZq=s45-c-rp-mo-br100",
      title: "Marcelo Paiva de Sousa",
      description:
        "Excelente atendimento da Anna, da FAYNET PEDRA DE GUARATIBA, em 05/08/2024! Associados Josélia Lima e Marcelo Paiva",
    },
    {
      url: "https://lh3.googleusercontent.com/a-/ALV-UjUxW4M2OR7fVvxdUMRs-rGudW_gp3GrtgZ_RbVRep6NeEmHw1nPPw=s45-c-rp-mo-br100",
      title: "Ester Roque",
      description:
        "O atendimento é muito bom, gostei porque eles sabem quando acontece algo de errado com a conexão, e ligam pra resolver. Parabéns",
    },
    {
      url: "https://lh3.googleusercontent.com/a-/ALV-UjUqznzmh4kJsMAMIpBRkV1-3PTDd1W7E-h-y5DysyEvQn1lxRPU=s45-c-rp-mo-br100",
      title: "Mosatio op",
      description:
        "Instalei tem uma semana, Internet maravilhosa, atendimento muito bom também acho que quem me atendeu foi um atendente miguel atencioso explica tudo direitinho, os técnicos vieram na minha casa botaram o roteador aonde eu queria furaram tudo direitinho sem problema até agora, indico demais!",
    },
    {
      url: "https://lh3.googleusercontent.com/a-/ALV-UjU7YnB7GKkPd6SzWHoPmPKygoFHDsCkThiLmIOIAaYP0KYVoufNmw=s45-c-rp-mo-br100",
      title: "Raissa Santos",
      description: "Fui super bem atendida, adorei o atendimento ❤️",
    },
    {
      url: "https://lh3.googleusercontent.com/a-/ALV-UjWErZh9qRtEvmUzmKESWYRzfFJBV7vCYOIRdvUmES_0t9Czj_ge=s45-c-rp-mo-br100",
      title: "Cristian Douglas",
      description:
        "Muito bom atendimento, tanto na hora da contratação do serviço, quanto no momento da instalação. Todos muito bem atenciosos. O serviço ainda estou testando, mas aparentemente entrega o que propõe. Estou satisfeito!!!",
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
