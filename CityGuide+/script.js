window.onload = () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
      // On attend la fin de l'animation (0.8s) avant d'ajouter la classe 'visible'
      card.addEventListener('animationend', () => {
        card.classList.add('visible');
      });
    });
  };