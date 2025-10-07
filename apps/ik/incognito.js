document.addEventListener('DOMContentLoaded', () => {
    // Get the title and favicon elements
    const pageTitle = document.querySelector('title');
    const favicon = document.getElementById('favicon');

    // Save the original settings when the page first loads
    // This will only run once and won't overwrite existing settings.
    function saveDefaultSettings() {
        if (!localStorage.getItem('defaultPageTitle')) {
            localStorage.setItem('defaultPageTitle', pageTitle.textContent);
        }
        if (!localStorage.getItem('defaultPageFavicon')) {
            localStorage.setItem('defaultPageFavicon', favicon.href);
        }
    }
    
    saveDefaultSettings();

    // Function to apply the stored settings from localStorage
    function applySavedSettings() {
        const savedTitle = localStorage.getItem('pageTitle');
        const savedFavicon = localStorage.getItem('pageFavicon');

        if (savedTitle && savedFavicon) {
            pageTitle.textContent = savedTitle;
            favicon.href = savedFavicon;
        }
    }

    // Call the function to apply settings when the page loads
    applySavedSettings();

    // Function to change the title and favicon and save to localStorage
    function changeSettings(newTitle, newFavicon) {
        pageTitle.textContent = newTitle;
        favicon.href = newFavicon;

        // Save the new settings to localStorage
        localStorage.setItem('pageTitle', newTitle);
        localStorage.setItem('pageFavicon', newFavicon);
    }

    // New function to reset the title and favicon
    function resetSettings() {
        // Remove the custom settings from localStorage
        localStorage.removeItem('pageTitle');
        localStorage.removeItem('pageFavicon');
        
        // Revert to original settings
        const defaultTitle = localStorage.getItem('defaultPageTitle');
        const defaultFavicon = localStorage.getItem('defaultPageFavicon');
        
        if (defaultTitle && defaultFavicon) {
            pageTitle.textContent = defaultTitle;
            favicon.href = defaultFavicon;
        }

        // Reload the page to fully apply the original settings
        location.reload();
    }

    // Add click event listeners to each button
    document.getElementById('classBtn')?.addEventListener('click', () => {
        changeSettings('Stream', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/1200px-Google_Classroom_Logo.svg.png');
    });
    document.getElementById('googleBtn')?.addEventListener('click', () => {
        changeSettings('Google', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png');
    });
    document.getElementById('cleverBtn')?.addEventListener('click', () => {
        changeSettings('Clever | Portal', 'https://resources.finalsite.net/images/f_auto,q_auto/v1689877141/mooreschoolscom/emadd6nvplrnh1vsswjf/Clever-Logo.jpg');
    });
    document.getElementById('zearnBtn')?.addEventListener('click', () => {
        changeSettings('Student Home - Zearn', 'https://avatars.githubusercontent.com/u/4174832?s=200&v=4');
    });
    document.getElementById('classlinkBtn')?.addEventListener('click', () => {
        changeSettings('ClassLink', 'https://cdn.prod.website-files.com/5d6db64572061db9c481aaeb/60182c792aab73bd41f28d27_classlink-logo-vertical.png');
    });
    document.getElementById('khanBtn')?.addEventListener('click', () => {
        changeSettings('Dashboard | Khan Academy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-OpYSFRHyU33tMaW_Sf1ckUyNfpNw7rJSQ&s');
    });
    
    // Add event listener for the new reset button
    document.getElementById('resetBtn')?.addEventListener('click', () => {
        resetSettings();
    });
});
