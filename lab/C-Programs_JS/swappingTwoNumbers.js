function swap(num1,num2) {
  console.log("Number before swapping <br/>"+ "num1 = "+num1+"<br/>num2 = "+num2);
  let temp = num1;
  num1 = num2;
  num2= temp;
  console.log("Numbers after swappinig <br/>"+"num1 = "+num1+"<br/>num2 = "+num2);
}


swap(10,11);
swap(20,100);
