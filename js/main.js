let nav_links = document.querySelector(".nav");

window.onscroll = function () {
  if (window.scrollY >= 100) {
    nav_links.classList.add("active");
  } else {
    nav_links.classList.remove("active");
  }
};

let btn_menu = document.querySelector(".icon-menu");
let links_header = document.querySelector(".nav .links");
btn_menu.addEventListener("click", function () {
  btn_menu.classList.toggle("active");
  links_header.classList.toggle("active");
});

// categorys
let categorys = document.querySelectorAll(".categorys .cat");
categorys.forEach(function (e) {
  e.addEventListener("click", function () {
    categorys.forEach((cat) => {
      cat.classList.remove("active");
    });
    e.classList.add("active");
    ChangePortfolioImg(e);
  });
});

// Change portfolio images
let port_img = document.querySelectorAll(".portfolio .images .box");

port_img.forEach(function (img) {
  img.classList.add("active");
});
function ChangePortfolioImg(btn_cat) {
  port_img.forEach(function (e) {
    e.classList.remove("active");
    e.classList.remove("all");
  });
  document.querySelectorAll(`.${btn_cat.dataset.cat}`).forEach((ele) => {
    ele.classList.add("active");
  });
}

// testimonials

let cards = document.querySelector(".testimonials .cards");
let points = document.querySelectorAll(".testimonials .points span");

points.forEach(function (e) {
  e.addEventListener("click", function () {
    points.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    cards.style.left = e.dataset.index;
  });
});
