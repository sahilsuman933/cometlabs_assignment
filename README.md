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

  ## Working Screenshots

![1689506610](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/cb61d3a0-745b-4764-9201-66a278204d8d)
![1689506690](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/8aa17970-638e-413f-8548-72d63e40017f)
![1689506697](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/67b68605-035f-4f74-a41e-80a49253f34e)
![1689506711](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/da78ffd1-96ff-4856-9788-e4dd788f36a4)
![1689506716](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/c9bae6a0-fc31-4e95-b325-f2d855f6a5b6)
![1689506730](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/5e1dcea4-563b-41cf-9216-c21252706318)
![1689506747](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/b96fbcde-010d-45d3-b7cb-2917b296eb6b)
