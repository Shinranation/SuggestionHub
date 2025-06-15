document.addEventListener('DOMContentLoaded', function() {

    // --- Hamburger Menu sa phone ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // --- HERO SECTION ANIMATION ---
    const col1 = document.getElementById('feed-col-1');
    const col2 = document.getElementById('feed-col-2');

    // Only run animation on large screens for performance
    if (col1 && col2 && window.innerWidth > 992) {
        window.addEventListener('scroll', function() {
            let scrollY = window.scrollY;
            // move the columns vertically.
            col1.style.transform = `translateY(-${scrollY * 0.15}px)`;
            col2.style.transform = `translateY(${scrollY * 0.08}px)`;
        });
    }
    
    // ---  CAROUSEL SCROLL BUTTONS ---
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const popularCarousel = document.querySelector('.popular-carousel');

    if (scrollLeftBtn && scrollRightBtn && popularCarousel) {
        scrollRightBtn.addEventListener('click', function() {
            const cardWidth = popularCarousel.querySelector('.popular-card').offsetWidth;
            popularCarousel.scrollBy({ left: cardWidth + 30, behavior: 'smooth' }); // 30 is the gap
        });
        
        scrollLeftBtn.addEventListener('click', function() {
            const cardWidth = popularCarousel.querySelector('.popular-card').offsetWidth;
            popularCarousel.scrollBy({ left: -(cardWidth + 30), behavior: 'smooth' });
        });
    }

});