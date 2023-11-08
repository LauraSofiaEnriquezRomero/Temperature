const circlesContainer = document.getElementById("circles-container");

// Crear varios círculos con botones
const numCircles = 5; // Número de círculos a crear
const baseRadius = 100; // Radio inicial

for (let i = 0; i < numCircles; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = `${-100}px`; // Ajusta la posición en el eje Y
  const radius = baseRadius + i * 20; // Aumenta el radio para cada círculo
  circle.style.width = `${2 * radius}px`; // Aumenta el tamaño del círculo
  circle.style.height = `${2 * radius}px`; // Aumenta el tamaño del círculo

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  // Ajuste para elevar la posición de los botones en cada círculo
  const yOffset = -10 * i;

  // Crear 10 botones para cada círculo
  for (let j = 0; j < 12; j++) {
    const button = document.createElement("div");
    button.classList.add("button");
    button.textContent = j + 1;

    const angle = (j * (180 /11)) * (Math.PI / 180); // Distribuye los botones en la mitad superior del círculo
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    // Ajusta la posición x y la elevación del botón
    button.style.left = radius + x - 5 + "px";
    button.style.top = radius + y - 40 + yOffset + "px";

    buttonsContainer.appendChild(button);
  }

  circle.appendChild(buttonsContainer);
  circlesContainer.appendChild(circle);
}

// Aplicar animación a los círculos
const circles = document.querySelectorAll(".circle");
circles.forEach((circle, index) => {
  circle.style.animation = `appear 1s ease forwards ${index * 0.5}s`;
});
