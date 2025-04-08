// Smooth scrolling for table of contents
export const initSmoothScroll = () => {
  // Get all links in the table of contents
  const tocLinks = document.querySelectorAll('.toc a');

  // Get the scrollable content container
  const contentContainer = document.querySelector('.content');

  if (!contentContainer) {
    console.error('Content container not found');
    return;
  }

  // Add click event listener to each link
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Prevent default anchor link behavior
      e.preventDefault();

      // Get the target element from the href attribute
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate content container's padding top
        const contentPaddingTop = parseInt(window.getComputedStyle(contentContainer).paddingTop, 10) || 0;

        // Get the target's position relative to the content container
        const targetOffsetTop = targetElement.offsetTop - contentPaddingTop - 20; // 20px extra padding

        // Scroll the content container smoothly to the target
        contentContainer.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        history.pushState(null, null, targetId);

        // Add active class to the clicked link
        tocLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // Highlight TOC items based on scroll position
  const highlightTocOnScroll = () => {
    // Get all headings that correspond to TOC items
    const headings = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
      .filter(heading => heading.id);

    if (headings.length === 0) return;

    // Get the content container's scroll position
    const scrollTop = contentContainer.scrollTop;
    const contentPaddingTop = parseInt(window.getComputedStyle(contentContainer).paddingTop, 10) || 0;

    // Determine which heading is currently in view
    let currentHeading = null;

    // Find the heading that's currently at the top of the viewport
    for (const heading of headings) {
      // Get the heading's position relative to the content container
      const headingTop = heading.offsetTop - contentPaddingTop;

      // If the heading is above the current scroll position plus a small buffer
      if (headingTop <= scrollTop + 100) { // 100px buffer
        currentHeading = heading;
      } else {
        // Once we find a heading below the scroll position, we can stop
        break;
      }
    }

    // Update active state in TOC
    if (currentHeading) {
      const correspondingLink = document.querySelector(`.toc a[href="#${currentHeading.id}"]`);

      if (correspondingLink) {
        tocLinks.forEach(link => link.classList.remove('active'));
        correspondingLink.classList.add('active');
      }
    }
  };

  // Add scroll event listener to the content container to highlight TOC items
  contentContainer.addEventListener('scroll', highlightTocOnScroll, { passive: true });

  // Initial highlight on page load
  setTimeout(highlightTocOnScroll, 100);

  console.log('Smooth scroll initialized for table of contents');
};
