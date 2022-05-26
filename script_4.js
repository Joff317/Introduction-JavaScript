const entrepreneurs = [
   { first: 'Steve', last: 'Jobs', year: 1955 },
   { first: 'Oprah', last: 'Winfrey', year: 1954 },
   { first: 'Bill', last: 'Gates', year: 1955 },
   { first: 'Sheryl', last: 'Sandberg', year: 1969 },
   { first: 'Mark', last: 'Zuckerberg', year: 1984 },
   { first: 'Beyonce', last: 'Knowles', year: 1981 },
   { first: 'Jeff', last: 'Bezos', year: 1964 },
   { first: 'Diane', last: 'Hendricks', year: 1947 },
   { first: 'Elon', last: 'Musk', year: 1971 },
   { first: 'Marissa', last: 'Mayer', year: 1975 },
   { first: 'Walt', last: 'Disney', year: 1901 },
   { first: 'Larry', last: 'Page', year: 1973 },
   { first: 'Jack', last: 'Dorsey', year: 1976 },
   { first: 'Evan', last: 'Spiegel', year: 1990 },
   { first: 'Brian', last: 'Chesky', year: 1981 },
   { first: 'Travis', last: 'Kalanick', year: 1976 },
   { first: 'Marc', last: 'Andreessen', year: 1971 },
   { first: 'Peter', last: 'Thiel', year: 1967 }
 ];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

function yearSeventies(x){
   return x.year > 1969 && x.year < 1980
}

let born = entrepreneurs.filter(yearSeventies)
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
console.log(born);

//Sors une array qui contient le prénom et le nom des entrepreneurs ;


console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")

let nameAndLast = []

for(let index in entrepreneurs){
   nameAndLast.push({first:entrepreneurs[index].first, last:entrepreneurs[index].last})
}

console.log(nameAndLast);

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");


let actualAge = []
let currentYear = 2022
let age = 0

for (let index in entrepreneurs){
   age = currentYear - entrepreneurs[index].year
   actualAge.push({first:entrepreneurs[index].first, age: age})
}


console.log(actualAge);


//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");

let alpf = entrepreneurs.sort((a,b) => a.last.localeCompare(b.last))

console.log(alpf);






