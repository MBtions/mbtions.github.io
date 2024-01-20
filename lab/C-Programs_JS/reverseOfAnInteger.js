// program to reverse of a integer


function reverse(num){
  let rev=0;
  while(num>0){
    let rem = num%10;
    rev = rev*10 + rem;
    num/=10;
  }
  console.log(`The reverse of given number is ${rev}`);
}


reverse(321);
