document.addEventListener("DOMContentLoaded", function () {
  // Disable browser's scroll restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Force the page to scroll to the top
  window.scrollTo(0, 0);

  // Optional: If you have a loader, lock the scroll during the loading phase
  document.body.style.overflow = "hidden"; // Disable scrolling

  setTimeout(() => {
    document.body.style.overflow = "auto"; // Re-enable scrolling
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none"; // Hide the loader
  }, 2000); // Adjust the delay as needed
});





// Select the content elements to animate
const contentElements = document.querySelectorAll('.container .content');

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view'); // Optional: remove when out of view
    }
  });
}, {
  threshold: 0.5 // Trigger when 10% of the element is in view
});

// Observe each content element
contentElements.forEach(element => observer.observe(element));


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".content, .mission-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

  // Add "hidden" class to all target elements initially and observe each
  elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
  });
});



function sendMail() {
    // window.location.href = "mailto:lukagulverdashvili49@gmail.com";
    window.location.href = "mailto:info@PayNety.com";
  }

const navItems = document.querySelector('.nav-items');
const menuIcon = document.querySelector('#menu-icon');

let isMenuOpen = false; // Tracks if the menu is open

function toggleMenu() {
  navItems.classList.toggle('show'); // Toggle the menu visibility

  // Change the menu icon based on whether the menu is open or closed
  if (isMenuOpen) {
    menuIcon.innerHTML = `
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />`; // Burger icon
  } else {
    menuIcon.innerHTML = `
<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffffff" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></g></svg>`; // Close icon
  }

  // Toggle the flag (open/close the menu)
  isMenuOpen = !isMenuOpen;
}

// Close the menu on scroll if it's open
window.addEventListener("scroll", () => {
  if (isMenuOpen) {
    toggleMenu(); // Close the menu
  }
});


// Function to initialize the Intersection Observer
function observeTimeline() {
  const timelineItems = document.querySelectorAll('.timeline p');

  const observerOptions = {
    root: null, // Observing relative to the viewport
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'in-view' class to trigger the animation when the element comes into view
        entry.target.classList.add('in-view');
      } else {
        // Remove the 'in-view' class when the element leaves the view (optional for reverse animation)
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);

  // Start observing each timeline item
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', observeTimeline);


// document.getElementById("scroll-to-top").addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// Get the button
const scrollUpBtn = document.getElementById("scroll-to-top");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll
  });
}






document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
