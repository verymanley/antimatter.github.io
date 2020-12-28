const parallax = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function()
{
  let offset = window.pageYOffset;
  parallax.forEach(function(prllx, i) {
  prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.2 + "px";
  })
})


window.onscroll = function() {myFunction()};

function myFunction() {
   if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
     document.getElementById("nav_container").className = "slideUp";
   }
}
