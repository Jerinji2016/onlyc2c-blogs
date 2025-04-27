// Theme toggle component
export const initThemeToggle = () => {
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

    // Apply theme directly to footer
    const footer = document.querySelector('.footer');
    if (footer) {
      if (theme === 'dark') {
        footer.style.backgroundColor = '#0d1520';

        // Toggle logo visibility
        const logoLight = footer.querySelector('.logo-light');
        const logoDark = footer.querySelector('.logo-dark');

        if (logoLight) logoLight.style.display = 'none';
        if (logoDark) logoDark.style.display = 'block';

        // Update text colors
        const headings = footer.querySelectorAll('h3');
        headings.forEach(h => h.style.color = '#eceff1');

        const links = footer.querySelectorAll('a');
        links.forEach(a => a.style.color = '#b0bec5');

        const paragraphs = footer.querySelectorAll('p');
        paragraphs.forEach(p => p.style.color = '#b0bec5');

      } else {
        footer.style.backgroundColor = '#1e2730';

        // Toggle logo visibility
        const logoLight = footer.querySelector('.logo-light');
        const logoDark = footer.querySelector('.logo-dark');

        if (logoLight) logoLight.style.display = 'block';
        if (logoDark) logoDark.style.display = 'none';

        // Update text colors
        const headings = footer.querySelectorAll('h3');
        headings.forEach(h => h.style.color = '#ffffff');

        const links = footer.querySelectorAll('a');
        links.forEach(a => a.style.color = '#e0e0e0');

        const paragraphs = footer.querySelectorAll('p');
        paragraphs.forEach(p => p.style.color = '#e0e0e0');
      }
    }

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
};
