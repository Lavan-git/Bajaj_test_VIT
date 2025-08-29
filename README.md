# BFHL API - VIT Full Stack Assignment

A REST API that processes arrays and returns categorized data including numbers, alphabets, and special characters.

## Features

- **POST /bfhl**: Main endpoint that processes input array and returns:
  - Status and user information
  - Separated odd and even numbers
  - Alphabets converted to uppercase
  - Special characters
  - Sum of all numbers
  - Concatenated alphabetical characters in reverse order with alternating caps

- **GET /bfhl**: Returns operation code for testing

## Tech Stack

- Node.js
- Express.js
- CORS middleware

## Local Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000`

## API Usage

### POST /bfhl

**Request:**
```json
{
  "data": ["a","1","334","4","R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "lavan_kumar_29082003",
  "email": "lavan.kumar2021@vitbhopal.ac.in",
  "roll_number": "21BCT0254",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Testing

Run the test script to validate logic against provided examples:
```bash
node test.js
```

## Deployment

This API is configured for deployment on:
- Vercel (vercel.json included)
- Railway
- Render
- Any Node.js hosting platform

For Vercel deployment:
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel --prod`

## Author

- **Name**: Lavan Kumar
- **Roll Number**: 21BCT0254
- **Email**: lavan.kumar2021@vitbhopal.ac.in
- **College**: VIT Bhopal
