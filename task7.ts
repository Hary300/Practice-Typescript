/*
TASK 7 - READONLY + MAPPED TYPES

Why this matters:

This is how real systems ensure:

data cannot be accidentally changed
API responses stay immutable
safer state management

---

1. Create a type called Product:
   - id: number
   - name: string
   - price: number

---

2. Create a variable called product using Readonly<Product>

   Example:
   const product: Readonly<Product>

   Try to assign values normally.

---

3. Create a function called updateProductPrice:

   Requirements:
   - Accept:
     a) product: Readonly<Product>
     b) newPrice: number

   - Return a NEW product object with updated price
   - Do NOT mutate the original product

---

4. Create a custom mapped type called OptionalProduct:

   It should make all properties optional manually:
   (DO NOT use Partial)

   Expected result:
   {
     id?: number;
     name?: string;
     price?: number;
   }

---

5. Create a variable using OptionalProduct and test it with:
   - only name
   - only price
   - all fields

---

6. Log everything using console.log
*/

console.log('Readonly');

type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Readonly<Product> = {
  id: 1,
  name: 'Laptop',
  price: 200,
};

function updateProductPrice(
  currentProduct: Readonly<Product>,
  newPrice: number
): Product {
  const updatedProduct = { ...currentProduct, price: newPrice };
  return updatedProduct;
}

console.log(updateProductPrice(product, 500));

console.log('');
console.log('Mapped Type');

type OptionalProduct = {
  [K in keyof Product]?: Product[K];
};

const optional1: OptionalProduct = {
  name: 'Mouse',
};

const optional2: OptionalProduct = {
  price: 100,
};

const optional3: OptionalProduct = {
  id: 2,
  name: 'Keyboard',
  price: 300,
};

console.log(optional1);
console.log(optional2);
console.log(optional3);
