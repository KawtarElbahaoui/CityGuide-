document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.card a button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche la navigation immédiate

            let card = this.closest('.card'); // Trouver l'élément parent (carte)

            // Appliquer l'effet de zoom avec JavaScript
            card.style.transition = "transform 0.5s ease-in-out"; // Animation fluide
            card.style.transform = "scale(1.2)"; // Zoom à 120%

            // Attendre un moment avant de rediriger vers la page cible
            setTimeout(() => {
                window.location.href = this.parentElement.getAttribute('href');
            }, 500); // Attente de 500ms pour voir l'effet
        });
    });
});


