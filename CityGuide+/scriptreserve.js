document.getElementById("paymentMethod").addEventListener("change", function() {
    let selectedValue = this.value;
    let cardDetails = document.getElementById("cardDetails");

    // Affiche les champs de carte seulement si Visa ou MasterCard est sélectionné
    if (selectedValue === "visa" || selectedValue === "mastercard") {
        cardDetails.style.display = "block";
    } else {
        cardDetails.style.display = "none";
    }
});