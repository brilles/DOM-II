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
const buttons = document.querySelectorAll(".btn");
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
  document.querySelector("html").style.transitionDuration = "1s";
  document.querySelector("header").style.transitionDuration = "1s";
  logo.textContent = "Fun Bus (darkmode)";
  footer.style.background = "#303030";
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "white";
  }

  footer.querySelector("p").style.color = "white";
  //change color to black in darkmode when scroll
  button.addEventListener("wheel", e => {
    for (i = 0; i < nav.length; i++) {
      buttons[i].style.color = "black";
      buttons[i].style.border = "5px solid white";
    }
  });
});

//add contrast border on img mouseover
img1.addEventListener("dblclick", e => {
  imgs.forEach(e => (e.style.border = "2px solid hotpink"));
});

//pseudo toggle
addEventListener("keyup", e => {
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "white";
  }
});

//pseudo toggle
addEventListener("keydown", e => {
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "black";
  }
});

//copyright as a var
addEventListener("load", e => {
  var today = new Date();
  var year = today.getFullYear();
  footer1.textContent = `Copyright Fun Bus ${year}`;
});

addEventListener("scroll", e => {
  document.querySelector("nav").style.background = "#F06E23";
  document.querySelector("nav").style["border-radius"] = "5px";
});

addEventListener("drag", e => {
  img1.style.border = "2px solid purple";
});

addEventListener("mouseout", e => {
  img1.style["border-radius"] = "10px";
});

addEventListener("copy", e => {
  window.alert("Congrats! You've copied something to the clipboard");
});

addEventListener("cut", e => {
  window.alert("Congrats! You've cut something to the clipboard");
});

addEventListener("paste", e => {
  window.alert("Congrats! You've pasted something to the clipboard");
});

document.querySelector(".intro ").addEventListener("click", e => {
  alert("intro clicked");
});

document.querySelector("p").addEventListener("click", e => {
  alert("propagation stopped if there's not an alert after this alert");
  e.stopPropagation();
});

//prevent a tags from refreshing (stops the original behavior)
nav.forEach(e =>
  e.addEventListener("click", e => {
    e.preventDefault();
  })
);
