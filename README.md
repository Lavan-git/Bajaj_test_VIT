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
  "user_id": "lavan_gupta_19012005",
  "email": "lavan.gupta2022@vitstudent.ac.in",
  "roll_number": "22BDS0047",
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

This API is configured for deployment on multiple platforms:

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project" and import your GitHub repository
3. Vercel will automatically detect and deploy using `vercel.json`
4. Your API will be available at: `https://your-app-name.vercel.app/bfhl`

### Option 2: Railway
1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository and deploy
4. Railway will use the `railway.json` configuration

### Option 3: Render
1. Go to [render.com](https://render.com) and sign up with GitHub
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Build Command: `npm install`
5. Start Command: `npm start`

### Option 4: Heroku
1. Go to [heroku.com](https://heroku.com) and create an account
2. Create a new app and connect to GitHub
3. Enable automatic deploys from main branch
4. Heroku will use the `Procfile` configuration

## Author

- **Name**: Lavan Gupta
- **Roll Number**: 22BDS0047
- **Email**: lavan.gupta2022@vitstudent.ac.in
- **College**: VIT Vellore
