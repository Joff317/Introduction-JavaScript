const books = [
   { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
   { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
   { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
   { title: 'Les frères Karamazov', id: 450911, rented: 55 },
   { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
   { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
   { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
   { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
   { title: 'La disparition', id: 364445, rented: 33 },
   { title: 'La lune seule le sait', id: 63541, rented: 43 },
   { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
   { title: 'Guerre et Paix', id: 748147, rented: 19 }
 ];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

var response = "oui"

books.map (book => book.rented === 0 ? response = "non" : book)  

console.log(response);
// Quel est livre le plus emprunté ?
console.log("Quel est livre le plus emprunté ?");


let mostRented = books.reduce((prev, current) => prev.rented > current.rented ? prev : current);

console.log(`Le livre le plus emprunté est ${mostRented.title}`);

// Quel est le livre le moins emprunté ?
let lessRented = books.reduce((prev, current) => prev.rented < current.rented ? prev : current )

console.log(`Le livre le moins emprunté est ${lessRented.title}`);

// Trouve le livre avec l'ID: 873495 ;
console.log("Trouve le livre avec l'ID: 873495");

let search = books.find(x => x.id === 873495)

console.log(`le livre est ${search.title}`);

// Supprime le livre avec l'ID: 133712 ;
console.log("Supprime le livre avec l'ID: 133712");
let idToRemove = 133712

let index = books.filter(function(element) {
   return element.id != idToRemove
})
console.log(index);

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");

order = index.sort((a,b) => a.title.localeCompare(b.title))

console.log(order);

