describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it('allows a user to choose a weapon', function() {
    player.choose('rock');
    expect(player.choice).toBe('rock');
  });
});
