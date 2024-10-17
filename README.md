# Daily Expense Sharing Application (Backend)
This project is a backend service for managing and sharing daily expenses. Users can split expenses equally, by exact amounts, or by percentages. 
The backend also allows for user creation, expense management, and generating a balance sheet.

## Features
1. User Management: Create and retrieve users.
2. Expense Management: Add expenses and split them among participants.
3. Expense Splitting Methods: \
      i.   Equal: Split expenses equally. \
      ii.  Exact: Split by exact amounts. \
      iii. Percentage: Split by percentages. 
4. Balance Sheet: Retrieve a report of user expenses.
5. Validation: Ensures valid input, such as checking that percentages add up to 100%.

## Technologies
Node.js (Backend framework) \
Express.js (Web server) \
MongoDB (Database) \
Mongoose (ODM for MongoDB)

## Installation
1. Clone the Repository : \
   git (clone your-repository-url) \
   cd daily-expense-sharing-app
2. Install Dependencies : \
   npm install
3. Start the Server : \
   npm run dev

## API Endpoints

### User Endpoints
1. Create User (POST /api/users)
2. Get User Details (GET /api/users/:id)

### Expense Endpoints
1. Add Expense (POST /api/expenses)
2. Get User Expenses (GET /api/expenses/user/:userId)
3. Get Overall Expenses (GET /api/expenses/overall)

## Running the Project
1. Start MongoDB on your machine.
2. Run the server using : \
   npm run dev
3. Test the API using Postman or any API testing tool.
