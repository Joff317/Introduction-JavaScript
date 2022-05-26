
// FACTORIAL

let answer = prompt("Donne un chiffre") 

function factorial(answer) {
   if (answer < 0)
      return -1;
     else if (answer === 0)
      return 1
   else {
      return (answer * factorial(answer - 1))
   }
};

console.log(factorial(answer));





