// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]
names[0] = "Henkje";
names[1] = "Pietje";
names[2] = "Fredje";
names[3] = "Joopje";
console.log(names);

// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];
console.log(numbers);
numbers[0] = 6;
numbers[1] = 12;
numbers[2] = 15;
numbers[3] = 87;
numbers[4] = 114;
console.log(numbers);


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];
console.log(squares);
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
squares[0] = 27000;
squares[1] = 8;
squares[2] = 512;
squares[3] = 13824;
squares[4] = 1331;
console.log(squares);
