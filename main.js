// Simple script for mobile menu and interactions

document.addEventListener('DOMContentLoaded', () => {
    console.log('Aseon Landing Page Loaded');

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    const backdrop = document.querySelector('.mobile-menu-backdrop');

    if (mobileBtn && backdrop) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navActions.classList.toggle('active');
            backdrop.classList.toggle('active');
        });

        // Close menu when clicking backdrop
        backdrop.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navActions.classList.remove('active');
            backdrop.classList.remove('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navActions.classList.remove('active');
                backdrop.classList.remove('active');
            });
        });
    }



    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Billing Toggle Functionality
    const billingOptions = document.querySelectorAll('.billing-option');
    const priceElements = document.querySelectorAll('.price[data-monthly]');

    billingOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Update active state
            billingOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Get selected period
            const period = option.getAttribute('data-period');
            const isYearly = period === 'yearly';

            // Update prices
            priceElements.forEach(priceEl => {
                const monthlyPrice = priceEl.getAttribute('data-monthly');
                const yearlyPrice = priceEl.getAttribute('data-yearly');
                const periodSpan = priceEl.querySelector('.period');

                if (isYearly) {
                    // Show yearly price
                    if (yearlyPrice === 'Custom pricing') {
                        priceEl.childNodes[0].textContent = yearlyPrice;
                    } else {
                        priceEl.childNodes[0].textContent = '€' + yearlyPrice;
                        if (periodSpan) periodSpan.textContent = '/year';
                    }
                } else {
                    // Show monthly price
                    if (monthlyPrice === 'Custom pricing') {
                        priceEl.childNodes[0].textContent = monthlyPrice;
                    } else {
                        priceEl.childNodes[0].textContent = '€' + monthlyPrice;
                        if (periodSpan) periodSpan.textContent = '/mo';
                    }
                }
            });
        });
    });
});


