const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

function translateArn(sequence){
   //transform string chaine en caractère 3 par 3
   let seq = sequence.match(/.{1,3}/g);
   for(let i = 0; i < seq.length; i ++){
      seq[i] = translateDna(seq[i])
      console.log(seq[i]);
   }
   return seq.join("-");
};


function translateDna(adn){
   switch (adn){
   case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
      return "Sérine";
   case "CCU": case "CCC": case "CCA": case "CCG" :
      return "Proline";
   case "UUA": case "UUG": case "CUU": case "CUC": case "CUA": case "CUG" :
      return "Leucine";
   case "UUU": case "UUC" :
      return "Phénylalanine";
   case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" :
      return "Arginine";
   case "UAU": case "UAC" :
      return "Tyrosine";
   }
}   

let result = translateArn(arn1)
console.log(result);
let result1 = translateArn(arn2)
console.log(result1);