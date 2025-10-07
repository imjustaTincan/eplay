function showDriveMad() {
  const drivemadPage = document.getElementById('app-drivemad-page');
  const appGrid = document.getElementById('app-grid');
  
  drivemadPage.classList.add('slide-in');
  appGrid.classList.add('slide-out');
}

function hideDriveMad() {
  const drivemadPage = document.getElementById('app-drivemad-page');
  const appGrid = document.getElementById('app-grid');

  drivemadPage.classList.remove('slide-in');
  appGrid.classList.remove('slide-out');
}

function drivemadInstall() {
  const installButton = document.querySelector('.install-drivemad');
  const installProgress = document.getElementById('drivemad-progress');

  // Hide the "Get" button
  installButton.style.display = 'none';

  // Set the display of the progress indicator to "block"
  installProgress.style.display = 'block';

  // You can add more logic here for the actual installation,
  // like changing the text or showing a progress bar.
}
function showHide2() {
  const hide2Page = document.getElementById('app-hide2-page');
  const appGrid = document.getElementById('app-grid');
  
  hide2Page.classList.add('slide-in');
  appGrid.classList.add('slide-out');
}

function hideHide2() {
  const hide2Page = document.getElementById('app-hide2-page');
  const appGrid = document.getElementById('app-grid');

  hide2Page.classList.remove('slide-in');
  appGrid.classList.remove('slide-out');
}

function startHide2() {
  const installButton = document.querySelector('.install-hide2');
  const installProgress = document.getElementById('hide2-progress');

  // Hide the "Get" button
  installButton.style.display = 'none';

  // Set the display of the progress indicator to "block"
  installProgress.style.display = 'block';

   localStorage.setItem('hide2-installed', 'true');
  // You can add more logic here for the actual installation,
  // like changing the text or showing a progress bar.
}
