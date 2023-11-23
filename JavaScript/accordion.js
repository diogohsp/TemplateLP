document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
        // Toggle active class to expand/collapse the accordion item
        item.classList.toggle('active');
        });
    });
    });