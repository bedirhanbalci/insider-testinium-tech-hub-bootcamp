document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const selectButtons = document.querySelectorAll(".select-btn");

  cards.forEach((card, cardIndex) => {
    const priceElement = card.querySelector(".price");
    const originalPriceContent = priceElement.innerHTML;
    const originalPriceText = priceElement.textContent.match(/(\d+) TL/)[1];
    const originalPriceValue = parseFloat(originalPriceText);

    card.addEventListener("mouseover", () => {
      const discountedPriceValue = (originalPriceValue / 2).toFixed(2);
      priceElement.innerHTML = `
        <span style="text-decoration: line-through;">${originalPriceValue} TL/AY</span>
        <br>${discountedPriceValue} TL/AY <span style="color: red;">%50</span>
      `;
    });
    card.addEventListener("mouseout", () => {
      priceElement.innerHTML = originalPriceContent;
    });

    priceElement.setAttribute("data-original", originalPriceContent);
  });

  selectButtons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      toggleCardSelection(buttonIndex);
    });
  });

  const toggleCardSelection = selectedCardIndex => {
    const selectedCard = cards[selectedCardIndex];
    const selectedButton = selectButtons[selectedCardIndex];

    if (selectedCard.classList.contains("selected")) {
      selectedCard.classList.remove("selected");
      selectedButton.textContent = "Seç";
    } else {
      cards.forEach(card => card.classList.remove("selected"));
      selectButtons.forEach(button => (button.textContent = "Seç"));

      selectedCard.classList.add("selected");
      selectedButton.textContent = "Seçildi";
    }
  };

  document.addEventListener("keydown", event => {
    const key = event.key;
    if (key >= 1 && key <= 6) {
      const cardIndex = key - 1;
      if (cards[cardIndex]) {
        toggleCardSelection(cardIndex);
      }
    }
  });
});
