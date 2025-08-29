// Test script for BFHL API logic
const express = require('express');

// Copy the helper functions from index.js
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str)) && isFinite(str);
}

function isAlphabet(str) {
    return /^[a-zA-Z]$/.test(str);
}

function isSpecialCharacter(str) {
    return !isNumber(str) && !isAlphabet(str) && str.length === 1;
}

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

// Test cases from the problem statement
const testCases = [
    {
        name: "Example A",
        input: ["a","1","334","4","R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334","4"],
            alphabets: ["A","R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "Ra"
        }
    },
    {
        name: "Example B", 
        input: ["2","a", "y", "4", "&", "-", "*", "5","92","b"],
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2","4","92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "ByA"
        }
    },
    {
        name: "Example C",
        input: ["A","ABcD","DOE"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A","A","B","C","D","D","O","E"],
            special_characters: [],
            sum: "0",
            concat_string: "EoDdCbAa"
        }
    }
];

console.log("Testing BFHL API Logic...\n");

testCases.forEach((testCase, index) => {
    console.log(`=== ${testCase.name} ===`);
    console.log('Input:', JSON.stringify(testCase.input));
    
    const result = processData(testCase.input);
    
    const response = {
        is_success: true,
        user_id: "lavan_kumar_29082003",
        email: "lavan.kumar2021@vitbhopal.ac.in",
        roll_number: "21BCT0254",
        odd_numbers: result.oddNumbers,
        even_numbers: result.evenNumbers,
        alphabets: result.alphabets,
        special_characters: result.specialCharacters,
        sum: result.sum,
        concat_string: result.concatString
    };
    
    console.log('Output:', JSON.stringify(response, null, 2));
    console.log('---');
    
    // Check specific fields
    console.log(`Odd numbers: ${JSON.stringify(result.oddNumbers)} (Expected: ${JSON.stringify(testCase.expected.odd_numbers)})`);
    console.log(`Even numbers: ${JSON.stringify(result.evenNumbers)} (Expected: ${JSON.stringify(testCase.expected.even_numbers)})`);
    console.log(`Alphabets: ${JSON.stringify(result.alphabets)} (Expected: ${JSON.stringify(testCase.expected.alphabets)})`);
    console.log(`Special chars: ${JSON.stringify(result.specialCharacters)} (Expected: ${JSON.stringify(testCase.expected.special_characters)})`);
    console.log(`Sum: ${result.sum} (Expected: ${testCase.expected.sum})`);
    console.log(`Concat string: "${result.concatString}" (Expected: "${testCase.expected.concat_string}")`);
    console.log('\n');
});
