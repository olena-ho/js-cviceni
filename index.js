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

//5-vlastni funkce
/*
const ellipseArea = (height, width) => {
  return (height / 2 * width / 2 * Math.PI)
};

document.body.innerHTML += ellipseArea(2, 2);
*/

//5-max2

const max2 = (num1, num2) => {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

document.body.innerHTML += max2(15,5);
