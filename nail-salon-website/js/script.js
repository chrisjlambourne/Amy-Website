const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
/* --- PRODUCT TOGGLE FUNCTION --- */
function toggleProduct(element) {
    // 1. Close all other cards first (Optional: keeps it clean)
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => {
        if (card !== element) {
            card.classList.remove('active');
        }
    });

    // 2. Toggle the clicked card
    element.classList.toggle('active');
}