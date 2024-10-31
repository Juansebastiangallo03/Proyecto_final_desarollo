// Función para mostrar u ocultar campos según la selección de "¿Eres entrenador?"
document.addEventListener("DOMContentLoaded", function () {
    const trainerCheckbox = document.getElementById('is-trainer');
    const sportInterestField = document.getElementById('sport-interest-field');
    const focusedSportField = document.getElementById('focused-sport-field');
    const priceField = document.getElementById('price-field');

    trainerCheckbox.addEventListener('change', function () {
        if (trainerCheckbox.checked) {
            sportInterestField.style.display = 'none';
            focusedSportField.style.display = 'block';
            priceField.style.display = 'block';
        } else {
            sportInterestField.style.display = 'block';
            focusedSportField.style.display = 'none';
            priceField.style.display = 'none';
        }
    });
});
