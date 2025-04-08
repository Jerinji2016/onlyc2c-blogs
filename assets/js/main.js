// Import components
import { initThemeToggle } from './components/theme-toggle.js';
import { initDrawer } from './components/drawer.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme toggle
  initThemeToggle();
  
  // Initialize mobile drawer
  initDrawer();
  
  console.log('All components initialized');
});
