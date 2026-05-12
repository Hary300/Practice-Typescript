/*
TASK 3 - ARRAYS & BASIC DATA PROCESSING

1. Create a type called Product:
   - id: number
   - name: string
   - price: number
   - inStock: boolean

2. Create an array called products with at least 5 items:
   Example data (you can use or modify):
   - Laptop, price 1200, inStock true
   - Mouse, price 25, inStock true
   - Keyboard, price 75, inStock false
   - Monitor, price 300, inStock true
   - Headphones, price 150, inStock false

3. Create a function called getProductNames:
   - Input: array of Product
   - Output: array of string (product names only)

   Use .map()

4. Create a function called getInStockProducts:
   - Input: array of Product
   - Output: array of Product
   - Only return products where inStock === true

   Use .filter()

5. Create a function called getTotalPrice:
   - Input: array of Product
   - Output: number
   - Return total price of ALL products

   Use .reduce()

6. Print results:
   - product names
   - in-stock products
   - total price
*/

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Array<Product> = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: 'Mouse',
    price: 25,
    inStock: true,
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 75,
    inStock: false,
  },
  {
    id: 4,
    name: 'Monitor',
    price: 300,
    inStock: true,
  },
  {
    id: 5,
    name: 'Headphone',
    price: 150,
    inStock: false,
  },
];

function getProductNames(products: Array<Product>): Array<string> {
  const productNames = products.map((product) => product.name);
  return productNames;
}

function getInStockProducts(products: Array<Product>): Array<Product> {
  const inStockProducts = products.filter((product) => product.inStock);

  return inStockProducts;
}

function getTotalPrice(products: Array<Product>): number {
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );
  return totalPrice;
}
console.log('Array of string (product names only):');
console.log(getProductNames(products));
console.log('Array of product (inStock only):');
console.log(getInStockProducts(products));
console.log('Total price of All products:');
console.log(getTotalPrice(products));
