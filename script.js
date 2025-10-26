// ===========================
// TEASERS CLE - LANDING PAGE
// JavaScript Functionality
// ===========================

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Get form and success message elements
    const form = document.getElementById('notifyForm');
    const successMessage = document.getElementById('successMessage');

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            // Note: We don't prevent default here because Netlify Forms
            // needs the default form submission behavior to work
            // However, we can add additional logic if needed

            // Optional: Add loading state to submit button
            const submitBtn = form.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }
        });
    }

    // Check URL for Netlify form success redirect
    // Netlify automatically adds ?success=true or redirects to /success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showSuccessMessage();
    }

    // Alternative: Listen for Netlify form success event
    // This works if form submission stays on same page
    window.addEventListener('load', function() {
        if (window.location.hash === '#success') {
            showSuccessMessage();
        }
    });

    // Function to show success message
    function showSuccessMessage() {
        if (form && successMessage) {
            form.style.display = 'none';
            successMessage.classList.add('show');

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Optional: Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle parallax effect on scroll (optional enhancement)
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        const hero = document.querySelector('.hero');

        if (hero) {
            // Subtle fade effect on scroll
            const opacity = Math.max(0.3, 1 - currentScrollY / 500);
            hero.style.opacity = opacity;
        }

        lastScrollY = currentScrollY;
    }, { passive: true });

    // Add entrance animations for form fields (stagger effect)
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, 1800 + (index * 100)); // Stagger by 100ms
    });

    // Log page load (for debugging)
    console.log('Teasers CLE landing page loaded successfully');
});

// Optional: Add custom form validation messages
document.addEventListener('invalid', function(e) {
    e.preventDefault();
    const input = e.target;

    if (input.validity.valueMissing) {
        input.setCustomValidity('This field is required');
    } else if (input.validity.typeMismatch && input.type === 'email') {
        input.setCustomValidity('Please enter a valid email address');
    }
}, true);

document.addEventListener('input', function(e) {
    const input = e.target;
    input.setCustomValidity('');
}, true);
