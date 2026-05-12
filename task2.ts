/*
TASK 2 - TYPESCRIPT (LEVEL UP)

1. Create a type called Role:
   - It can only be one of these values:
     "admin" | "user" | "guest"

2. Create a type called Account:
   - name: string
   - age: number
   - role: Role
   - email?: string   (optional property)

3. Create a function called describeAccount:
   - It accepts an Account
   - It returns a string

   Return format:
   - If email exists:
     "John is an admin (email: john@mail.com)"

   - If email does NOT exist:
     "John is an admin (no email provided)"

4. Create 3 test data:

   Data 1:
   name: "John"
   age: 25
   role: "admin"
   email: "john@mail.com"

   Data 2:
   name: "Brent"
   age: 30
   role: "user"
   email: missing

   Data 3:
   name: "James"
   age: 20
   role: "guest"
   email: missing

5. Call describeAccount for all data and print results.
*/

type Role = 'admin' | 'user' | 'guest';

type Account = {
  name: string;
  age: number;
  role: Role;
  email?: string;
};

function describeAccount(account: Account): string {
  const { name, role, email } = account;
  const article = role === 'admin' ? 'an' : 'a';

  if (email) {
    return `${name} is ${article} ${role} (email: ${email})`;
  }
  return `${name} is ${article} ${role} (no email provided)`;
}

const data1: Account = {
  name: 'John',
  age: 25,
  role: 'admin',
  email: 'john@mail.com',
};

const data2: Account = {
  name: 'Brent',
  age: 30,
  role: 'user',
};

const data3: Account = {
  name: 'James',
  age: 20,
  role: 'guest',
};

console.log(describeAccount(data1));
console.log(describeAccount(data2));
console.log(describeAccount(data3));
