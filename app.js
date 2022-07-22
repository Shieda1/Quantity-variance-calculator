// https://calculator.swiftutors.com/quantity-variance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const quantityVarianceRadio = document.getElementById('quantityVarianceRadio');
const standardPriceRadio = document.getElementById('standardPriceRadio');
const standardQuantityRadio = document.getElementById('standardQuantityRadio');
const actualQuantityRadio = document.getElementById('actualQuantityRadio');

let quantityVariance;
let standardPrice = v1;
let standardQuantity = v2;
let actualQuantity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

quantityVarianceRadio.addEventListener('click', function() {
  variable1.textContent = 'Standard Price ($)';
  variable2.textContent = 'Standard Quantity';
  variable3.textContent = 'Actual Quantity';
  standardPrice = v1;
  standardQuantity = v2;
  actualQuantity = v3;
});

standardPriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Quantity Variance ($)';
  variable2.textContent = 'Standard Quantity';
  variable3.textContent = 'Actual Quantity';
  quantityVariance = v1;
  standardQuantity = v2;
  actualQuantity = v3;
});

standardQuantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Quantity Variance ($)';
  variable2.textContent = 'Standard Price ($)';
  variable3.textContent = 'Actual Quantity';
  quantityVariance = v1;
  standardPrice = v2;
  actualQuantity = v3;
});

actualQuantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Quantity Variance ($)';
  variable2.textContent = 'Standard Price ($)';
  variable3.textContent = 'Standard Quantity';
  quantityVariance = v1;
  standardPrice = v2;
  standardQuantity = v3;
});


btn.addEventListener('click', function() {
  
  if(quantityVarianceRadio.checked)
    result.textContent = `Quantity Variance = $${computeQuantityVariance().toFixed(2)}`;

  else if(standardPriceRadio.checked)
    result.textContent = `Standard Price = $${computeStandardPrice().toFixed(2)}`;

  else if(standardQuantityRadio.checked)
    result.textContent = `Standard Quantity = ${computeStandardQuantity().toFixed(2)}`;

  else if(actualQuantityRadio.checked)
    result.textContent = `Actual Quantity = ${computeActualQuantity().toFixed(2)}`;
})

// calculation

function computeQuantityVariance() {
  return Number(standardPrice.value) * (Number(standardQuantity.value) - Number(actualQuantity.value));
}

function computeStandardPrice() {
  return Number(quantityVariance.value) / (Number(standardQuantity.value) - Number(actualQuantity.value));
}

function computeStandardQuantity() {
  return (Number(quantityVariance.value) / Number(standardPrice.value)) + Number(actualQuantity.value);
}

function computeActualQuantity() {
  return Number(standardQuantity.value) - (Number(quantityVariance.value) / Number(standardPrice.value));
}