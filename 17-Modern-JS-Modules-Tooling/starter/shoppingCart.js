// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('Finsih fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// Default exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s added to cart`);
}
