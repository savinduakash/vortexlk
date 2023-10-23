document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Get all navbar links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each navbar link
    navLinks.forEach(function (link) {
        // Compare the link's href with the current page URL
        if (link.href === currentUrl) {
            // Add the 'active' class to the matching link
            link.classList.add('active');
        }
    });

    // Function to handle the scroll event for the features section
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an Intersection Observer
    const featuresObserver = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Observe the features heading container and row
    const featuresHeadingContainer = document.getElementById('features-heading-container');
    const featuresRow = document.getElementById('features-row');

    if (featuresHeadingContainer) {
        featuresObserver.observe(featuresHeadingContainer);
    }

    if (featuresRow) {
        featuresObserver.observe(featuresRow);
    }

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scroll event for the features section
    function handleScroll() {
        var featuresHeadingContainer = document.getElementById('features-heading-container');
        var featuresRow = document.getElementById('features-row');

        // Check if either the heading container or the row is in the viewport
        if (isInViewport(featuresHeadingContainer) || isInViewport(featuresRow)) {
            featuresHeadingContainer.classList.add('active');
            featuresRow.classList.add('active');
        }
    }

    // Initial check on page load
    handleScroll();

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Get all the service cards
    const serviceCards = document.querySelectorAll('.card.service-card');

    // Add event listeners to each card
    serviceCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            card.style.transform = 'scale(1.05)'; // Scale up on hover
            card.style.transition = 'transform 0.3s ease-in-out'; // Add transition effect
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'scale(1)'; // Reset scale on mouse leave
        });
    });

    // Function to check if the middle of an element is in the viewport
    function isMiddleOfElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2 &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 2
        );
    }

    // Function to handle the scroll event for the services section
    function handleScroll() {
        var servicesSection = document.getElementById('services');

        if (isMiddleOfElementInViewport(servicesSection)) {
            servicesSection.classList.add('active');
        }
    }

    // Initial check on page load
    handleScroll();

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Handle page transition on link click
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetUrl = link.href;
        // Check if the target URL is one of the pages where you want the transition
        var pagesWithTransition = ['index.html', 'services.html', 'about-us.html']; // Add other page URLs as needed    

            // Fade out the current page
            document.body.classList.add('page-transition');

            // Wait for the fade-out transition to complete
            setTimeout(function () {
                // Navigate to the new page
                window.location.href = targetUrl;
            }, 500); // Adjust the delay to match the transition duration
        });
    });

    // Remove the page transition class to allow fade-in on page load
    document.body.classList.remove('page-transition');
});
