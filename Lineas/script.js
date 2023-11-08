const circlesContainer = document.getElementById("circles-container");
const yearSelect = document.getElementById("year-select");
const circles = [];

// Función para mostrar u ocultar círculos y botones en función de la selección
function updateCirclesAndButtons() {
  const selectedYear = parseInt(yearSelect.value, 10);

  // Ocultar todos los círculos y botones
  circles.forEach((circle) => {
    circle.style.display = "none";
  });

  // Mostrar los círculos y botones seleccionados
  for (let i = 0; i < selectedYear; i++) {
    circles[i].style.display = "block";
  }
}

// Agregar un evento de cambio al elemento select
yearSelect.addEventListener("change", updateCirclesAndButtons);

// Crear varios círculos con botones
const numCircles = 10; // Número de círculos a crear
const baseRadius = 100; // Radio inicial

for (let i = 0; i < numCircles; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = `${-100}px`; // Ajusta la posición en el eje Y
  const radius = baseRadius + i * 20; // Aumenta el radio para cada círculo
  circle.style.width = `${2 * radius}px`; // Aumenta el tamaño del círculo
  circle.style.height = `${2 * radius}px`; // Aumenta el tamaño del círculo
  circles.push(circle); // Agregar el círculo a la lista de círculos

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  // Ajuste para elevar la posición de los botones en cada círculo
  const yOffset = -10 * i;

  // Crear 10 botones para cada círculo
  for (let j = 0; j < 12; j++) {
    const button = document.createElement("div");
    button.classList.add("button");
    button.textContent = j + 1;

    const angle = (j * (180 / 11)) * (Math.PI / 180); // Distribuye los botones en la mitad superior del círculo
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
circles.forEach((circle, index) => {
  circle.style.animation = `appear 1s ease forwards ${index * 0.5}s`;
});

// Llamar a la función inicialmente para mostrar los círculos iniciales
updateCirclesAndButtons();
