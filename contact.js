document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission

        // Reset errors
        let isValid = true;
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        phoneError.style.display = 'none';
        messageError.style.display = 'none';
        formSuccess.style.display = 'none';

        // Validate Name (not empty)
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        }

        // Validate Email (not empty and valid format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            isValid = false;
        }

        // Validate Phone (not empty and contains only digits)
        const phoneRegex = /^\d+$/;
        if (phoneInput.value.trim() === '' || !phoneRegex.test(phoneInput.value.trim())) {
            phoneError.style.display = 'block';
            isValid = false;
        }

        // Validate Message (not empty)
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Show success message and reset form
            formSuccess.style.display = 'block';
            contactForm.reset();
        }
    });
});
