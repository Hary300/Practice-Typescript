/*
TASK 9 - DISCRIMINATED UNIONS

1. Create 3 types:

LoadingState
- status: "loading"

SuccessState
- status: "success"
- data: string[]

ErrorState
- status: "error"
- message: string

status = discriminator
---

2. Create a union type called ApiState:

type ApiState =
  | LoadingState
  | SuccessState
  | ErrorState;

---

3. Create a function called handleState:

Requirements:
- accepts parameter: state: ApiState
- returns a string

Rules:
- if status === "loading"
  return "Loading..."

- if status === "success"
  return:
  "Success: " + all data joined by comma

- if status === "error"
  return:
  "Error: " + message

---

4. Create test data:

const loadingState = { status: "loading" }

const successState = {
  status: "success",
  data: ["Apple", "Banana", "Orange"]
}

const errorState = {
  status: "error",
  message: "Something went wrong"
}

---

5. Call handleState with all test data
and print the results.
*/

type LoadingState = {
  status: 'loading';
};

type SuccessState = {
  status: 'success';
  data: Array<string>;
};

type ErrorState = {
  status: 'error';
  message: string;
};

type ApiState = LoadingState | SuccessState | ErrorState;

function handleState(state: ApiState): string {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return `Success: ${state.data.join(', ')}`;
    case 'error':
      return `Error: ${state.message}`;
  }
}

const loadingState: LoadingState = { status: 'loading' };

const successState: SuccessState = {
  status: 'success',
  data: ['Apple', 'Banana', 'Orange'],
};

const errorState: ErrorState = {
  status: 'error',
  message: 'Something went wrong',
};

console.log(handleState(loadingState));
console.log(handleState(successState));
console.log(handleState(errorState));
