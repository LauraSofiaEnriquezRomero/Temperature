document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento de selección por su ID
    var yearSelect = document.getElementById("year-select");
    var audioElement = document.getElementById("audioElement");
    var playButton = document.querySelector('.btn');

    // Agrega un evento de cambio al elemento de selección
    yearSelect.addEventListener("change", function () {
        // Obtiene el valor seleccionado (el año)
        var selectedYear = yearSelect.value;

        // Crea la ruta del archivo de audio según el año seleccionado
        var audioSource = "./audios/output_" + selectedYear + ".wav";

        // Actualiza la fuente del elemento de audio
        audioElement.src = audioSource;
    });

    // Evento para cambiar el estado del botón cuando el audio se ha reproducido completamente
    audioElement.addEventListener('ended', function () {
        playButton.classList.remove('btn-pause');
        playButton.classList.add('btn-play');
    });
});