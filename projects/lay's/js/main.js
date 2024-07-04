$(function () {
  $(".top__slider").slick({
    dots: false,
    prevArrow:
      '<button type="button" class="top__slick-prev"><img src="images/top-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="top__slick-next"><img src="images/top-next.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
  });

  $(".products__slider").slick({
    dots: false,
    infinite: false,
    prevArrow:
      '<button type="button" class="product__slick-prev"><svg viewBox="0 0 83 38" fill="#fce500" xmlns="http://www.w3.org/2000/svg" class="icon_svg_21ndC"><path d="M82.242 20.475a2.5 2.5 0 000-3.535L66.332 1.03a2.5 2.5 0 10-3.536 3.535L76.94 18.707 62.796 32.85a2.5 2.5 0 003.536 3.535l15.91-15.91zm-81.855.732h80.087v-5H.387v5z"></path></svg></button>',
    nextArrow:
      '<button type="button" class="product__slick-next"><svg viewBox="0 0 83 38" fill="#fce500" xmlns="http://www.w3.org/2000/svg" class="arr-btn"><path d="M82.242 20.475a2.5 2.5 0 000-3.535L66.332 1.03a2.5 2.5 0 10-3.536 3.535L76.94 18.707 62.796 32.85a2.5 2.5 0 003.536 3.535l15.91-15.91zm-81.855.732h80.087v-5H.387v5z"></path></svg></button>',
    slidesToShow: 3,
    speed: 800,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

const headerBtn = document.querySelector(".header__btn");

headerBtn.addEventListener("click", () => {
  headerBtn.classList.toggle("active");

  const navList = document.querySelector(".header__nav");
  navList.classList.toggle("open");

  const body = document.body;
  body.classList.toggle("hidden");
});
