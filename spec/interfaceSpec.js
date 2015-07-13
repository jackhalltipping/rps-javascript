describe('Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = ".";
    loadFixtures('rps.html');
  });

  it('has clickable buttons that output the game result', function() {
    $('#rock').click();
    expect('#result').toContainText('you')
  });


});