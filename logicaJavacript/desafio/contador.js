let numMax;
let numInicial=1;

function acrescentarContador(numMax) {
    while (numInicial <= numMax) {
        console.log(numInicial);
        numInicial++;
    }
}
function descrescentar(numMax) {
    while (numMax >= 0) {
        console.log(numMax);
        numMax--;
    }
}
descrescentar(10);