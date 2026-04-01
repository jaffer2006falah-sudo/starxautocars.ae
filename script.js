// script.js for Star X Auto website

// Navigation functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    let valid = true;

    // Simple name validation
    if (nameInput.value.trim() === '') {
        valid = false;
        alert('Name is required');
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        alert('Please enter a valid email address');
    }

    if (!valid) {
        e.preventDefault();
    }
});