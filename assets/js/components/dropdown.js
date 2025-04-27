// Sidebar dropdown component
export const initDropdowns = () => {
  // Get all dropdown toggles
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Function to toggle dropdown
  const toggleDropdown = (toggle) => {
    const dropdownContent = toggle.nextElementSibling;
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    
    // Toggle aria-expanded attribute
    toggle.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle the dropdown content visibility
    if (isExpanded) {
      dropdownContent.classList.remove('expanded');
    } else {
      dropdownContent.classList.add('expanded');
    }
  };

  // Add click event listener to each dropdown toggle
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDropdown(toggle);
    });

    // Handle keyboard navigation
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown(toggle);
      }
    });
  });

  console.log('Dropdown functionality initialized');
};
