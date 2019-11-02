

$(window).scroll(function () {
  
  if ($(document).scrollTop() > 200) {
    $("nav").addClass('scolling');
  }

  else {
    $("nav").removeClass('scolling');
  }
})
