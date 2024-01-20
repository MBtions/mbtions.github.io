// greatest of 3

function max(a,b){
  return a>b?a:b;
}
function compare(num1,num2,num3){
  return max(num1,max(num2,num3));
}



compare(10,20,11);
