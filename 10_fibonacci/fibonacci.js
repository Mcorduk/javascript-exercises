const fibonacci = (num) => {
  let num1 = 0
  let num2 = 1
  let fibo;
  
  if(num < 0){
    return "OOPS";
  }  else{
    for( i=0; i < num-1; i++) {
      fibo = num1 + num2;
      num1 = num2;
      num2 = fibo;

    }
    return fibo;
  }
}
/* 
    You have to add the preecding numbers up to the parameter of the function.
    Start with one and one. 
    You have to add the preceding numbers as many times as the parameter.
     
    
*/
// Do not edit below this line
module.exports = fibonacci;
