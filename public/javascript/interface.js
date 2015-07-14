var game = new RockPaperScissors();

$("#rock").click(function(ev) {
  // ev.stopPropagation();
  game.computerChoice();
  game.playerSelection('Rock');
  $('#result').html(game.outcome());
  console.log("yep]elfm");
  ev.preventDefault();
});

$('#paper').click(function() {
  event.preventDefault();
  game.computerChoice();
  game.playerSelection('Paper');
  $("#result").html(game.outcome());
});

$('#scissors').click(function() {
  event.preventDefault();
  game.computerChoice();
  game.playerSelection('Scissors');
  $('#result').html(game.outcome());
});
