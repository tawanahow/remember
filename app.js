const passports = document.querySelectorAll('.board-passport');

let hasFlippedPassport = false;
let freezeBoard = false;
let firstPassport;
let secondPassport;

function flipPassport() {
  if (freezeBoard) return;
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

passports.forEach((passport) =>
  passport.addEventListener('click', flipPassport)
);
