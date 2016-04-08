$(document).ready(function() {

  var playerName = '';

  
  $('#name-button').on('click', function(e) {
    e.preventDefault(); 
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
  })

})