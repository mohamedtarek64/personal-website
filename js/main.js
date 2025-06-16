// Main JavaScript file for Mohamed Elkenary's portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize typed.js
    const options = {
        strings: ['Web Development', 'System Design', 'Backend Development', 'Software Engineering'],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true,
        cursorChar: '|',
        showCursor: true,
    };
    
    const typed = new Typed('#typed-strings', options);
    
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        // If particles.js fails to load, make the network background visible
        document.querySelector('.network-background').style.opacity = '0.3';
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        root.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        if (root.classList.contains('light-mode')) {
            root.classList.remove('light-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.add('light-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Scroll to top button functionality
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('toggle');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('toggle');
                navLinks.classList.remove('active');
            }
        });
    });

    // Animate skill items when they come into view
    const animateOnScroll = () => {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8 && !item.classList.contains('animated')) {
                // Add a class to mark this item as already animated
                item.classList.add('animated');
                
                // Reset animation without affecting visibility
                item.style.animation = 'none';
                item.offsetHeight; // Trigger reflow
                
                // Apply animation without changing opacity
                const index = Array.from(item.parentNode.children).indexOf(item);
                const delay = 0.1 * index;
                
                // Use CSS animation but ensure item remains visible
                item.style.animation = `fadeInSkill 0.5s ${delay}s forwards`;
            }
        });
    };

    // Initial check for elements in view
    animateOnScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Sticky navbar with background change on scroll
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
        }
    });

    // CV Download button functionality
    const downloadBtn = document.getElementById('downloadCV');
    const downloadSuccess = document.querySelector('.download-success');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Don't prevent default so the download starts
            
            // Add loading class
            this.classList.add('loading');
            
            // Simulate loading and show success message
            setTimeout(() => {
                this.classList.remove('loading');
                downloadSuccess.classList.add('show');
                
                // Hide success message after a few seconds
                setTimeout(() => {
                    downloadSuccess.classList.remove('show');
                }, 3000);
            }, 1500);
        });
    }
}); 