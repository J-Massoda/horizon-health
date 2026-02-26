// ====================================
// Horizon Health Africa - JavaScript
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ====================================
    // Navbar Scroll Effect
    // ====================================
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Use debounced scroll handler for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            handleNavbarScroll();
        });
    }, { passive: true });
    
    // ====================================
    // Mobile Menu Toggle
    // ====================================
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // ====================================
    // Smooth Scrolling for Anchor Links
    // ====================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scroll for internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ====================================
    // Intersection Observer for Scroll Animations
    // ====================================
    const animatedElements = [
        ...document.querySelectorAll('.fade-in'),
        ...document.querySelectorAll('.value-card'),
        ...document.querySelectorAll('.service-card')
    ];

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // For staggered animations on cards
                    if (entry.target.classList.contains('value-card') || 
                        entry.target.classList.contains('service-card')) {
                        const cards = entry.target.parentElement.children;
                        Array.from(cards).forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 100); // Stagger by 100ms
                        });
                    }
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
    }
    
    // ====================================
    // CTA Button Interaction
    // ====================================
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ====================================
    // Add Animation Classes on Page Load
    // ====================================
    window.addEventListener('load', function() {
        // Trigger hero animations
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    });
    
    // ====================================
    // Accessibility: Focus Management
    // ====================================
    // Add focus visible class for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
    
    // ====================================
    // Log initialization
    // ====================================
    console.log('Horizon Health Africa - Website Initialized');
});
