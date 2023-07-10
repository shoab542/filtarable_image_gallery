const filterButton = document.querySelectorAll(".filtered_button button");
const filteredCards = document.querySelectorAll(".filltered_card .card");
const filterCards = (event) => {
  console.log("Hello", filteredCards);
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");

  filteredCards.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === event.target.dataset.name ||
      event.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterButton.forEach((button) => button.addEventListener("click", filterCards));
