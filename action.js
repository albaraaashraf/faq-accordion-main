const accordions = document.querySelectorAll(".accordion");
// const accourdion_body = document.querySelectorAll(".accordion")
accordions.forEach((accordion) => {
  const accordion__header_img = accordion.querySelector(
    ".accordion__header img"
  );
  const accordion__body = accordion.querySelector(".accordion__body");

  const scrollHeight = accordion__body.scrollHeight;

  accordion__body.setAttribute("hideDialog", "");
  accordion__body.style.height = 0 + "px";

  accordion__header_img.addEventListener("click", () => {
    if (accordion__body.hasAttribute("hideDialog")) {
      accordion__body.removeAttribute("hideDialog");
      accordion__body.style.height = scrollHeight + 7 + "px";
      accordion__header_img.setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      accordion__body.setAttribute("hideDialog", "");
      accordion__body.style.height = 0 + "px";
      accordion__header_img.setAttribute("src", "assets/images/icon-plus.svg");
    }
  });
});
