const passports = document.querySelectorAll('.board-passport');

let hasFlippedPassport = false;
let freezeBoard = false;
let firstPassport;
let secondPassport;

function flipPassport() {
  if (freezeBoard) return;
  if (this === firstPassport) return;
  this.classList.add('flip');

  if (!hasFlippedPassport) {
    hasFlippedPassport = true;
    firstPassport = this;
    return;
  }

  hasFlippedPassport = false;
  secondPassport = this;

  checkMatch();
}

function checkMatch() {
  const aMatch = firstPassport.dataset.city === secondPassport.dataset.city;

  aMatch ? disablePassports() : unflipPassports();
}

function disablePassports() {
  firstPassport.removeEventListener('click', flipPassport);
  secondPassport.removeEventListener('click', flipPassport);

  resetBoard();
}

function unflipPassports() {
  freezeBoard = true;
  setTimeout(() => {
    freezeBoard = true;
    firstPassport.classList.remove('flip');
    secondPassport.classList.remove('flip');

    freezeBoard = false;
  }, 1500);
}

function resetBoard() {
  [hasFlippedPassport, freezeBoard] = [false, false];
  [firstPassport, secondPassport] = [null, null];
}

function shufflePassports() {
  passports.forEach((passport) => {
    const randomNumber = Math.floor(Math.random() * 20);
    passport.style.order = randomNumber;
  });
}

window.onload = function () {
  setTimeout(function () {
    shufflePassports();
  }, 800);
  // console.log(shufflePassports);
};

passports.forEach((passport) =>
  passport.addEventListener('click', flipPassport)
);
