const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  document.body.classList.toggle("hidden");
  const headerNav = document
    .querySelector(".header__nav")
    .classList.toggle("open");
});
