let answer = prompt("Écris quelque chose au bot!")

function botAnswer() {
   if (answer.includes("?")){
      console.log("Ouais ouais");
   } else if (answer.toUpperCase() === answer){
      console.log("Pwa, calme toi");
   } else if (answer.includes("Fortnite")){
      console.log("on s'fait une partie soum-soum ?" );
   } else if (answer === ""){
      console.log("t'es en PLS ?");
   } else {
      console.log("balek");
   }
}

botAnswer()

