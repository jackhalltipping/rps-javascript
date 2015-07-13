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

describe('computer', function() {
  var computer;

  beforeEach(function() {
    computer = new Computer();
  });

  it('choice is randomly selected from rock, paper, scissors', function(){
    var choices = ['rock', 'paper', 'scissors'];
    computer.choose();
    expect(_.contains(choices, computer.choice)).toEqual(true);
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
    computer = new Computer();
  });

  it('says if the player wins', function() {
    computer.choice = "rock";
    player.choose("paper");
    expect(game.play(player.choice, computer.choice)).toBe("you win");
  });

  it('says if the player loses', function() {
    computer.choice = "scissors";
    player.choose("paper");
    expect(game.play(player.choice, computer.choice)).toBe("you lose");
  });

  it('says if the player ties', function() {
    computer.choice = "paper";
    player.choose("paper");
    expect(game.play(player.choice, computer.choice)).toBe("you tie");
  });
});
