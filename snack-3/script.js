const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
let boostedNumbers = []; 

numbers.forEach((number) => {
boostedNumbers.push ((number) + 1)
})
console.log(boostedNumbers); // Risultato: [3, 9, 5, 8, 3, 88]

