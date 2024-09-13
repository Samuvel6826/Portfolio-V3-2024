document.getElementById('themeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-theme', this.checked);
});

let currentOperation = '+';

function setOperation(operation) {
    currentOperation = operation;
    displayOperation();  // Update the display box
}

function displayOperation() {
    let userInput = document.getElementById('userInput').value;
    let operationDisplay = document.getElementById('operationDisplay');

    // Clean the input
    let cleanedInput = userInput
        .replace(/[^\d.\s,]/g, '')  // Keep only numbers, dots, spaces, and commas
        .replace(/[\s,]+/g, ' ')    // Convert multiple spaces and commas to a single space
        .trim();

    if (cleanedInput === '') {
        operationDisplay.innerText = 'Select an operation';
    } else {
        let numbers = cleanedInput
            .split(' ')                  // Split by spaces
            .filter(item => !isNaN(item) && item !== '') // Filter out non-numeric and empty strings
            .map(Number);               // Convert remaining items to numbers

        if (numbers.length === 0) {
            operationDisplay.innerText = 'No valid numbers found.';
        } else {
            let operationString = numbers.join(` ${currentOperation} `);
            operationDisplay.innerText = operationString;
        }
    }
}

function validateInput() {
    let userInput = document.getElementById('userInput').value;
    let errorDiv = document.getElementById('error');
    errorDiv.innerText = '';  // Clear previous errors

    // Basic validation: check if the input contains at least one number
    let cleanedInput = userInput
        .replace(/[^\d.\s,]/g, '') // Keep only numbers, dots, spaces, and commas
        .replace(/[\s,]+/g, ' ')    // Convert multiple spaces and commas to a single space
        .trim();

    if (cleanedInput === '' || !/^\d+(\.\d+)?( \d+(\.\d+)?)*$/.test(cleanedInput)) {
        errorDiv.innerText = "Invalid input format. Please enter numbers separated by spaces, commas, or newlines.";
    }
}

function calculateResult() {
    let userInput = document.getElementById('userInput').value;
    let errorDiv = document.getElementById('error');
    let infoDiv = document.getElementById('info');
    errorDiv.innerText = '';  // Clear previous errors
    infoDiv.innerText = '';  // Clear previous info

    try {
        // Clean the input by removing non-numeric characters and extra spaces or newlines
        let cleanedInput = userInput
            .replace(/[^\d.\s,]/g, '')  // Keep only numbers, dots, spaces, and commas
            .replace(/[\s,]+/g, ' ')    // Convert multiple spaces and commas to a single space
            .trim();

        if (cleanedInput === '') {
            throw new Error("Input is empty. Please enter valid numbers.");
        }

        let numbers = cleanedInput
            .split(' ')                  // Split by spaces
            .filter(item => !isNaN(item) && item !== '') // Filter out non-numeric and empty strings
            .map(Number);               // Convert remaining items to numbers

        if (numbers.length === 0) {
            throw new Error("No valid numbers found in the input.");
        }

        // Perform the operation
        let result;
        switch (currentOperation) {
            case '+':
                result = numbers.reduce((acc, num) => acc + num, 0);
                break;
            case '-':
                result = numbers.reduce((acc, num) => acc - num);
                break;
            case '*':
                result = numbers.reduce((acc, num) => acc * num, 1);
                break;
            case '/':
                if (numbers.includes(0)) throw new Error("Division by zero is not allowed.");
                result = numbers.reduce((acc, num) => acc / num);
                break;
            default:
                throw new Error("Unknown operation.");
        }

        // Display result with fixed precision
        document.getElementById('result').innerText = 'The result is: ' + result.toFixed(2);

        displayOperation();  // Update the display box

        infoDiv.innerText = 'Input processed successfully.';

    } catch (error) {
        document.getElementById('result').innerText = 'The result is: 0';
        errorDiv.innerText = error.message;
    }
}

function clearInput() {
    document.getElementById('userInput').value = '';
    document.getElementById('operationDisplay').innerText = 'Select an operation';  // Clear operation display
    calculateResult();  // Reset the result when input is cleared
}

function resetResult() {
    document.getElementById('result').innerText = 'The result is: 0';
    document.getElementById('error').innerText = '';  // Clear error message
    document.getElementById('info').innerText = '';    // Clear info message
    document.getElementById('operationDisplay').innerText = 'Select an operation';  // Clear operation display
}

function copyResult() {
    let resultText = document.getElementById('result').innerText;

    // Extract the number from the result text
    let resultNumber = parseFloat(resultText.replace('The result is: ', ''));

    // Check if the result has a decimal part
    let finalResult = (resultNumber % 1 === 0) ? resultNumber.toFixed(0) : resultNumber.toString();

    // Copy the final result to the clipboard
    navigator.clipboard.writeText(finalResult).then(() => {
        document.getElementById('info').innerText = 'Result copied to clipboard!';
    }).catch(err => {
        document.getElementById('error').innerText = 'Failed to copy result: ' + err;
    });
}