const passports = document.querySelectorAll('.board-passport');

let hasFlippedPassport = false;
let firstPassport;
let secondPassport;

function flipPassport() {
  this.classList.add('flip');

  if (!hasFlippedPassport) {
    // first click
    hasFlippedPassport = true;
    firstPassport = this;
  } else {
    hasFlippedPassport = false;
    secondPassport = this;
    // console.log({ firstPassport, secondPassport });

    // console.log(firstPassport.dataset.city);
    // console.log(secondPassport.dataset.city);

    if (firstPassport.dataset.city === secondPassport.dataset.city) {
      firstPassport.removeEventListener('click', flipPassport);
      secondPassport.removeEventListener('click', flipPassport);
    } else {
      setTimeout(() => {
        firstPassport.classList.remove('flip');
        secondPassport.classList.remove('flip');
      }, 1500);
    }
    console.log('it worked');
  }
}

passports.forEach((passport) =>
  passport.addEventListener('click', flipPassport)
);
