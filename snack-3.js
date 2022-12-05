const zucchina = [
    {
        'varietà' : 'veneta',
        'peso' : '500 g',
        'lunghezza' : 12,
    },
    {
        'varietà' : 'piemontese',
        'peso' : '1,5 kg',
        'lunghezza' : 24,
    },
    {
        'varietà' : 'sarda',
        'peso' : '2 kg',
        'lunghezza' : 7,
    },
    {
        'varietà' : 'campana',
        'peso' : '1 kg',
        'lunghezza' : 11,
    },
    {
        'varietà' : 'calabrese',
        'peso' : '400 g',
        'lunghezza' : 12,
    },
    {
        'varietà' : 'pugliese',
        'peso' : '5 kg',
        'lunghezza' : 24,
    },
    {
        'varietà' : 'abbruzzese',
        'peso' : '2 kg',
        'lunghezza' : 7,
    },
    {
        'varietà' : 'veneta',
        'peso' : '1 kg',
        'lunghezza' : 12,
    },
    {
        'varietà' : 'sarda',
        'peso' : '500 g',
        'lunghezza' : 7,
    },
    {
        'varietà' : 'campana',
        'peso' : '2 kg',
        'lunghezza' : 24,
    }
];

let somma = 0;

for (let i = 0; i < zucchina.length; i++){
    const zucchinaCorrente = zucchina[i];
    somma += zucchinaCorrente.lunghezza
}

console.log('La somma del peso delle zucchine è di: ' + somma + ' centimetri');