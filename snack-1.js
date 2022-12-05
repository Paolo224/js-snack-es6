const studente = {
    'name' : 'Filippo',
    'surname' : 'Bianchi',
    'age' : 30,
};

const array = [];

for (let key in studente){
    console.log(key + ': ' + studente[key]);
}

array.push(studente);
console.log(array);