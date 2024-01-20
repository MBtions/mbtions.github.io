// Program to check whether a number is an armstrong number or not
function armstrong(n) {
    let sum = 0;
    original = n;
    d = digits(n); 
    while (n !== 0) {
        let temp = n%10;
        sum = sum + Math.pow(temp, d);
        n = Math.trunc(n/10);
    }
    if (sum === original) {
        return 1;
    }
    return 0;
}
function digits(num) {
    let d = 0;
    while (num !== 0) {
        num = Math.trunc(num/10);
        d = d+1;
    }
    return d;
}

const num = parseInt(prompt("Enter a number to check Armstrong: "));
let flag = armstrong(num);

if (flag) {
    console.log("this is an armstrong number.");
}