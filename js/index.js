// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let quantity = Number(product.querySelector('.quantity input').value);
  let price = Number(product.querySelector('.price span').innerText);

  let subtotal = quantity * price;
  product.querySelector('.subtotal span').innerText = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  
  // end of test

  // ITERATION 2
  let allProduct = document.querySelectorAll('.product');
  allProduct.forEach((product) => {
    updateSubtotal(product)
  });

  // ITERATION 3
   let total = 0
  let subtotal = (document.querySelectorAll('.subtotal span'))
  subtotal.forEach((subtotal) => {
    total += Number(subtotal.innerText);
    
  })
  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
