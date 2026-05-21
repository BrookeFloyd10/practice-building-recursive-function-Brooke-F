function reverseString(str) {
    // Base Case: return string when the string contains a single character
    if (str.length === 1){
        return str;
    }
    // Recursive Case: take last character + the reserse of the rest of the string
    return str[str.length - 1] + reverseString(str.slice(0, -1))
}
console.log(reverseString("grind"));

// TestCases:
console.log(reverseString("struggle"));
console.log(reverseString("code"));
console.log(reverseString("power"));
console.log(reverseString("push"));