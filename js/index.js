// Your code goes here
/*
 mouseover
 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick
 */

const logo = document.querySelector(".logo-heading");
const nav = document.querySelectorAll("a");
const img1 = document.querySelector("img");
const button = document.querySelector(".btn");
const footer1 = document.querySelector(".footer p");
const footer = document.querySelector(".footer");
const contact = document.querySelectorAll("a");
const h2s = document.querySelectorAll("h2");
const h3s = document.querySelectorAll("h3");
const html = document.querySelector("html");

const imgs = document.querySelectorAll("img");
const footerDark = document.querySelectorAll("footer p");

//change to DARKMODE on click of logo
logo.addEventListener("click", e => {
  document.querySelector("html").style.background = "#303030";
  document.querySelector("header").style.background = "#303030";
  document.querySelector("html").style.color = "white";
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "white";
  }
  logo.textContent = "Fun Bus (darkmode)";
  footer.style.background = "#303030";
  footer.querySelector("p").style.color = "white";
});

//add contrast border on img mouseover
img1.addEventListener("dblclick", e => {
  imgs.forEach(e => (e.style.border = "5px solid hotpink"));
});

//change copyright to 2019 on scroll
footer1.addEventListener("wheel", e => {
  footer1.textContent = "Copyright Fun Bus 2019";
});

//pseudo toggle
addEventListener("keyup", e => {
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "green";
  }
});

//pseudo toggle
addEventListener("keydown", e => {
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "purple";
  }
});

//copyright as a var
addEventListener("load", e => {
  var today = new Date();
  var year = today.getFullYear();
  footer1.textContent = `Copyright Fun Bus ${year}`;
});
