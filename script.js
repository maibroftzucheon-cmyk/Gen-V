const filterButtons = document.querySelectorAll(".filter-button");
const stylistCards = document.querySelectorAll(".stylist-card");
const stylistSearch = document.querySelector("#stylistSearch");
const noResults = document.querySelector("#noResults");
const stylistCount = document.querySelector("#stylistCount");
const clearSearch = document.querySelector("#clearSearch");
let selectedCategory = "all";

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterStylists();
    });
});

stylistSearch.addEventListener("input", function () {
    filterStylists();
});
clearSearch.addEventListener("click", function () {
    stylistSearch.value = "";

    selectedCategory = "all";

    filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    document
        .querySelector('.filter-button[data-filter="all"]')
        .classList.add("active");

    filterStylists();
});


function filterStylists() {
    const searchText = stylistSearch.value.toLowerCase().trim();
    let visibleCards = 0;

    stylistCards.forEach(function (card) {
        const cardCategory = card.dataset.category;
        const stylistName = card.querySelector("h3").textContent.toLowerCase();

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;

        const matchesSearch =
            stylistName.includes(searchText);

        if (matchesCategory && matchesSearch) {
            card.classList.remove("hidden");
            visibleCards++;
        } else {
            card.classList.add("hidden");
        }
    });

    if (visibleCards === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

    const label = visibleCards === 1 ? "stylist" : "stylists";
    stylistCount.textContent = `${visibleCards} ${label} found`;
}

filterStylists();
const bookingForm = document.querySelector(".booking-form");
const bookingMessage = document.querySelector("#bookingMessage");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        bookingMessage.textContent =
            "Your appointment request has been received. This is a demo and no appointment has been booked yet.";

        bookingForm.reset();
    });
}