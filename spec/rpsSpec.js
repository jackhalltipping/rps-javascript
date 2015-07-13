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
    expect(_.contains(choices, opponent.choice())).toEqual(true);
  });
});