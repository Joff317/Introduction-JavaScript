

let answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
answer = Number(answer)


let string = "";
for (let i = 1; i <= answer; i++) {
  // printing spaces
  for (let j = 0; j < answer - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);




