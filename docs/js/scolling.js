
// when scoll > 200 will add class that set bg to black
$(window).scroll(function () {
  
  if ($(document).scrollTop() > 200) {
    $("nav").addClass('scolling');
  }

  else {
    $("nav").removeClass('scolling');
  }
})
