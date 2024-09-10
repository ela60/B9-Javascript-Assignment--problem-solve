function deleteInvalids(array) {
    // Check if the input is not an array
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    // Filter the array to include only valid numbers
    const result = array.filter(element => typeof element === 'number' && !isNaN(element));

    // Return the filtered array
    return result;
}

// Test cases
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // Output: [1, 18, -19]
console.log(deleteInvalids(["1", {num: 2}, NaN]));                                            // Output: []
console.log(deleteInvalids([1, 2, -3]));                                                      // Output: [1, 2, -3]
console.log(deleteInvalids({num: [1, 2, 3]}));                                                // Output: Invalid Array
