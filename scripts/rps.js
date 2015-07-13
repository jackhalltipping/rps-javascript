var Player = function() {
  this.choice = '';
  this.choices = ['rock', 'paper', 'scissors'];
};

Player.prototype.choose = function(choice) {
  if (_.contains(this.choices, choice)) {
    this.choice = choice;
  } else {
    throw new Error("choice error");
  }
};

var Opponent = function() {
  this.choices = ['rock', 'paper', 'scissors'];
};

Opponent.prototype.choice = function() {
  return _.sample(this.choices)
}