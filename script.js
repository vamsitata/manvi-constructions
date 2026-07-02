/**
 * MANVI CONSTRUCTIONS - PREMIUM JS MODULE
 * =======================================
 * Includes interactive animations, sticky header transitions, active state updates,
 * scroll reveal, stats counter, ripple buttons, and WhatsApp form submission redirect.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Header & Back to Top & Active Highlights ---
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Performance optimized scroll handling via requestAnimationFrame
    let activeFrame = false;
    
    const handleScroll = () => {
        if (activeFrame) return;
        activeFrame = true;
        
        window.requestAnimationFrame(() => {
            const scrollPos = window.scrollY;
            
            // Sticky header
            if (scrollPos > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
            
            // Back to top button
            if (scrollPos > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
            
            activeFrame = false;
        });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Active navigation highlighting using highly performant Intersection Observer
    const navObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };
    
    const navObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);
    sections.forEach(section => {
        navObserver.observe(section);
    });
    
    
    // --- 2. Mobile Menu Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when links are clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    
    // --- 3. Scroll Reveal Animation using Intersection Observer ---
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after animating once to lock state
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    
    // --- 4. Counter Animation for statistics ---
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const startCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / target), 15);
        let current = 0;
        
        // Custom increment to make speed feel natural
        const increment = target > 50 ? Math.ceil(target / 100) : 1;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.parentNode.querySelector('.stat-title').textContent.includes('%') || element.textContent.includes('%') ? '' : '+');
                // Check if delivery stat to add percent character
                if (element.getAttribute('data-target') === "100") {
                    element.textContent = "100%";
                }
                clearInterval(timer);
            } else {
                element.textContent = current;
            }
        }, stepTime);
    };
    
    const statsSection = document.querySelector('.stats');
    let countersStarted = false;
    
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                statNumbers.forEach(num => startCounter(num));
                countersStarted = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    
    // --- 5. Custom Button Ripple Effect ---
    const rippleButtons = document.querySelectorAll('.btn-ripple');
    
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Find current coordinates
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            // Remove after animation finishes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    
    // --- 6. Form Submission Redirecting to WhatsApp ---
    const whatsappForm = document.getElementById('whatsappForm');
    
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const projectType = document.getElementById('project-type').value;
        const details = document.getElementById('details').value.trim();
        
        // Simple client validation
        if (!fullname || !phone || !projectType || !details) {
            alert('Please fill out all fields before sending.');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phone.replace(/[^0-9]/g, '');
        if (cleanPhone.length < 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        
        // Construct custom luxury WhatsApp text
        const message = `Hello Manvi Constructions,\n\nI would like to request a luxury design consultation.\n\n*Client Details*:\n- *Name*: ${fullname}\n- *Phone*: ${phone}\n\n*Project Details*:\n- *Project Type*: ${projectType}\n- *Scope & Location*: ${details}\n\nPlease let me know when your specialist is available. Thank you!`;
        
        const encodedMessage = encodeURIComponent(message);
        
        // Business WhatsApp URL (using India code +91)
        const whatsappNumber = '918886677777'; 
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp web or app link
        window.open(whatsappUrl, '_blank');
    });
    
    
    // --- 7. Sticky Back to Top Button Click ---
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 8. Dynamic Select Label Toggler Helper ---
    const selectEl = document.getElementById('project-type');
    const updateSelect = () => {
        if (selectEl.value) {
            selectEl.classList.add('has-value');
        } else {
            selectEl.classList.remove('has-value');
        }
    };
    selectEl.addEventListener('change', updateSelect);
    selectEl.addEventListener('blur', updateSelect);
    updateSelect();
});
