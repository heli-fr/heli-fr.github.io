document.addEventListener("DOMContentLoaded", () => {

    // Select all the elements we want to animate
    const animatedElements = document.querySelectorAll('.project-card');

    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the 'visible' class to it
                entry.target.classList.add('visible');
            }
        });
    }, {
        // Optional: start animation when element is 20% visible
        threshold: 0.1 
    });

    // Tell the observer to watch each of our animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
