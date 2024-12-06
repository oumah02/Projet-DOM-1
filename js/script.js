document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll(".card").forEach((card) => {
        const price = parseFloat(card.querySelector(".unit-price").textContent.replace("$", ""));
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        total += price * quantity;
      });
      document.querySelector(".total").textContent = `${total} $`;
    }
  
    // Ajout des événements à chaque carte produit
    document.querySelectorAll(".card").forEach((card) => {
      const plusButton = card.querySelector(".fa-plus-circle");
      const minusButton = card.querySelector(".fa-minus-circle");
      const deleteButton = card.querySelector(".fa-trash-alt");
      const likeButton = card.querySelector(".fa-heart");
      const quantityElement = card.querySelector(".quantity");
  
      // Augmenter la quantité
      plusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
      });
  
      // Réduire la quantité
      minusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
  
      // Supprimer l'article
      deleteButton.addEventListener("click", () => {
        card.remove();
        updateTotalPrice();
      });
  
      // Aimer/désaimer l'article
      likeButton.addEventListener("click", () => {
        likeButton.style.color = likeButton.style.color === "red" ? "black" : "red";
      });
    });
  
    // Initialiser le prix total
    updateTotalPrice();
  });
  
  