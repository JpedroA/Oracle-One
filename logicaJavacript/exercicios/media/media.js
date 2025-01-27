let notas = [];

while (notas.length < 4) {
    notas.push(parseFloat(prompt('Digite uma nota')));
}
media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
media = Math.round(media);
let resultado = document.querySelector('p');
resultado.innerHTML = `A media das notas digitadas foi: ${media}`
