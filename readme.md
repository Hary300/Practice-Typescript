# TypeScript Learning Journey

# 🌱 Basic Foundation

## 1. Basic Types

```ts
string;
number;
boolean;
```

---

## 2. Object Types

```ts
type User = {
  name: string;
};
```

---

## 3. Function Typing

```ts
function greet(name: string): string;
```

---

## 4. Array Typing

```ts
Product[]
Array<Product>
```

---

## 5. Optional Properties

```ts
email?: string
```

---

## 6. Union Types

```ts
string | number;
```

---

# 🌿 Intermediate TypeScript

## 7. Literal Types

```ts
'admin';
'loading';
```

---

## 8. Generics

```ts
function identity<T>();
```

---

## 9. Multiple Generics

```ts
<T, U>
```

---

## 10. Generic Constraints

```ts
K extends keyof T
```

---

## 11. keyof

```ts
keyof Product
```

---

## 12. Indexed Access Types

```ts
T[K];
```

---

# 🔥 Utility Types

## 13. Partial

```ts
Partial<T>;
```

---

## 14. Readonly

```ts
Readonly<T>;
```

---

## 15. Pick

```ts
Pick<T, K>;
```

---

## 16. Omit

```ts
Omit<T, K>;
```

---

## 17. Record

```ts
Record<K, T>;
```

---

# 🔥 Advanced Object Typing

## 18. Mapped Types

```ts
[K in keyof T]
```

---

## 19. Discriminated Unions

```ts
status: 'loading';
```

---

## 20. Type Narrowing

### `typeof`

```ts
typeof value === 'string';
```

### `in`

```ts
'permissions' in user;
```

---

# 🌐 API + Async Typing

## 21. Generic Interfaces

```ts
interface ApiResponse<T>
```

---

## 22. API Response Typing

```ts
ApiResponse<User>;
```

---

## 23. Async Function Typing

```ts
Promise<User>;
```

---

## 24. Optional Chaining

```ts
user?.profile?.name;
```

---

## 25. Nullish Coalescing

```ts
value ?? 'default';
```

---

## 26. Async / Await Concepts

Learned:

- async always returns Promise
- await unwraps Promise
- Promise chains stop when data is used

---

# 🚀 Next Step

# React + TypeScript

Upcoming topics:

## 27. Props Typing

## 28. useState Typing

## 29. Event Typing

## 30. Fetch Typing

## 31. Hooks Typing

## 32. Component Architecture
