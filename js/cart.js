/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.


const trHeadElement = document.querySelector('thead tr');
const th4Element = document.createElement('th');
trHeadElement.appendChild(th4Element);
th4Element.textContent = 'Images';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbodyEl.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body


  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR



  //const tabelElement = document.getElementById("cart");


  let thImage = document.createElement('th');
  trHeadElement.appendChild(thImage);
  thImage.textContent = 'Image';

  let image;

  for (let i = 0; i < cart.items.length; i++) {

    let tr1 = document.createElement('tr');
    //tabelElement.appendChild(tr1);

    let deletedTd = document.createElement('td');
    tr1.appendChild(deletedTd);
    deletedTd.textContent = 'X';

    let tdQuantity = document.createElement('td');
    tr1.appendChild(tdQuantity);
    tdQuantity.textContent = cart.items[i].quantity;

    let tdProduct = document.createElement('td');
    tr1.appendChild(tdProduct);
    tdProduct.textContent = cart.items[i].product;

    let tdImage = document.createElement('td');
    tr1.appendChild(tdImage);


    let imageEl = document.createElement('img');
    tdImage.appendChild(imageEl);



    image = cart.items[i].product;

    for (let y = 0; y < Product.allProducts.length; y++) {

      if (image === Product.allProducts[y].name) {
        imageEl.src = Product.allProducts[y].filePath;
        imageEl.style.width = '40px';

      }
    }

    tbodyEl[0].appendChild(tr1);
  }

  table.appendChild(tbodyEl[0]);


}



function removeItemFromCart(event) {


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // let i = event.target.parentNode.rowIndex;
  // document.getElementById('cart').deleteRow(i);

  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  
}

// This will initialize the page and draw the cart on screen
renderCart();

