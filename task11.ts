/*
TASK 11 - GENERIC API RESPONSE

1. Create a generic interface called ApiResponse<T>

Structure:
- success: boolean
- message: string
- data: T

---

2. Create a type called Product:
- id: number
- name: string
- price: number

---

3. Create a type called User:
- id: number
- username: string
- email: string

---

4. Create 2 API response objects:

A. productResponse
Type:
ApiResponse<Product[]>

Data example:
[
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 }
]

Message:
"Products fetched successfully"

---

B. userResponse
Type:
ApiResponse<User>

Data example:
{
  id: 1,
  username: "john123",
  email: "john@mail.com"
}

Message:
"User fetched successfully"

---

5. Create a generic function called printApiResponse

Requirements:
- accepts:
  response: ApiResponse<T>

- returns:
  a string

Format:
"Success: <message>"

OR

"Failed: <message>"

depending on success value.

---

6. Print:
- productResponse
- userResponse
using printApiResponse

---

🎯 What you are learning
Generic interfaces
interface ApiResponse<T>

Used everywhere in real apps.

API typing

Real backend/frontend responses.

Generic reusable architecture

One interface for MANY data shapes.

💡 Real-world example
ApiResponse<User>
ApiResponse<Product[]>
ApiResponse<Order>
ApiResponse<Comment[]>

Same structure.
Different data.
*/

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

type Product = {
  id: number;
  name: string;
  price: number;
};

type User = {
  id: number;
  username: string;
  email: string;
};

const productResponse: ApiResponse<Product[]> = {
  success: true,
  message: 'Products fetched successfully',
  data: [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
  ],
};

const userResponse: ApiResponse<User> = {
  success: true,
  message: 'User fetched successfully',
  data: {
    id: 1,
    username: 'john123',
    email: 'john@mail.com',
  },
};

function printApiResponse<T>(response: ApiResponse<T>): string {
  if (response.success) {
    return `Success: ${response.message}`;
  }
  return `Failed: ${response.message}`;
}

console.log(printApiResponse(productResponse));
console.log(printApiResponse(userResponse));
