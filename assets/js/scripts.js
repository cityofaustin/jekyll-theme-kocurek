$(document).ready(function () {


  $('button.hamburger').click(function () {
    event.preventDefault();
    $(this).toggleClass('hamburger--collapse is-active');
    $('.nav-list').toggleClass('expanded');
    if ($('.nav-list').hasClass('expanded')) {
      $('.nav-list').attr('aria-expanded', 'true');
    } else {
      $('.nav-list').attr('aria-expanded', 'false');
    }
    
  });



  $('.clear-search-button').click(function() {
    $('#results-container').html('');
    $('#search-input').val('');
    $('#search-input').focus();
  });
});
