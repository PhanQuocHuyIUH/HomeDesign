$(document).ready(function () {
  // Customizing carousel sliding speed and adding auto slide functionality
  $(".carousel").carousel({
    interval: 2000, // Change slide interval time to 3 seconds
    pause: "hover", // Pause on mouse hover
    wrap: true, // Wrap around the images
  });

  $("#xacNhan").click(function () {
    var selectedOption = $("#tinh").children("option:selected").text();
    var iconHTML = ' <i class="fa-solid fa-caret-down"></i>';
    $("#address").html(selectedOption + iconHTML);
    // $("#tinh").change(function(){
    // })
  });
});

var isHeaderFixed = false;
var headerMenu = document.querySelector(".header-menu");
var distanceFromTop = headerMenu.offsetTop;

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition >= distanceFromTop && !isHeaderFixed) {
    headerMenu.style.position = "fixed";
    headerMenu.style.top = "0";
    isHeaderFixed = true;
  } else if (scrollPosition < distanceFromTop && isHeaderFixed) {
    headerMenu.style.position = "static";
    isHeaderFixed = false;
  }
});

var counter = document.getElementById("counter");

function increment() {
  var currentValue = parseInt(counter.textContent);
  var newValue = currentValue + 1;
  counter.textContent = newValue;
}

function decrement() {
  var currentValue = parseInt(counter.textContent);
  if (currentValue > 1) {
    var newValue = currentValue - 1;
    counter.textContent = newValue;
  }
}
