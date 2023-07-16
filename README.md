# CometLabs Assessment

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/code-challenge-platform.git
cd code-challenge-platform
```

2. Install dependencies:

```bash
   npm install
```

3. Set up environment variables:

```
MONGODB_URI=mongodb+srv://username:password@your-cluster-url/?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
PORT=8000
```

4. Start the development server:

```bash
  npm start
```

## API Endpoints

- **POST /auth/signup**: User registration endpoint.
  - **Sample Request:**
  ```json
  {
    "name": "example_user",
    "email": "user@example.com",
    "password": "example_password"
  }
  ```
- **POST /auth/login**: User login endpoint.
  - **Sample Request:**
  ```json
  {
    "email": "user@example.com",
    "password": "example_password"
  }
  ```
- **POST /questions**: Add a new coding question (requires admin role).

  - **Sample Request:**

  ```json
  {
    "title": "Sum of Two Numbers in Python",
    "description": "Write a code in Python to sum two numbers"
  }
  ```

- **PUT /questions/:id**: Edit an existing coding question (requires admin role).
  - **Sample Request:**
  ```json
  {
    "title": "Sum of two numbers in Java",
    "description": "Write a code in java to sum two numbers"
  }
  ```
- **DELETE /questions/:id**: Delete a coding question (requires admin role).
- **GET /questions**: Get all coding questions.
- **POST /questions/:id/testcases**: Add a test case to a coding question (requires admin role).
  - **Sample Request:**
  ```json
  {
    "input": "1 2",
    "output": "3"
  }
  ```
