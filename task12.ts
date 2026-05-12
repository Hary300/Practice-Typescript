/*
TASK 12 - USER PROFILE FETCHING

1. Create a type called UserProfile

Properties:
- id: number
- username: string
- bio?: string
- social?: {
    twitter?: string
    github?: string
  }

---

2. Create an async function called fetchUserProfile

Requirements:
- no parameters
- return type:
  Promise<UserProfile>

Return this object:

{
  id: 1,
  username: "john123",
  social: {
    github: "john-github"
  }
}

---

3. Create another async function called printUserProfile

Requirements:
- call fetchUserProfile()
- print:

Username: ...
Bio: ...
Twitter: ...
Github: ...

Rules:
- Use optional chaining (`?.`)
- Use nullish coalescing (`??`)
- If value does not exist:
  print "Not provided"

Example:
Bio: Not provided

---

4. Call printUserProfile()

---

🎯 What you are learning
Optional chaining
user.social?.twitter

Safely access nested properties.

Nullish coalescing
value ?? 'Not provided'

Fallback only for:

null
undefined
Async typing
Promise<UserProfile>

Very important for:

fetch
API calls
React async state
💡 Real-world relevance

You will use these constantly in:

React apps
API fetching
form data
optional backend fields
*/

type UserProfile = {
  id: number;
  username: string;
  bio?: string;
  social?: {
    twitter?: string;
    github?: string;
  };
};

async function fetchUserProfile(): Promise<UserProfile> {
  return {
    id: 1,
    username: 'john123',
    social: {
      github: 'john-github',
    },
  };
}

async function printUserProfile(): Promise<void> {
  const user = await fetchUserProfile();
  const username = user.username;
  const bio = user.bio ?? 'Not Provided';
  const twitter = user.social?.twitter ?? 'Not Provided';
  const github = user.social?.github ?? 'Not Provided';
  console.log(`Username: ${username}
Bio: ${bio}
Twitter: ${twitter}
Github: ${github}  
  `);
}

printUserProfile();
