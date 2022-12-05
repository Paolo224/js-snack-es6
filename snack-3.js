const zucchina = [
    {
        'varietà' : 'veneta',
        'peso' : 500,
        'lunghezza' : 12,
    },
    {
        'varietà' : 'piemontese',
        'peso' : 100,
        'lunghezza' : 24,
    },
    {
        'varietà' : 'sarda',
        'peso' : 200,
        'lunghezza' : 7,
    },
    {
        'varietà' : 'campana',
        'peso' : 100,
        'lunghezza' : 11,
    },
    {
        'varietà' : 'calabrese',
        'peso' : 400,
        'lunghezza' : 12,
    },
    {
        'varietà' : 'pugliese',
        'peso' : 500,
        'lunghezza' : 24,
    },
    {
        'varietà' : 'abbruzzese',
        'peso' : 200,
        'lunghezza' : 7,
    },
    {
        'varietà' : 'veneta',
        'peso' : 100,
        'lunghezza' : 12,
    },
    {
        'varietà' : 'sarda',
        'peso' : 500,
        'lunghezza' : 7,
    },
    {
        'varietà' : 'campana',
        'peso' : 200,
        'lunghezza' : 24,
    }
];

let sommaLunghezza = 0;
let sommaPeso = 0;
let mediaLunghezza = 0;
let mediaPeso = 0;

for (let i = 0; i < zucchina.length; i++){
    const zucchinaCorrente = zucchina[i];
    sommaLunghezza += zucchinaCorrente.lunghezza;
    mediaLunghezza = sommaLunghezza / zucchina.length;
    sommaPeso += zucchinaCorrente.peso;
    mediaPeso = sommaPeso / zucchina.length;
}

console.log('La somma del peso delle zucchine è di: ' + sommaLunghezza + ' centimetri');
console.log('La media della lunghezza e del peso: ' + mediaLunghezza + ' ' + mediaPeso);
