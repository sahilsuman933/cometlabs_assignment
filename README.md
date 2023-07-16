![1689506747](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/5390dc16-14c5-4393-88b6-72d93ba348a7)
![Uploading 1689506730.png…]()
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
![Uploading 1689506716.png…]()
![Uploading 1689506711.png…]()
![1689506697](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/9581c293-f648-4727-a647-229ea50554f8)
![1689506690](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/2b93dec0-69f0-4abe-b713-85368a556c81)
![1689506610](https://github.com/sahilsuman933/cometlabs_assignment/assets/34382211/25947675-e83f-4101-938c-38461e0e51a9)
