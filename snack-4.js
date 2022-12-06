const animali = [
    {
        nome : 'leone',
        famiglia : 'felidi',
        classe : 'mammiferi',
    },
    {
        nome : 'cane',
        famiglia : 'canidi',
        classe : 'mammiferi',
    },
    {
        nome : 'gallina',
        famiglia : 'fasianidi',
        classe : 'uccelli',
    },
    {
        nome : 'serpente',
        famiglia : 'colubridi',
        classe : 'rettile',
    },
    {
        nome : 'balena',
        famiglia : 'balenidi',
        classe : 'mammiferi',
    },
    {
        nome : 'lucertola',
        famiglia : 'colubridi',
        classe : 'rettili',
    },
];


const mammiferi = animali.filter( (animale) => animale.classe === 'mammiferi');

console.log(mammiferi);

const nuoviMammiferi = mammiferi.map( (mammifero) => {
    mammifero.nome = mammifero.nome.charAt(0) + mammifero.nome.substring(1).toUpperCase();
    
    return mammifero;
})
