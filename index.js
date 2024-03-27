// document.body.innerHTML = Math.random().toFixed(1);

//function getRandomNumber()
/*
const min = Number(prompt('type which number you want as the min'));
const max = Number(prompt('type which number you want as the max'));
function getRandomNumber(min, max) {
  document.body.innerHTML += (Math.random() * (max - min) + min).toFixed(0);
}

getRandomNumber(min, max);*/

//wageInCzk
/*
const wageInEur = 20;
const exchangeRate = 24.55;
const wageInCzk = Math.round(wageInEur * exchangeRate);

document.body.innerHTML += 
`<h1>
  Mzda v korunách: ${wageInCzk}
<\h1>
`*/

//5-1
/*
const msgElement = document.querySelector('.msg');
const userEmail = prompt('what is your email?');


if (validator.isEmail(userEmail)) {
  msgElement.textContent = 'E-mail v pořádku';
  msgElement.classList.add('msg--valid');
} else {
  msgElement.textContent = 'Neplatný e-mail';
  msgElement.classList.add('msg--invalid');
}


//validator.isCreditCard('4125010001000208');*/

