document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const splashVideo = document.getElementById('splash-video');
    const mainContent = document.getElementById('main-content');

    // Hide the splash screen after the video finishes playing
    splashVideo.addEventListener('ended', () => {
        // Add the 'hidden' class to trigger the CSS fade-out
        splashScreen.classList.add('hidden');

        // After the fade-out transition, completely hide the splash screen
        // and show the main content.
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000); // The timeout duration should match the CSS transition duration
    });
});
