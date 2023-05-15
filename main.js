// Smooth scrolling animation
function scrollToElement(element) {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
}

// Add click event listeners to navbar links
document.addEventListener("DOMContentLoaded", function () {
  var navbarLinks = document.querySelectorAll(".topnav a");
  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      var targetElement = document.querySelector(this.getAttribute("href"));
      scrollToElement(targetElement);
    });
  });
});

$(document).ready(function () {
  $(".topnav a").on("click", function () {
    $(".topnav a").removeClass("clicked");
    $("#" + this.id).addClass("clicked");
  });
});
