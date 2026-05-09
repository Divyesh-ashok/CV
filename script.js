// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const hoverTargets = document.querySelectorAll('.hover-target');

document.addEventListener('mousemove', (e) => {
    // Update cursor position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect to interactive elements
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });

    target.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hover-to-reveal logic for experience items
const experienceRows = document.querySelectorAll('.experience-row');

experienceRows.forEach(row => {
    const imgWrapper = row.querySelector('.hover-reveal-img');

    row.addEventListener('mousemove', (e) => {
        if (imgWrapper) {
            // Position the image slightly offset from the cursor
            imgWrapper.style.left = e.clientX + 'px';
            imgWrapper.style.top = e.clientY + 'px';
            imgWrapper.style.opacity = '1';
            imgWrapper.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });

    row.addEventListener('mouseleave', () => {
        if (imgWrapper) {
            imgWrapper.style.opacity = '0';
            imgWrapper.style.transform = 'translate(-50%, -50%) scale(0.8)';
        }
    });
});

// Intersection Observer for Fade-in Animations
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target); // Optional: only animate once
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});
