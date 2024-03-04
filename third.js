function calculator(sign, firstNumber, secondNumber) {
    switch (sign) {
        case '+': return firstNumber + secondNumber;
        case '-': return firstNumber - secondNumber;
        case '*': return firstNumber * secondNumber;
        case '/': return firstNumber / secondNumber;
    }
}

console.log(calculator('-', 15, 18));