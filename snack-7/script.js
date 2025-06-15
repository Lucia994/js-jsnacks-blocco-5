const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
const secondStudent = students.find((student, i, array) => {
  if (student.id === 2) {
    return true;
  }
  return false;
});

console.log(secondStudent);// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }