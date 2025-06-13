const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];


people.forEach((person, i, array) => {
  // Stampa in console tutti i nomi
  console.log(person.name); // Risultato: 'Paolo', 'Giulia', 'Marco'

});
