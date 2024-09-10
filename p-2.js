function checkName(name) {
    // Check if the input is not a string
    if (typeof name !== 'string') {
        return "invalid";
    }

    // Convert the name to lowercase for consistent comparison
    const lowerCaseName = name.toLowerCase();

    // Get the last character of the name
    const lastChar = lowerCaseName[lowerCaseName.length - 1];

    // List of characters that make a name a "Good Name"
    const goodEndingChars = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    // Check if the last character is in the goodEndingChars array
    if (goodEndingChars.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

// Test cases
console.log(checkName("Salman"));     // Output: Bad Name
console.log(checkName("RAFEE"));      // Output: Good Name
console.log(checkName("Jhankar"));    // Output: Bad Name
console.log(checkName(199));          // Output: invalid
console.log(checkName(["Rashed"]));   // Output: invalid
