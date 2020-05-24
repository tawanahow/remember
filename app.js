const passports = document.querySelectorAll('.board-passport');
function flipPassport() {
  this.classList.toggle('flip');
}

passports.forEach((passport) =>
  passport.addEventListener('click', flipPassport)
);
