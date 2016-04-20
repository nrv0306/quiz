$(document).ready(function() {

  var playerName = '';
  var playerAnswer1 = '';
  var playerAnswer2 = '';
  var answer1 = 'metal gear solid'
  var answer2 = '1994'
  var correctCounter = 0;
  var triesLeft = 3

  
  $('#dashboard').hide();
  $('.question').hide();
  $('.correct-msg').hide();
  $('.incorrect-msg').hide();
  $('#lose-game-msg').hide();

  
  $('#player-name').focus();

   
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#dashboard').show().addClass('animated fadeIn');
    $('#question1').show().addClass('animated fadeIn').focus();
  };


  $('#name-button').on('click', function(e) {
    e.preventDefault(); 
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeOut');
    $('#tries-left').text(triesLeft);
    setTimeout(removeWelcomeScreen, 1000);
  });

  $('#question1-btn').on('click', function(e) {
    e.preventDefault(); 
    playerAnswer1 = $('#input-question1').val().trim().toLowerCase();
    console.log('The players answer for question 1 is ' + playerAnswer1);
    answerCheck1();
  });

  function showPlayerAnswer1() {
    $('#show-player-answer1').text(playerAnswer1);
    $('#correct-answer1').text(answer1)
  };

  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg1').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion1() {
    $('#question1').addClass('animated fadeOut');
    setTimeout($('#question1').detach(), 2500);
    $('#question2').show().addClass('animated fadeIn');
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question').addClass('animated fadeOut');
      $('.question').detach();
      $('#lose-game-msg').show().addClass('animated fadeIn')
    };
  };

  function answerCheck1() {
    if(playerAnswer1 === answer1) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion1, 2500);
    }
    else {
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg1').show().addClass('animated fadeIn');
      triesLeftCountdown();
      setTimeout(fadeOutAnswerCheckMsg, 2500);
    }
  };

  $('#question2-btn').on('click', function(e) {
    e.preventDefault(); 
    playerAnswer2 = $('#input-question2').val().trim().toLowerCase(); 
    console.log('The players answer for question 2 is ' + playerAnswer2);
    answerCheck2();
  });

  function showPlayerAnswer2() {
    $('#show-player-answer2').text(playerAnswer2);
    $('#correct-answer2').text(answer2)
  };

  function fadeOutAnswerCheckMsg() {
    $('#incorrect-msg2').removeClass('fadeIn').addClass('fadeOut');
  };

  function fadeOutQuestion2() {
    $('#question2').addClass('animated fadeOut');
    setTimeout($('#question2').detach(), 2500);
    $('#question3').show().addClass('animated fadeIn');
  };

  function answerCheck2() {
    if(playerAnswer2 === answer2) {
      console.log("Player's answer is correct!");
      $('#correct-msg2').show().addClass('animated fadeIn');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion2, 2500);
    }
    else {
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg2').show().addClass('animated fadeIn');
      setTimeout(fadeOutAnswerCheckMsg, 2500);
    }
  };

});