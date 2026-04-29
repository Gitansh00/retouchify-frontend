// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    
    // Animate hamburger menu
    const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
    if (mobileNav.classList.contains('active')) {
        hamburgers[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        hamburgers[1].style.opacity = '0';
        hamburgers[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        hamburgers[0].style.transform = 'none';
        hamburgers[1].style.opacity = '1';
        hamburgers[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');
        hamburgers[0].style.transform = 'none';
        hamburgers[1].style.opacity = '1';
        hamburgers[2].style.transform = 'none';
    });
});

// Portfolio filter functionality
const filterTabs = document.querySelectorAll('.filter-tab');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get the selected category
        const category = tab.getAttribute('data-category');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                // Add a small animation
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
// script.js

const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Get form data
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        // Send the data to your backend endpoint using fetch
        const response = await fetch('http://localhost:3000/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Get the response from the server
        const result = await response.json();

        if (result.success) {
            alert('Thank you for your message! I\'ll get back to you within 24 hours.');
            contactForm.reset(); // Reset the form
        } else {
            alert('Sorry, there was an error sending your message. Please try again later.');
        }

    } catch (error) {
        console.error('Fetch error:', error);
        alert('An unexpected error occurred. Please check your connection and try again.');
    } finally {
        // Restore the button to its original state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .feature-item');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Add loading state to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Don't add loading state to form submit buttons or navigation buttons
        if (this.type === 'submit' || this.getAttribute('href')) {
            return;
        }
        
        e.preventDefault();
        
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 2000);
    });
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});
// --- File Upload Logic ---
const uploadForm = document.getElementById('uploadForm');
const photoInput = document.getElementById('photoUpload');
const fileList = document.getElementById('fileList');
const uploadBtn = document.getElementById('uploadBtn');

// Show selected files when the user picks them
photoInput.addEventListener('change', () => {
    fileList.innerHTML = ''; // Clear previous list
    
    if (photoInput.files.length > 0) {
        uploadBtn.style.display = 'block'; // Show the upload button
        
        // List out the names of the selected files
        Array.from(photoInput.files).forEach(file => {
            const fileName = document.createElement('div');
            fileName.textContent = `📁 ${file.name}`;
            fileList.appendChild(fileName);
        });
    } else {
        uploadBtn.style.display = 'none';
    }
});

// Handle the actual upload
uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const originalText = uploadBtn.textContent;
    uploadBtn.textContent = 'Uploading...';
    uploadBtn.disabled = true;

    const formData = new FormData();
    // Append all selected files to the form data
    for (let i = 0; i < photoInput.files.length; i++) {
        formData.append('photos', photoInput.files[i]);
    }

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData // Note: Do NOT set Content-Type header when sending FormData, the browser does it automatically
        });

        const result = await response.json();

        if (result.success) {
            alert('Photos uploaded successfully!');
            uploadForm.reset();
            fileList.innerHTML = '';
            uploadBtn.style.display = 'none';
        } else {
            alert('Error uploading photos.');
        }
    } catch (error) {
        console.error('Upload error:', error);
        alert('An unexpected error occurred during upload.');
    } finally {
        uploadBtn.textContent = originalText;
        uploadBtn.disabled = false;
    }
});