jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 10) {
     $("#menu").addClass("menu-diferente");
    } else {
     $("#menu").removeClass("menu-diferente");
    }
  });
  //menu
  $("#clica").click(function(){
    $("#lista").toggle();
  });
  let $doc = $('html, body');
  $('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });    
});
