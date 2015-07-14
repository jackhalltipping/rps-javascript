var RockPaperScissors = function() {
  this.choices = ['Rock', 'Paper', 'Scissors'];
  this.choice = ''
  this.playerWinsCount   = 0
  this.computerWinsCount = 0
};

RockPaperScissors.prototype.computerChoice = function () {
  var random = this.choices[Math.floor(Math.random() * this.choices.length)];
  return random;
};

RockPaperScissors.prototype.playerSelection = function(choice) {
  if (!(_.contains(this.choices, choice))) {
    throw new Error('Please select Rock, Paper or Scissors')
  }
  this.choice = choice;
};

RockPaperScissors.prototype.outcome = function () {
  if (this.choice === this.computerChoice()) {
    return 'Draw!';
  }

  if (this.choice === 'Rock' && this.computerChoice() === 'Scissors') {
    return this._win();
  }

  if (this.choice === 'Rock' && this.computerChoice() === 'Paper') {
    return this._computerWin();
  }

  if (this.choice === 'Scissors' && this.computerChoice() === 'Paper') {
    return this._win();
  }

  if (this.choice === 'Scissors' && this.computerChoice() === 'Rock') {
    return this._computerWin();
  }

  if (this.choice === 'Paper' && this.computerChoice() === 'Rock') {
    return this._win();
  }

  if (this.choice === 'Paper' && this.computerChoice() === 'Scissors') {
    return this._computerWin();
  }
};

RockPaperScissors.prototype._win = function () {
  this.playerWinsCount ++
  return 'You win!'
};

RockPaperScissors.prototype._computerWin = function () {
  this.computerWinsCount ++
  return 'You lose!'
};
