const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers)

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.slice().reverse();
  console.log(reversedTeachers)
  console.log(teachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (i = 0; i < teachers.length; i++){
  const name = teachers[i]
    if (name.length > 4){
      longNames.push(name)
    }
}
console.log(longNames)
// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice (1, 1)
  console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// const isFabioPresent = [];
if (teachers.indexOf("Fabio") !== -1) {
  const isFabioPresent = `Fabio è presente, è il numero ${teachers.indexOf("Fabio") + 1} dell'elenco`
  console.log(isFabioPresent)
}
  else {
    console.log("Fabio non è presente nell'elenco")
  }


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString)