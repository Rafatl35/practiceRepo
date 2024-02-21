// function generateOutput(obj) {
//     // Check if all required properties exist and birthYear is a 4-digit number
//     if (
//         obj &&
//         obj.name &&
//         obj.birthYear &&
//         obj.siteName &&
//         typeof obj.birthYear === 'number' &&
//         obj.birthYear.toString().length === 4
//     ) {
//         // Construct the output string
//         return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
//     } else {
//         // Return 'invalid' if any of the conditions are not met
//         return 'invalid';
//     }
// }

// // Test the function with your provided object
// const inputObj = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// console.log(generateOutput(inputObj)); // Output: Google#kolimuddin@1999

// // Test with missing properties
// const missingObj = { name: "John", siteName: "facebook" };
// console.log(generateOutput(missingObj)); // Output: invalid

// // Test with birthYear not being a 4-digit number
// const invalidYearObj = { name: "Alice", birthYear: 99, siteName: "twitter" };
// console.log(generateOutput(invalidYearObj)); // Output: invalid
function generateOutput(obj) {
    // Check if all required properties exist and birthYear is a 4-digit number
    if (
        obj &&
        obj.name &&
        obj.birthYear &&
        obj.siteName &&
        typeof obj.birthYear === 'number' &&
        obj.birthYear.toString().length === 4
    ) {
        // Construct the output string
        let output = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
        return output;
    } else {
        // Return 'invalid' if any of the conditions are not met
        return 'invalid';
    }
}

// Test the function with your provided object
const inputObj = { name: "toky", birthYear: 200} ;
console.log(generateOutput(inputObj));