document.addEventListener('DOMContentLoaded', (event) => {
  // Get the installation status from localStorage
  const isInstalled = localStorage.getItem('hide2-installed');
  
  // Get the container for the app
  const clickerh2Container = document.getElementById('clickerh2');
  
  // Check if the app is installed
  if (isInstalled === 'true' && clickerh2Container) {
    // If installed, change the CSS to make the container visible
    clickerh2Container.style.display = 'block';
  }
});