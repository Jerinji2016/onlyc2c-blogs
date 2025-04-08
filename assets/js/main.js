// Import components
import { initThemeToggle } from './components/theme-toggle.js';
import { initDrawer } from './components/drawer.js';
import { initSmoothScroll } from './components/smooth-scroll.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme toggle
  initThemeToggle();

  // Initialize mobile drawer
  initDrawer();

  // Initialize smooth scrolling for table of contents
  initSmoothScroll();

  console.log('All components initialized');
});
