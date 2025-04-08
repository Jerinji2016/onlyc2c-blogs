// Mobile drawer functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-toggle');
  const closeButton = document.getElementById('sidebar-close');
  const drawer = document.querySelector('.sidebar');
  const overlay = document.getElementById('drawer-overlay');
  const body = document.body;

  // Function to open the drawer
  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('visible');
    body.classList.add('drawer-open');
    menuButton.setAttribute('aria-expanded', 'true');
  };

  // Function to close the drawer
  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    body.classList.remove('drawer-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  // Toggle drawer when menu button is clicked
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  // Close drawer when close button is clicked
  if (closeButton) {
    closeButton.addEventListener('click', closeDrawer);
  }

  // Close drawer when overlay is clicked
  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  // Close drawer when ESC key is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Close drawer when window is resized to desktop size
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Log for debugging
  console.log('Drawer functionality initialized');
});
