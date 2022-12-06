const persone = [
    {
        nome : 'Luca',
        cognome : 'Bianchi',
        age : 30,
    },
    {
        nome : 'Giacomo',
        cognome : 'Rossi',
        age : 39,
    },
    {
        nome : 'Andrea',
        cognome : 'Verdi',
        age : 43,
    },
    {
        nome : 'Alberto',
        cognome : 'Gialli',
        age : 8,
    },
    {
        nome : 'Marco',
        cognome : 'Marroni',
        age : 47,
    },
    {
        nome : 'Domenico',
        cognome : 'Violi',
        age : 98,
    },
    {
        nome : 'Alessandro',
        cognome : 'Aranci',
        age : 6,
    },
    {
        nome : 'Filippo',
        cognome : 'Magenti',
        age : 16,
    },
    {
        nome : 'Donato',
        cognome : 'Cyani',
        age : 23,
    },
    {
        nome : 'Lorenzo',
        cognome : 'Marroni',
        age : 40,
    },
];

const personaCheNonPossonoGuidare = [];

persone.forEach((persona) => {
    if(persona.age < 18){
        // console.log(persona.nome + persona.cognome + 'Non può guidare!!!');
        personaCheNonPossonoGuidare.push(persona + 'Non può guidare!!!')
    }
})