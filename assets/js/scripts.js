$(document).ready(function () {
  $('.clear-search-button').click(function() {
    $('#results-container').html('');
    $('#search-input').val('');
    $('#search-input').focus();
  });
});
