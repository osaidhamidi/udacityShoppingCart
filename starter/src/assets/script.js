// An array that contains product objects to be displayed.
const products = [{
  "name": "Carton of cherries",
  "price": 4,
  "quantity": 0,
  "productId": 1,
  "image": "images/cherry.jpg"
},

{
  "name": "Bag of Oranges",
  "price": 10,
  "quantity": 0,
  "productId": 2,
  "image": "images/orange.jpg"
},

{
  "name": "Carton of strawberries",
  "price": 5,
  "quantity": 0,
  "productId": 3,
  "image": "images/strawberry.jpg"
}];



// Declare an empty array named cart to hold the items in the cart 
const cart = []


// Helper function to get product by id
function getProduct(productID) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productID) {
      return products[i]
    }
  }

  return -9999
}

// Helper function look up an item in the cart by ID
function findInCart(productID) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productID) {
      return true;
    }
  }

  return false;
}

// Function to add an item to the cart
function addProductToCart(productID) {

  let product = getProduct(productID);
  if (product != -9999 && !findInCart(productID)) {
    product.quantity += 1;
    cart.push(product);
  }else{
    increaseQuantity(productID)
  }
}


// Function to increase quantity of a product in the cart
function increaseQuantity(productID) {
  let product = getProduct(productID)
  if (product != -9999) {
    product.quantity++;
  }
}


// Function to decrease quantity of a product in the cart
function decreaseQuantity(productID) {
  let product = getProduct(productID)
  if (product != -9999) {
    product.quantity--;
  }
  if (product.quantity === 0) {
    removeProductFromCart(productID)
  }
}


// Function to remove an item from the cart
function removeProductFromCart(productID) {
  let product = getProduct(productID)
  if (product != -9999) {
    product.quantity = 0;
    cart.splice(cart.indexOf(product), 1);
  }
}


// Function to find the total amount that needs to be paid
function cartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}


// Function to empty the products from the cart 
function emptyCart() {
  cart.length = 0;
}


// Variable to hold remaining balanace
let totalPaid = 0;


// Function to add money to the balance
function pay(amount) {

  totalPaid += amount;
  let balance = totalPaid - cartTotal();
  if (balance >= 0) {
    totalPaid = 0;
  }

  return balance;
}




module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,

}
