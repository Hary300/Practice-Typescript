/*
TASK 6 - UTILITY TYPE - PARTIAL

1. Create a type called User:
   - id: number
   - name: string
   - email: string
   - isActive: boolean

---

2. Create a variable called user of type User.

---

3. Create a function called updateUser:

   Requirements:
   - It accepts 2 parameters:
     a) user: User
     b) updates: Partial<User>

   - It returns a new User object:
     - old user data
     - overridden by updates

   Use spread operator.

---

4. Create test data:

const user = {
  id: 1,
  name: "John",
  email: "john@mail.com",
  isActive: true
};

---

5. Test updateUser with:

- Update name only
- Update email + isActive

---

6. Log all results using console.log
*/

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const user: User = {
  id: 1,
  name: 'John',
  email: 'john@mail.com',
  isActive: true,
};

function updateUser(currentUser: User, updates: Partial<User>): User {
  const updatedUser = { ...currentUser, ...updates };
  return updatedUser;
}
console.log('Update name only');
console.log(updateUser(user, { name: 'Brent' }));
console.log('');
console.log('Update email + isActive');
console.log(updateUser(user, { email: 'brent@mail.com', isActive: false }));
