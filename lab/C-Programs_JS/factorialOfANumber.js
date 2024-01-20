// this program is demonstrating the factorial of a number

function factorial(num){
  if(num<=1){
    return 1;
  }
  return num*factorial(num-1);
}

factorail(5);
