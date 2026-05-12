/*
TASK 4 - GENERICS INTRO

1. Create a generic function called identity:
   - It accepts 1 parameter of ANY type
   - It returns the same value unchanged
   - Must use generics (<T>)

   Example:
   identity<string>("hello") -> "hello"
   identity<number>(123) -> 123

---

2. Create a generic function called wrapInArray:
   - It accepts 1 value of any type
   - It returns an array containing that value

   Example:
   wrapInArray("hi") -> ["hi"]
   wrapInArray(10) -> [10]

---

3. Create a generic function called getFirst:
   - It accepts an array of ANY type
   - It returns the first element of the array
   - If array is empty, return undefined

   Example:
   getFirst([1,2,3]) -> 1
   getFirst(["a","b"]) -> "a"

---

4. Create a generic function called merge:
   - It accepts 2 objects
   - It merges them into one object
   - Use generics <T, U>

   Example:
   merge({ name: "John" }, { age: 25 })
   -> { name: "John", age: 25 }

---

5. Testing:
   - Call all functions with different types (string, number, object)
   - Print results using console.log
*/

console.log('Number 1');
function identity<T>(param: T): T {
  return param;
}
console.log(identity<string>('Hello'));
console.log(identity<number>(1234));

console.log('');
console.log('Number 2');
function wrapInArray<T>(value: T): Array<T> {
  return [value];
}
console.log(wrapInArray('hi'));
console.log(wrapInArray(10));

console.log('');
console.log('Number 3');
function getFirst<T>(array: Array<T>): T | undefined {
  if (array.length === 0) return undefined;
  return array[0];
}
console.log(getFirst<number>([1, 2, 3]));
console.log(getFirst<string>(['a', 'b', 'c']));

console.log('');
console.log('Number 4');
function merge<T extends object, U extends object>(
  object1: T,
  object2: U
): T & U {
  return { ...object1, ...object2 };
}
console.log(merge({ name: 'John' }, { age: 25 }));
