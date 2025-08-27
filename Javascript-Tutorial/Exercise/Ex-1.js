function stringToNumber(input) {
    const number = Number(input);
    
    if (isNaN(number)) {
        return "Not a number";
    } else {
        return number;
    }
}

console.log(stringToNumber("124"));    
console.log(stringToNumber("hello")); 