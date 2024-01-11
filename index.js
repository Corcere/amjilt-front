function function1(number) {
    return number % 2 === 0 ? "+" : "-";
}

function function2(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "error";
    }
}

function function3(a, b, c) {
    return Math.max(a, b, c);
}

function function4(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function function5(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function function6(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function function7(str) {
    return str.split('').reverse().join('');
}

function function8(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function function9(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function function10(N) {
    return (N * (N + 1)) / 2;
}