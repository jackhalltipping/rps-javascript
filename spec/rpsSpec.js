describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it('allows a user to choose a weapon', function() {
    player.choose('rock');
    expect(player.choice).toBe('rock');
  });

  it('only allows user to choose rock, paper or scissors', function(){
    expect( function(){ player.choose("banana"); } ).toThrow(new Error("choice error"));
  });
});

describe('Opponent', function() {
  var opponent;

  beforeEach(function() {
    opponent = new Opponent();
  });

  it('choice is randomly selected from rock, paper, scissors', function(){
    var choices = ['rock', 'paper', 'scissors'];
    opponent.choose();
    expect(_.contains(choices, opponent.choice)).toEqual(true);
  });
});

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  beforeEach(function() {
    player = new Player();
  });

  beforeEach(function() {
    opponent = new Opponent();
  });

  it('says if the player wins', function() {
    opponent.choice = "rock";
    player.choose("paper");
    expect(game.play(player.choice, opponent.choice)).toBe("win");
  });

  it('says if the player loses', function() {
    opponent.choice = "scissors";
    player.choose("paper");
    expect(game.play(player.choice, opponent.choice)).toBe("lose");
  });

  it('says if the player ties', function() {
    opponent.choice = "paper";
    player.choose("paper");
    expect(game.play(player.choice, opponent.choice)).toBe("tie");
  });
});
