$(document).ready(function() {

  var playerName = '';
  var playerAnswer1 = '';
  var answer1 = 'Metal Gear Solid'

  $('#show-player-name').hide();
  $('.question').hide();

  $('#player-name').focus();

  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#show-player-name').show().addClass('animated fadeIn');
    $('#question1').show().addClass('animated fadeIn');
  };

  $('#name-button').on('click', function(e) {
    e.preventDefault();
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeOut');
    setTimeout(removeWelcomeScreen, 1000);
  });

  $('#question1-btn').on('click', function(e) {
    e.preventDefault();
    playerAnswer1 = $('#input-question1').val().trim();
    console.log(playerAnswer1);
    showPlayerAnswer1();
  });

  function showPlayerAnswer1() {
    $('#show-player-answer1').text(playerAnswer1);
    $('#correct-answer1').text(answer1)
  };

});