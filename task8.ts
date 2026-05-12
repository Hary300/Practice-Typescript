/*
TASK 8 - UTILITY TYPES - PICK, OMIT, RECORD

1. Create a type called User:
   - id: number
   - name: string
   - email: string
   - password: string
   - role: string

---

2. Create a type called PublicUser using Pick:
   - Only include:
     - id
     - name
     - role

---

3. Create a type called LoginUser using Pick:
   - Only include:
     - email
     - password

---

4. Create a type called SafeUser using Omit:
   - Remove:
     - password

---

5. Create a type called UserStatus using Record:

   Keys:
   - "online"
   - "offline"
   - "busy"

   Values:
   - string

   Example:
   {
     online: "John",
     offline: "Dave",
     busy: "Brent"
   }

---

6. Create variables for:
   - PublicUser
   - LoginUser
   - SafeUser
   - UserStatus

---

7. Print all results using console.log

---

🎯 What you are learning
Pick<T, K>
Take only selected properties.

Omit<T, K>
Remove selected properties.

Record<K, T>
Create object types dynamically.
*/

type UserRole = 'admin' | 'user' | 'guest';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

type PublicUser = Pick<User, 'id' | 'name' | 'role'>;
type LoginUser = Pick<User, 'email' | 'password'>;
type SafeUser = Omit<User, 'password'>;
type UserStatus = Record<'online' | 'offline' | 'busy', string>;

const publicUser: PublicUser = {
  id: 1,
  name: 'John',
  role: 'guest',
};

const loginUser: LoginUser = {
  email: 'ben@mail.com',
  password: '1234secret',
};

const safeUser: SafeUser = {
  id: 2,
  name: 'Brent',
  email: 'brent@mail.com',
  role: 'admin',
};

const userStatus: UserStatus = {
  online: 'Brent',
  offline: 'Kate',
  busy: 'James',
};

console.log(publicUser);
console.log(loginUser);
console.log(safeUser);
console.log(userStatus);
