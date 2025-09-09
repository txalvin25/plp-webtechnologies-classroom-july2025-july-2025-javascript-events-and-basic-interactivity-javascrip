// script.js

// Event listener for light/dark mode toggle
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Event listener for collapsible FAQ section
const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Custom form validation
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    let valid = true;
    errorMessage.textContent = '';

    // Validate name
    if (nameInput.value.trim() === '') {
        valid = false;
        errorMessage.textContent += 'Name is required.\n';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        errorMessage.textContent += 'Please enter a valid email address.\n';
    }

    // Validate password
    if (passwordInput.value.length < 6) {
        valid = false;
        errorMessage.textContent += 'Password must be at least 6 characters long.\n';
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission
        alert(errorMessage.textContent);
    } else {
        alert('Form submitted successfully!');
    }
});