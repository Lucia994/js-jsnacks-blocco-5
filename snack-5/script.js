const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari 
const even = nums.filter((notOdd) => {
    if (notOdd % 2 === 0) {
        return true

    } else return false
 
})
console.log(even); // Risultato: [2, 8, 4, 12]