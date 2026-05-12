/*
TASK 10 - TYPE NARROWING

1. Create a function called formatValue

Requirements:
- Accept parameter:
  value: string | number

Rules:
- If value is a string:
  return:
  "String value: " + uppercase version

- If value is a number:
  return:
  "Number value: " + value fixed to 2 decimals

Use typeof for narrowing.

---

2. Create 2 types:

Admin
- role: "admin"
- permissions: string[]

Customer
- role: "customer"
- purchaseCount: number

---

3. Create a union type:

type User = Admin | Customer

---

4. Create a function called describeUser

Requirements:
- Accept parameter: user: User

Rules:
- If user has permissions:
  return:
  "Admin permissions: ..." 

- If user has purchaseCount:
  return:
  "Customer purchases: ..."

Use the "in" operator for narrowing.

---

5. Create test data:

const adminUser = {
  role: "admin",
  permissions: ["read", "write", "delete"]
}

const customerUser = {
  role: "customer",
  purchaseCount: 12
}

---

6. Print all results using console.log
*/

type Value = string | number;

function formatValue(param: Value): string {
  if (typeof param === 'string') {
    return `String value: ${param.toUpperCase()}`;
  }

  return `Number value: ${param.toFixed(2)}`;
}

console.log(formatValue('harry'));
console.log(formatValue(22));

console.log('');
console.log('------------------------------');
console.log('');

type Admin = {
  role: 'admin';
  permissions: string[];
};

type Customer = {
  role: 'customer';
  purchaseCount: number;
};

type User = Admin | Customer;

function describeUser(user: User): string {
  if ('permissions' in user) {
    return `Admin permissions: ${user.permissions.join(', ')}`;
  }

  return `Customer purchases: ${user.purchaseCount}`;
}

const adminUser: Admin = {
  role: 'admin',
  permissions: ['read', 'write', 'delete'],
};

const customerUser: Customer = {
  role: 'customer',
  purchaseCount: 12,
};

console.log(describeUser(adminUser));
console.log(describeUser(customerUser));
