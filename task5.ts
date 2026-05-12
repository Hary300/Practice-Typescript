/*
TASK 5 - KEYOF + GENERICS CONSTRAINTS

1. Create a type called Person:
   - name: string
   - age: number
   - city: string

---

2. Create a generic function called getProperty:

   Requirements:
   - It accepts 2 parameters:
     a) an object (generic type T)
     b) a key of that object (keyof T)

   - It returns the value of that key

   Signature must use:
   <T, K extends keyof T>

   Example:
   getProperty(person, "name") -> "John"
   getProperty(person, "age") -> 25

---

3. Create test data:

const person = {
  name: "John",
  age: 25,
  city: "New York"
}

---

4. Test your function with:
- "name"
- "age"
- "city"

and print all results using console.log

---

5. IMPORTANT RULE:
- You must NOT use "any"
- You must use keyof properly
*/

type Person = {
  name: string;
  age: number;
  city: string;
};

const person: Person = {
  name: 'John',
  age: 25,
  city: 'New York',
};

function getProperty<T extends object, K extends keyof T>(
  object: T,
  key: K
): T[K] {
  return object[key];
}

console.log(getProperty(person, 'name'));
console.log(getProperty(person, 'age'));
console.log(getProperty(person, 'city'));
