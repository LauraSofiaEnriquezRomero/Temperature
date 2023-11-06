const temperatures = {
  1880: [-18,-24,-9,-16,-10,-22,-18,-10,-14,-23,-22,-18],
  
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function showTemperatures() {
  const year = document.getElementById("years").value;
  const container = document.getElementById("circulo-container");
  container.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    const circle = document.createElement("div");
    circle.className = "circulo";
    circle.setAttribute("data-temperature", temperatures[year][i]);
    circle.setAttribute("data-month", i + 1);
    container.appendChild(circle);

    circle.addEventListener("mouseenter", showTemperature);
    circle.addEventListener("mouseleave", hideTemperature);
  }
}

function showTemperature(event) {
  const temperature = event.target.getAttribute("data-temperature");
  const monthIndex = event.target.getAttribute("data-month") - 1; // Restar 1 porque los índices comienzan desde 0
  const monthName = months[monthIndex];
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = `${monthName}: ${temperature}°C`;
  event.target.appendChild(tooltip);
}

function hideTemperature(event) {
  const tooltip = event.target.querySelector(".tooltip");
  if (tooltip) {
    event.target.removeChild(tooltip);
  }
}

showTemperatures(); // Mostrar círculos al cargar la página
