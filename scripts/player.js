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
