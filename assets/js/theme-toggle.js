// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  // Check for saved theme preference or use the system preference
  const getCurrentTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    // Check if user has dark mode enabled at system level
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Apply the current theme
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update toggle button icon
    if (themeToggle) {
      // Show sun icon (☀️) when in dark mode (indicating clicking will switch to light)
      // Show moon icon (🌙) when in light mode (indicating clicking will switch to dark)
      themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');

      // Add a class to help with styling
      themeToggle.className = theme === 'dark' ? 'theme-dark' : 'theme-light';

      // Log the current theme for debugging
      console.log('Current theme:', theme);
    }
  };

  // Initialize theme
  applyTheme(getCurrentTheme());

  // Toggle theme when button is clicked
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      // Add a small animation effect
      themeToggle.classList.add('theme-toggle-spin');
      setTimeout(() => {
        themeToggle.classList.remove('theme-toggle-spin');
      }, 300);

      applyTheme(newTheme);
    });
  }
});
