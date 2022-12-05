const car = [
    {
        marca : 'mercedes',
        modello : 'classe A',
        alimentazione : 'benzina',
    },
    {
        marca : 'nissan',
        modello : 'juke',
        alimentazione : 'diesel',
    },
    {
        marca : 'tesla',
        modello : 'model X',
        alimentazione : 'elettrica',
    },
    {
        marca : 'chevrolet',
        modello : 'matiz',
        alimentazione : 'gas',
    },
    {
        marca : 'madza',
        modello : 'MX-5',
        alimentazione : 'benzina',
    },
    {
        marca : 'ford',
        modello : 'fiesta',
        alimentazione : 'diesel',
    },
    {
        marca : 'peugeout',
        modello : '208e',
        alimentazione : 'elettrica',
    },
    {
        marca : 'fiat',
        modello : 'panda',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello : '500e',
        alimentazione : 'elettrica',
    },
    {
        marca : 'citroen',
        modello : 'cactus',
        alimentazione : 'diesel',
    }
]

const altro = [];
const benzina = [];
const diesel = [];

for(let i = 0; i < car.length; i++){
    const currentAuto = car[i];
    if (currentAuto.alimentazione === 'benzina'){
        benzina.push(currentAuto);
    } else if (currentAuto.alimentazione === 'diesel'){
        diesel.push(currentAuto);
    } else{
        altro.push(currentAuto);
    }
}

console.log(altro, benzina, diesel)