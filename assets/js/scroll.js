document.addEventListener('DOMContentLoaded', () => {
        const pageContainer = document.querySelector('.page-container');
        const sections = document.querySelectorAll('.page-section');
        const dots = document.querySelectorAll('.dot');
        let currentSectionIndex = 0;

        function updateActiveDot() {
            dots.forEach((dot, index) => {
                if (index === currentSectionIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function scrollToSection(index) {
            if (index >= 0 && index < sections.length) {
                currentSectionIndex = index;
                pageContainer.style.transform = `translateX(-${currentSectionIndex * 100}vw)`; // Changed to translateX and vw
                updateActiveDot();
            }
        }

        // Initial setup
        updateActiveDot();

        // Handle dot clicks
        dots.forEach(dot => {
            dot.addEventListener('click', (event) => {
                const targetId = event.target.dataset.target;
                const targetSection = document.getElementById(targetId);
                const index = Array.from(sections).indexOf(targetSection);
                scrollToSection(index);
            });
        });

        // Handle scroll (mouse wheel/trackpad)
        let isScrolling = false;
        document.addEventListener('wheel', (event) => {
            if (isScrolling) return;
            isScrolling = true;
            setTimeout(() => {
                isScrolling = false;
            }, 700); // Debounce scroll event

            if (event.deltaX > 0) { // Changed to deltaX for horizontal scroll
                // Scrolling right
                scrollToSection(currentSectionIndex + 1);
            } else if (event.deltaX < 0) { // Changed to deltaX for horizontal scroll
                // Scrolling left
                scrollToSection(currentSectionIndex - 1);
            }
        });

        // Optional: Handle keyboard navigation (Arrow Left/Right)
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') { // Changed to ArrowRight
                scrollToSection(currentSectionIndex + 1);
            } else if (event.key === 'ArrowLeft') { // Changed to ArrowLeft
                scrollToSection(currentSectionIndex - 1);
            }
        });
    });
        document.addEventListener('DOMContentLoaded', () => {
        const pageContainer = document.querySelector('.page-container');
        const sections = document.querySelectorAll('.page-section');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;
        let startX = 0;
        let isSwiping = false;

        function updatePagePosition() {
            pageContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
            updateDots();
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Handle dot clicks
        dots.forEach(dot => {
            dot.addEventListener('click', (event) => {
                const targetSectionId = event.target.dataset.target;
                const targetSection = document.getElementById(targetSectionId);
                currentIndex = Array.from(sections).indexOf(targetSection);
                updatePagePosition();
            });
        });

        // Touch event handlers for swiping
        pageContainer.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
            isSwiping = true;
        });

        pageContainer.addEventListener('touchmove', (event) => {
            if (!isSwiping) return;
            const currentX = event.touches[0].clientX;
            const diffX = startX - currentX;
            // Optional: Provide visual feedback during swipe
            // pageContainer.style.transform = `translateX(calc(-${currentIndex * 100}vw - ${diffX}px))`;
        });

        pageContainer.addEventListener('touchend', (event) => {
            if (!isSwiping) return;
            const endX = event.changedTouches[0].clientX;
            const diffX = startX - endX; // Positive for left swipe, negative for right swipe
            const swipeThreshold = 50; // Minimum distance to register a swipe

            if (diffX > swipeThreshold && currentIndex < sections.length - 1) {
                currentIndex++; // Swipe left
            } else if (diffX < -swipeThreshold && currentIndex > 0) {
                currentIndex--; // Swipe right
            }
            updatePagePosition();
            isSwiping = false;
        });

        // Optional: Mouse event handlers for desktop dragging
        let isDragging = false;
        let dragStartX = 0;

        pageContainer.addEventListener('mousedown', (event) => {
            isDragging = true;
            dragStartX = event.clientX;
            pageContainer.style.cursor = 'grabbing';
        });

        pageContainer.addEventListener('mousemove', (event) => {
            if (!isDragging) return;
            event.preventDefault(); // Prevent text selection during drag
            const currentX = event.clientX;
            const diffX = dragStartX - currentX;
            // Optional: Visual feedback during drag
            // pageContainer.style.transform = `translateX(calc(-${currentIndex * 100}vw - ${diffX}px))`;
        });

        pageContainer.addEventListener('mouseup', (event) => {
            if (!isDragging) return;
            const endX = event.clientX;
            const diffX = dragStartX - endX;
            const dragThreshold = 50;

            if (diffX > dragThreshold && currentIndex < sections.length - 1) {
                currentIndex++;
            } else if (diffX < -dragThreshold && currentIndex > 0) {
                currentIndex--;
            }
            updatePagePosition();
            isDragging = false;
            pageContainer.style.cursor = 'grab';
        });

        pageContainer.addEventListener('mouseleave', () => {
            if (isDragging) {
                // If mouse leaves while dragging, reset to current section
                updatePagePosition();
                isDragging = false;
                pageContainer.style.cursor = 'grab';
            }
        });

        updatePagePosition(); // Initialize position and dots
    });