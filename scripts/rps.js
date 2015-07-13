var Player = function() {
  this.choice = '';
  this.choices = ['rock', 'paper', 'scissors'];
};

Player.prototype.choose = function(choice) {
  if (!(_.contains(this.choices, choice))) {
    throw new Error("choice error");
  }
  this.choice = choice;
};

var Computer = function() {
  this.choices = ['rock', 'paper', 'scissors'];
  this.choice = '';
};

Computer.prototype.choose = function() {
  this.choice = _.sample(this.choices);
};

var Game = function() {
};

Game.prototype.play = function (player, computer) {
  if (player === computer) {
    return "you tie";
  }
  if (player === "rock" && computer ==="paper") {
    return "you lose";
  }
  if (player === "rock" && computer ==="scissors") {
    return "you win";
  }
  if (player === "paper" && computer ==="scissors") {
    return "you lose";
  }
  if (player === "paper" && computer ==="rock") {
    return "you win";
  }
  if (player === "scissors" && computer ==="paper") {
    return "you win";
  }
  if (player === "scissors" && computer ==="rock") {
    return "you lose";
  } else {
    return "error";
  }
};
