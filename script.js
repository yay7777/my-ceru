document.addEventListener("DOMContentLoaded", function() {
   // Select the shop link by its unique ID
   const shopLink = document.getElementById("shop-link");

   // Check if shop link exists and add click event listener
   if (shopLink) {
      shopLink.addEventListener("click", function(event) {
         console.log("Shop link clicked!");
         // You can add more functionality for the shop link here
      });
   }
});

document.addEventListener("DOMContentLoaded", function() {
    const logoText = document.querySelector(".logo span");

    // Stop animations after 5 seconds
    setTimeout(function() {
        logoText.style.animation = "none"; // Clears all animations
        logoText.style.borderRight = "none"; // Optional: Hide the blinking cursor
    }, 5000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible");
                observer.unobserve(aboutSection); // Stop observing once it becomes visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(aboutSection);
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the visible class to specific sections
function checkVisibility() {
    const contactSection = document.querySelector('.contact');
    const reachUsSection = document.querySelector('.contact-info');
    const followUsSection = document.querySelector('.follow-us');

    if (isElementInViewport(contactSection)) {
        contactSection.classList.add('visible');
    }

    if (isElementInViewport(reachUsSection)) {
        reachUsSection.classList.add('visible');
    }

    if (isElementInViewport(followUsSection)) {
        followUsSection.classList.add('visible');
    }
}

// Initial check
checkVisibility();


document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function () {
        // Toggle the 'show' class on click
        this.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const wardrobeGallery = document.querySelector(".wardrobe-gallery");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          wardrobeGallery.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(wardrobeGallery);
});

window.addEventListener('scroll', function() {
    const title = document.querySelector('.wardrobe-title');
    const sectionPosition = title.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Adjust this value to determine when it should appear

    if (sectionPosition < screenPosition) {
        title.classList.add('visible'); // Add class to make the title visible
    } else {
        title.classList.remove('visible'); // Remove class if it's not in view
    }
});


