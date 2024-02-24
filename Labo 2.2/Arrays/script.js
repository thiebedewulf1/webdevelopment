let familieleden = ['Thiebe', 'Jenne', 'Isolde', 'Peter', 'Jeroen'];

console.log(familieleden.length);

console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

function VoegNaamToe(naam){
    familieleden.push(naam);
}

let extraNaam = prompt();
VoegNaamToe(extraNaam);

console.log(familieleden);

let arrayString = familieleden.join(', ');
console.log(arrayString);