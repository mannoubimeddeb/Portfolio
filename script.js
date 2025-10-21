// Sélection des éléments
const content = document.querySelector(".contentproject");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const cardWidth = 320; // Largeur d'une carte + espacement (300px + 20px)

// Clone des cartes pour créer un effet de cycle infini
const cards = Array.from(content.children);
cards.forEach((card) => {
  const clone = card.cloneNode(true);
  content.appendChild(clone); // Ajoute des copies à la fin
});

// Défiler vers la droite
rightArrow.addEventListener("click", () => {
  content.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });

  // Vérifier si la fin est atteinte
  setTimeout(() => {
    if (content.scrollLeft >= content.scrollWidth / 2) {
      content.scrollLeft -= content.scrollWidth / 2;
    }
  }, 500);
});

// Défiler vers la gauche
leftArrow.addEventListener("click", () => {
  content.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });

  // Vérifier si le début est atteint
  setTimeout(() => {
    if (content.scrollLeft <= 0) {
      content.scrollLeft += content.scrollWidth / 2;
    }
  }, 500);
});
