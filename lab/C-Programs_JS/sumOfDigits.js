// sum of digits

function sumofDigits(num){
  let temp = num;
  let sum=0;
  while(temp>0){
    sum+=temp%10;
    temp = temp/10;
  }
  console.log(`The sum of digits is: ${sum}`)
}



sumofDigits(123);

