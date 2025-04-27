// Import components
import { initThemeToggle } from './components/theme-toggle.js';
import { initDrawer } from './components/drawer.js';
import { initSmoothScroll } from './components/smooth-scroll.js';
import { initDropdowns } from './components/dropdown.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme toggle
  initThemeToggle();

  // Initialize mobile drawer
  initDrawer();

  // Initialize smooth scrolling for table of contents
  initSmoothScroll();

  // Initialize sidebar dropdowns
  initDropdowns();

  console.log('All components initialized');
});
