const data = {
  "USD": {
    "INR": 74.8,
    "EUR": 0.916944,
    "GBP": 0.7898,
    "JPY": 114.9
  },
  "INR": {
    "USD": 0.0133,
    "EUR": 0.0121,
    "GBP": 0.0107,
    "JPY": 1.5
  },
  "EUR": {
    "USD": 1.0914,
    "INR": 81.6,
    "GBP": 0.8658,
    "JPY": 125.5
  }
}
const amountTag = document.querySelector('#amount');
const fromTag = document.querySelector('#from');
const toTag = document.querySelector('#to');
const resultTag = document.querySelector('#result');

const convert = () => {
  if(amountTag.value ==''){
    resultTag.innerHTML = '';
    return;
  };
  const num = parseFloat(amountTag.value);
  const from = fromTag.value;
  const to = toTag.value;
  if (isNaN(num)) {
    resultTag.innerHTML = 'Please enter a valid number';
  } else {
    resultTag.innerHTML = num * data[from][to];
  }
}

amountTag.addEventListener('input', convert);
fromTag.addEventListener('change', convert);
toTag.addEventListener('change', convert);









