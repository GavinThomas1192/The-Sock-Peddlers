'use-strict';
$(document).ready(function() {
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 3000);

  $('.main-nav .tab').on('click', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn('slow');
    console.log('click');

  });
  $('.main-nav .tab:first').click();

});
