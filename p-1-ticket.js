function calculateMoney(ticketSale) {
    // Check if the input is a negative number
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    
    // Constants
    const ticketPrice = 120;
    const securityGuardCost = 500;
    const staffLunchCostPerPerson = 50;
    const numberOfStaff = 8;

    // Calculate total income from ticket sales
    const totalIncome = ticketSale * ticketPrice;
    
    // Calculate total expenses
    const totalExpenses = securityGuardCost + (staffLunchCostPerPerson * numberOfStaff);
    
    // Calculate remaining money after expenses
    const remainingMoney = totalIncome - totalExpenses;
    
    // Return the result
    return remainingMoney;
}


// Test cases
console.log(calculateMoney(10));     // Output: 300
console.log(calculateMoney(1055));   // Output: 125700
console.log(calculateMoney(93));     // Output: 10260
console.log(calculateMoney(-10));   // Output: "Invalid Number"
