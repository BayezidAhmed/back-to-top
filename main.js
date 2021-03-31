// back to top btn script start
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var topBtn = document.getElementById("b-to-t");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top script end
