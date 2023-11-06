const canvas = document.getElementById('canvas');
const numCircles = 180; // Cantidad de círculos
const marginIncrement = 3.5; // Incremento de margen entre círculos en píxeles

function createCircle(index) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    canvas.appendChild(circle);

    const delay = index * 100; // Ajusta el retraso entre círculos aquí
    circle.style.animationDelay = `${delay / 1000}s`;

    // Genera colores en una escala de azules a rojos
    const color = generateColor(index / (numCircles - 1));
    circle.style.borderColor = color;

    // Ajusta el margen inferior
    const marginInicial = index + 20;
    const marginBottom = marginInicial  * marginIncrement;
    circle.style.marginBottom = `${marginBottom}px`;

}

function generateColor(percentage) {
    const blue = Math.round(255 - percentage * 255);
    const red = Math.round(percentage * 255);
    return `rgb(${red}, 0, ${blue})`;
}

for (let i = 0; i < numCircles; i++) {
    createCircle(i);
}