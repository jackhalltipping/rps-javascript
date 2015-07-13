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
  this.choice = '';
};

Opponent.prototype.choose = function() {
  this.choice = _.sample(this.choices);
};

var Game = function() {
};

Game.prototype.play = function (player, opponent) {
  if (player === opponent) {
    return "tie";
  }
  if (player === "rock" && opponent ==="paper") {
    return "lose";
  }
  if (player === "rock" && opponent ==="scissors") {
    return "win";
  }
  if (player === "paper" && opponent ==="scissors") {
    return "lose";
  }
  if (player === "paper" && opponent ==="rock") {
    return "win";
  }
  if (player === "scissors" && opponent ==="paper") {
    return "win";
  }
  if (player === "scissors" && opponent ==="rock") {
    return "lose";
  } else {
    return "error";
  }
};
