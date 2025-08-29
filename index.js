const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Helper function to check if a string is a number
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str)) && isFinite(str);
}

// Helper function to check if a string is alphabetic
function isAlphabet(str) {
    return /^[a-zA-Z]$/.test(str);
}

// Helper function to check if a string is a special character
function isSpecialCharacter(str) {
    return !isNumber(str) && !isAlphabet(str) && str.length === 1;
}

// Function to process array data
function processData(data) {
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    const alphabetChars = [];

    data.forEach(item => {
        if (isNumber(item)) {
            const num = parseInt(item);
            sum += num;
            if (num % 2 === 0) {
                evenNumbers.push(item.toString());
            } else {
                oddNumbers.push(item.toString());
            }
        } else if (isAlphabet(item)) {
            alphabets.push(item.toUpperCase());
            alphabetChars.push(item.toLowerCase());
        } else if (isSpecialCharacter(item)) {
            specialCharacters.push(item);
        } else if (item.length > 1) {
            // Handle multi-character strings
            for (let char of item) {
                if (isAlphabet(char)) {
                    alphabets.push(char.toUpperCase());
                    alphabetChars.push(char.toLowerCase());
                } else if (isSpecialCharacter(char)) {
                    specialCharacters.push(char);
                }
            }
        }
    });

    // Create concatenated string with alternating caps in reverse order
    const reversedAlphabets = alphabetChars.reverse();
    let concatString = '';
    reversedAlphabets.forEach((char, index) => {
        if (index % 2 === 0) {
            concatString += char.toUpperCase();
        } else {
            concatString += char.toLowerCase();
        }
    });

    return {
        oddNumbers,
        evenNumbers,
        alphabets,
        specialCharacters,
        sum: sum.toString(),
        concatString
    };
}

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input: 'data' should be an array"
            });
        }

        // Process the data
        const result = processData(data);

        // Response with required format
        const response = {
            is_success: true,
            user_id: "lavan_gupta_29082003", // Replace with your actual details
            email: "lavan.gupta2022@vitstudent.ac.in", // Replace with your actual email
            roll_number: "22BDS0047", // Replace with your actual roll number
            odd_numbers: result.oddNumbers,
            even_numbers: result.evenNumbers,
            alphabets: result.alphabets,
            special_characters: result.specialCharacters,
            sum: result.sum,
            concat_string: result.concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
});

// GET /bfhl endpoint for testing
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Root endpoint - serve the HTML UI
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// API status endpoint
app.get('/status', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoints: {
            POST: "/bfhl - Main endpoint for data processing",
            GET: "/bfhl - Returns operation code"
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`POST endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
