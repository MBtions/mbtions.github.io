Array.from(document.querySelectorAll("button")).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // console.log(e.target);
        let prog = button.id+"Program";
        switch(button.id) {
            case 'armstrong':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("armno").value));
                break;
            case 'prime':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("primeno").value));
                break;
            case 'sumOfDigits':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("sum").value));
                break;
            case 'factorial':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("fact").value));
                break;
            case 'integerReverse':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("intrev").value));
                break;
            case 'leapYear':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("leap").value));
                break;
            case 'greatestNumber':
                // console.log(prog);
                window[prog](
                    Number(document.getElementById("num1").value),
                    Number(document.getElementById("num2").value), 
                    Number(document.getElementById("num3").value)
                );
                break;
            case 'evenOdd':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("eonum").value));
                break;
            case 'swap':
                // console.log(prog);
                window[prog](
                    Number(document.getElementById("swapnum1").value), 
                    Number(document.getElementById("swapnum2").value)
                );
                break;
            case 'perfectNumber':
                // console.log(prog);
                window[prog](parseInt(document.getElementById("num").value));
                break;
            case 'vowelsInAString':
                // console.log(prog);
                window[prog](document.getElementById("vowelstr").value);
                break;
            case 'stringLength':
                // console.log(prog);
                window[prog](document.getElementById("strlen").value);
                break;
            case 'mergeStrings':
                // console.log(prog);
                window[prog](
                    document.getElementById("str1").value, 
                    document.getElementById("str2").value
                );
                break;
            case 'duplicatesInAnArray':
                // console.log(prog);
                window[prog]((document.getElementById("arrlist").value).split(" "));
                break;
            case 'stringReverse':
                // console.log(prog);
                window[prog](document.getElementById("strrev").value);
                break;
        }
    });
});

function armstrongProgram(num) {
    // console.log("Armstrong Number Program.");
    if (armstrong(num)) {
        document.getElementById("armres").innerHTML = "<p>True, It is an armstrong number.</p>";
    } else {
        document.getElementById("armres").innerHTML = "<p>False, It is not an armstrong number.</p>";
    }
}
function primeProgram(num) {
    // console.log("Prime Number Program.");
    if (checkPrime(num)) {
        document.getElementById("primeres").innerHTML = "<p>True, It is a Prime number.</p>";
    } else {
        document.getElementById("primeres").innerHTML = "<p>False, It is not a Prime number.</p>";
    }
}
function sumOfDigitsProgram(num) {
    // console.log("Sum of Digits Program");
    let sum = sumofdigits(num);
    document.getElementById("sumres").innerHTML = "<p>Sum of Digits = "+sum+"</p>";
}
function factorialProgram(num) {
    // console.log("Factorial Number Program.");
    let fact = factorial(num);
    document.getElementById("factres").innerHTML = "<p>Factorial = "+fact+"</p>";
}
function integerReverseProgram(num) {
    // console.log("Reverse of an Integer Program.");
    let rev = reverseInteger(num);
    document.getElementById("intrevres").innerHTML = "<p>Reverse Number: "+rev+"</p>";
}
function leapYearProgram(year) {
    // console.log("Leap Year Program.");
    if (isLeapYear(year)){
        document.getElementById("leapres").innerHTML = "<p>True, It is a Leap Year.</p>";
    }
    else {
        document.getElementById("leapres").innerHTML = "<p>False, It is not a Leap Year.</p>";
    }
}
function greatestNumberProgram(a, b, c) {
    // console.log("Greatest Number Program.");
    let max = getMax(a, b, c);
    document.getElementById("greatestnumres").innerHTML = "<p>Maximum: "+max+"</p>";
}
function evenOddProgram(num) {
    // console.log("Even Odd Program.");
    if ((num%2) === 0) {
        document.getElementById("evenOddres").innerHTML = "<p>It is an Even Number.</p>";
    } else {
        document.getElementById("evenOddres").innerHTML = "<p>It is an Odd Number.</p>";
    }
}
function swapProgram(a, b) {
    // console.log("Swap Program.");
    let temp = a;
    a = b;
    b = temp;
    document.getElementById("swapres").innerHTML = "<p>First Number: "+a+", Second Number: "+b+"</p>";
}
function perfectNumberProgram(num) {
    // console.log("Perfect Number Program.");
    if (perfectnumber(num)){
        document.getElementById("perfectnumres").innerHTML = "<p>True, It is a Perfect Number.</p>";
    } else {
        document.getElementById("perfectnumres").innerHTML = "<p>False, Not a Perfect Number!</p>";
    }
}
function vowelsInAStringProgram(string) {
    // console.log("Vowels in a String Program.");
    let count = countVowels(string);
    document.getElementById("vowelres").innerHTML = "<p>Number of Vowels: "+count+"</p>";
}
function stringLengthProgram(str) {
    // console.log("Length of a String Program.");
    let len = stringlength(str);
    document.getElementById("strlenres").innerHTML = "<p>Length of the string: "+len+"</p>";
}
function mergeStringsProgram(str1, str2) {
    // console.log("Merge Two Strings Program.");
    let str = str1+str2;
    document.getElementById("mergeres").innerHTML = "<p>Merged String: "+str+"</p>";
}
function duplicatesInAnArrayProgram(a) {
    // console.log("Duplicates in an array Program.");
    str = findDuplicates(a);
    document.getElementById("duplicatesres").innerHTML = "<p>Duplicates: "+str+"</p>";
}
function stringReverseProgram(str) {
    // console.log("Reverse of a String Program."+str);
    str = str.split("").reverse().join("");
    document.getElementById("strrevres").innerHTML = "<p>Reverse String: "+str+"</p>";
}

// function for armstrong checking
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
// function for counting digits
function digits(num) {
    let d = 0;
    while (num !== 0) {
        num = Math.trunc(num/10);
        d = d+1;
    }
    return d;
}
// check number is prime or not.
function checkPrime(n) {
    for (let i=2; i<n; i++) {
        if (n%i === 0) {
            return 0;
        }
    }
    return 1;
}
// find sum of digits of a number
function sumofdigits(num) {
    sum = 0;
    while (num !== 0) {
        sum += num%10;
        num = Math.trunc(num/10);
    }
    return sum;
}
// function to calculate string length
function stringlength(str) {
    let count = 0;
    for (i in str) {
        count++;
    }
    return count;
}
// dulicates in an array
function findDuplicates(arr) {
    let index = 0, dupArr = [];
    const length = arr.length; 
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                dupArr[index] = arr[i];
                    index++;
            }
        }
    }
    return dupArr;
 }
 // function to string reverse
 function reverseString(str) {
    let rev = '';
    for (i=str.length-1; i>=0; i--) {
        rev.push(str[i]);
    }
    return rev;
 }
 // function to integer reverse
 function reverseInteger(num) {
    let revnum = 0;
    while (num !== 0) {
        revnum = revnum*10 + num%10;
        num = Math.trunc(num/10);
    }
    return revnum;
 }
 // function to find factorial
 function factorial(num) {
    let f = 1;
    for (let i=num; i>1; i--) {
        f *= i;
    }
    return f;
 }
 // function to find year is leap or not
 function isLeapYear(num) {
    if (num%4 == 0){
        return 1;
    }
    return 0;
 }
 // function to find max among three numbers
 function getMax(a, b, c) {
    if (a>c) {
        if (a>b) {
            return a;
        } else {
            return b;
        }
    } else {
        if (c>b) {
            return c;
        } else {
            return b;
        }
    }
 }
 // function to find a number is a perfect number or not.
 function perfectnumber(number) {
    var sum = 0;
    for (var i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    if (sum === number && sum !== 0) {
      return 1;
    } else {
        return 0;
    }
}
function countVowels(str) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
