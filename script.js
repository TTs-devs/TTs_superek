const quotes = [
    "„Najlepszy sposób na przewidzenie przyszłości to jej zaprogramowanie.” – Alan Kay",
    "„Kod jest jak dowcip. Jeśli musisz go tłumaczyć, to jest zły.” – Cory House",
    "„Prostota jest warunkiem koniecznym niezawodności.” – Edsger W. Dijkstra",
    "„Pierwsze 90% kodu zajmuje pierwsze 90% czasu. Pozostałe 10% kodu zajmuje drugie 90% czasu.” – Tom Cargill",
    "„Witaj na mojej stronie! Każdy wielki programista zaczynał od 'Hello World!' 🚀”",
    "„Nigdy nie przestawaj się uczyć. Technologia zmienia się każdego dnia! 💡”",
    "„Cieszę się, że tu jesteś! Trzymaj kciuki za moje kolejne projekty! 🎉”"
];

document.addEventListener('DOMContentLoaded', () => {
    const quoteBtn = document.getElementById('quote-btn');
    const quoteBox = document.getElementById('quote-box');
    const quoteText = document.getElementById('quote-text');

    if (quoteBtn && quoteBox && quoteText) {
        quoteBtn.addEventListener('click', () => {
            // Pick a random quote
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];

            // If box is already visible, fade out first then change text
            if (quoteBox.classList.contains('show')) {
                quoteBox.classList.remove('show');
                setTimeout(() => {
                    quoteText.textContent = randomQuote;
                    quoteBox.classList.add('show');
                }, 300);
            } else {
                quoteText.textContent = randomQuote;
                quoteBox.classList.add('show');
            }
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');

    if (contactForm && contactSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear inputs
            contactForm.reset();

            // Hide form with smooth transition or display success
            contactSuccess.classList.remove('hidden');

            // Scroll smoothly to success message if needed
            contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
});
