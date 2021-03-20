
function myFunction(a) {
    document.getElementById(a).style.display = "block";
    document.getElementById(a).style.transition = "all 0.4s";


    if(a == "development"){
        document.getElementById("design").style.display = "none";
        document.getElementById("desBtn").style.color = "grey";
        document.getElementById("desBtn").style.fontWeight = "normal";
        document.getElementById("desBtn").style.borderBottom = "none";
        document.getElementById("devBtn").style.color = "#2c3f52";
        document.getElementById("devBtn").style.fontWeight = "bold";
        document.getElementById("devBtn").style.borderBottom = "3px solid #2c3f52";
        document.getElementById("devBtn").style.transition = "all 0.4s";
    }else{
        document.getElementById("development").style.display = "none";
        document.getElementById("devBtn").style.color = "grey";
        document.getElementById("devBtn").style.fontWeight = "normal";
        document.getElementById("devBtn").style.borderBottom = "none";
        document.getElementById("desBtn").style.color = "#2c3f52";
        document.getElementById("desBtn").style.fontWeight = "bold";
        document.getElementById("desBtn").style.borderBottom = "3px solid #2c3f52";
        document.getElementById("desBtn").style.transition = "all 0.4s";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$(function() {
    AOS.init();
  });