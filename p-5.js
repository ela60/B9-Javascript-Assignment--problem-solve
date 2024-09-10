function monthlySavings(arr, livingCost) {
    // Check if the first parameter is an array and the second parameter is a number
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    // Initialize total income
    let totalIncome = 0;

    // Calculate the total income after tax deductions
    for (let payment of arr) {
        if (typeof payment === 'number') {
            if (payment >= 3000) {
                totalIncome += payment * 0.8;  // Deduct 20% tax
            } else {
                totalIncome += payment;  // No tax deduction
            }
        }
    }

    // Calculate savings
    let savings = totalIncome - livingCost;

    // Return the result based on savings
    return savings >= 0 ? savings : "earn more";
}

// Test cases
console.log(monthlySavings([1000, 2000, 3000], 5400));       // Output: 0
console.log(monthlySavings([1000, 2000, 2500], 5000));       // Output: 500
console.log(monthlySavings([900, 2700, 3400], 10000));       // Output: "earn more"
console.log(monthlySavings(100, [900, 2700, 3400]));         // Output: "invalid input"
