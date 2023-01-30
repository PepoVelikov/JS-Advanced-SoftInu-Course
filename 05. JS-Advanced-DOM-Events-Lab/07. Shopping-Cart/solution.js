function solve() {
  let products = document.querySelectorAll('.product');
  let addButtons = document.querySelectorAll('.add-product');
  let checkoutButton = document.querySelector('.checkout');
  let textArea = document.querySelector('textarea');

  let totalPrice = 0;
  let list = [];

  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', addProduct);
  }

  checkoutButton.addEventListener('click', checkout);

  function addProduct() {
    let parentDiv = this.parentElement.parentElement;
    let productName = parentDiv.querySelector('.product-title').textContent;
    let productPrice = parentDiv.querySelector('.product-line-price').textContent;

    textArea.value += `Added ${productName} for ${productPrice
    } to the cart.\n`;

    totalPrice += Number(productPrice);
    list.push(productName);
  }

  function checkout() {
    textArea.value += `You bought ${[...new Set(list)].join(', ')} for ${totalPrice.toFixed(2)}.`;
       
    for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].disabled = true;
      }

      checkoutButton.disabled = true;
  }
}