function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    /* 
    1. Create an 'if' function statement using a JavaScript Regurlar Expression that will check for a string that starts with "pet_" followed by the pets birth year (to be represented by 'd+') 
    and name (any one or more letters from a-z or A-Z) with no other characters before or after.
    2. The code checks whether the 'input' string adheres to the pattern defined by the regular expression, which is strings with 'pet_' followed by
    at least one digit and at least one letter.  
    */ 
        // Check if input starts with 'pet_' and followed by alphanumeric characters

        if (/^pet_\d+[a-zA-Z]+$/.test(input)) {   // use curly brackets to restrict the number of digits allowed 
            result = 'Valid Syntax 🟢 ';
        } else {
            result = 'Invalid Syntax 🔴';
        }

            document.getElementById('result').innerText = result;
}


