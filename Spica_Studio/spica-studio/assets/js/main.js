document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate links staggering in
            const links = navLinks.querySelectorAll('li');
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `pageFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
                    link.style.opacity = '0'; // Ensure hidden initially
                }
            });
        });
    }

    // 2. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Automatically select elements to animate
    const elementsToAnimate = document.querySelectorAll('section, .product-card, .footer-section, h1, form, .container > div');

    elementsToAnimate.forEach((el, index) => {
        el.classList.add('reveal');
        observer.observe(el);

        // Add stagger effect to cards in the same container
        if (el.classList.contains('product-card')) {
            // Simple stagger based on DOM order index modulo to reset every row roughly
            const delay = (index % 3) * 100;
            el.style.transitionDelay = `${delay}ms`;
        }
    });
});
