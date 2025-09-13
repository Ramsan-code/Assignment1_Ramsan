function filterByGenre(genre) {
  const cards = document.querySelectorAll(".movie-card");
  const buttons = document.querySelectorAll(".genre-buttons button");

  buttons.forEach((btn) => btn.classList.remove("active"));

  event.target.classList.add("active");

  cards.forEach((card) => {
    if (genre === "all") {
      card.classList.remove("hidden");
    } else {
      const cardGenres = card.dataset.genre.toLowerCase();
      if (cardGenres.includes(genre.toLowerCase())) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  });
}

function filterByLetter(letter) {
  const cards = document.querySelectorAll(".movie-card");

  cards.forEach((card) => {
    const title = card.dataset.title;
    if (letter === "0-9") {
      if (/^\d/.test(title)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    } else {
      if (title.charAt(0).toUpperCase() === letter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  });
}

function searchContent() {
  const searchTerm = document.getElementById("enter-text").value.toLowerCase();
  const cards = document.querySelectorAll(".movie-card");

  cards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const genre = card.dataset.genre.toLowerCase();

    if (title.includes(searchTerm) || genre.includes(searchTerm)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

function showAll() {
  const cards = document.querySelectorAll(".movie-card");
  cards.forEach((card) => card.classList.remove("hidden"));

  const buttons = document.querySelectorAll(".genre-buttons button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[0].classList.add("active");
}
