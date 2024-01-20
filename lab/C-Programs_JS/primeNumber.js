function prime(num){
  let isPrime = true;
  for(let i = 2;i<nums/2;i++){
    if(num%i == 0){
      isPrime = false;
    }
  }
  if(isPrime){
    console.log(`${num} is a Prme number`);
  }else{
    console.log('${num} is not a Prime number')
  }
}



prime(10);
prime(11);
prime(18);
