const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__hamburger");
const navLinks = document.querySelectorAll(".header__nav-link");

if (header && hamburger) {
  hamburger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");

    hamburger.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      hamburger.setAttribute("aria-label", "メニューを閉じる");
      document.body.style.overflow = "hidden";
    } else {
      hamburger.setAttribute("aria-label", "メニューを開く");
      document.body.style.overflow = "";
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");

      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "メニューを開く");

      document.body.style.overflow = "";
    });
  });
}
