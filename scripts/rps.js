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
    return "tie";
  }
  if (player === "rock" && computer ==="paper") {
    return "lose";
  }
  if (player === "rock" && computer ==="scissors") {
    return "win";
  }
  if (player === "paper" && computer ==="scissors") {
    return "lose";
  }
  if (player === "paper" && computer ==="rock") {
    return "win";
  }
  if (player === "scissors" && computer ==="paper") {
    return "win";
  }
  if (player === "scissors" && computer ==="rock") {
    return "lose";
  } else {
    return "error";
  }
};
