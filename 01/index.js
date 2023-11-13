var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  var navbar = document.getElementById("navbar");

  // Check the scroll direction
  if (prevScrollpos > currentScrollPos) {
    navbar.style.backgroundColor = "#333"; // Scroll up, change to original color
  } else {
    navbar.style.backgroundColor = "#777"; // Scroll down, change to a different color
  }

  prevScrollpos = currentScrollPos;
};
