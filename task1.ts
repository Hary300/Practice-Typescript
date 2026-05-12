/*
TASK 1 - BASIC TYPESCRIPT

1. Create a type called User with the following structure:
   - name: string
   - age: number
   - isActive: boolean

2. Create a function called createUser:
   - It should accept a parameter of type User
   - It should return a string

   Return format:
   - If isActive is true:
     "User John (25) is active"

   - If isActive is false:
     "User John (25) is not active"

3. Create 2 test data:

   Data 1:
   name: "John"
   age: 25
   isActive: true

   Data 2:
   name: "Dave"
   age: 30
   isActive: false

4. Call the createUser function with both data
   and print the results using console.log
*/

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User): string {
  if (user.isActive) {
    return `User ${user.name} (${user.age}) is active`;
  }
  return `User ${user.name} (${user.age}) is not active`;
}

const data1: User = {
  name: 'John',
  age: 25,
  isActive: true,
};

const data2: User = {
  name: 'Dave',
  age: 30,
  isActive: false,
};

console.log(createUser(data1));
console.log(createUser(data2));
