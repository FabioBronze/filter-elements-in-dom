"use strict";
const filterElements = document.querySelector("#filter");
const cards = document.querySelectorAll(".cards li");

filterElements.addEventListener("input", () => {
  if (filterElements.value !== "") {
    for (let card of cards) {
      let title = card.querySelector("h2");
      title = title.textContent.toLowerCase();
      let filterText = filterElements.value.toLowerCase();
      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
});
