const cardGenerator = () => {
    const suits = ["♠", "♥", "♦", "♣"];
    const numbers = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    const randomSuits = suits[Math.floor(Math.random() * suits.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return {
      suit: randomSuits,
      number: randomNumber
    };
  };
  
  const NewUpdateCard = () => {
    const newCard = cardGenerator();
    const elementCard = document.getElementById("card");
  
    const numbers = elementCard.querySelectorAll(".number");
    numbers.forEach(
      elementNumber => (elementNumber.textContent = newCard.number)
    );
  
    const suits = elementCard.querySelectorAll(".suit");
    suits.forEach(elementSuit => (elementSuit.textContent = newCard.suit));
  };
  
  NewUpdateCard();
  