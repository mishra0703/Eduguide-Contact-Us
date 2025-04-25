// JavaScript for hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const hamburgerIcon = document.querySelector(".hamburger img:first-child");
  const closeIcon = document.querySelector(".hamburger img:last-child");

  // Hide close icon initially
  closeIcon.style.display = "none";

  hamburger.addEventListener("click", function () {
    // Toggle navigation menu
    navLinks.classList.toggle("show");

    // Toggle between hamburger and close icons
    if (navLinks.classList.contains("show")) {
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  });



// On Form Submission
const contactForm = document.querySelector(".form-group");
let successMessage;
let closeSuccessBtn;

// Creating success message element
if (!document.getElementById("overlay")) {

// Overlay to block Any clicks on the page except close button 
  overlay = document.createElement("div");
  overlay.id = "overlay";
  document.body.appendChild(overlay);


  //Success Message
  successMessage = document.createElement("div");
  successMessage.id = "successMessage";
  successMessage.className = "success-message";
  successMessage.innerHTML = `
    <div class="success-content" Id="submitted">
      <h3>Message Sent Successfully!</h3>
      <p>Thank you for contacting us. We'll get back to you shortly.</p>
      <button id="closeSuccessBtn" class="close-btn">Close</button>
    </div>
  `;
  
  document.body.appendChild(successMessage);
  closeSuccessBtn = document.getElementById("closeSuccessBtn");
}


// Functions to lock/unlock scrolling and clicks
function lockPage() {
    // Save the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    
    // Showing Overlay 
    document.getElementById("overlay").style.display = "block";
  }
  
  function unlockPage() {
    // Restore the scroll position
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
    // Removing Overlay 
    document.getElementById("overlay").style.display = "none";
  }
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulate form submission with loading state
      const submitBtn = contactForm.querySelector(".submit-btn");
      const originalBtnText = submitBtn.innerHTML;
  
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;
  
      // Simulate API call delay
      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
  
        // Showing success message
        const successMessage = document.getElementById("submitted");
        successMessage.style.display = "flex";
        
        // Lock scrolling and prevent clicks elsewhere
        lockPage();
  
        // Reset form
        contactForm.reset();
      }, 1500);
    });
  }
  

  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'closeSuccessBtn') {
      document.getElementById("successMessage").style.display = "none";
      
      // Unlock page when closing the success message
      unlockPage();
    }
  });




  
const questionCards = document.querySelectorAll(".question-cards");

questionCards.forEach((card) => {

  const question = card.querySelector(".question");
  const answer = card.querySelector(".answer");
  
  if (question && answer) {
    
    card.addEventListener("click", () => {
      // Closing all other answers
      questionCards.forEach((otherCard) => {
        if (otherCard !== card && otherCard.classList.contains("active")) {
          otherCard.classList.remove("active");
          const otherAnswer = otherCard.querySelector(".answer");
          if (otherAnswer) {
            otherAnswer.style.display = "none";
            otherAnswer.style.maxHeight = null;
        }
        }
      });
      
      
      card.classList.toggle("active");
      
      // Show or hide the answer
      if (card.classList.contains("active")) {
        answer.style.display = "block";
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.display = "none";
        answer.style.maxHeight = null;
      }
    });
  }
});



  // Office Card Hover Effects
  const officeCards = document.querySelectorAll(".location-cards");

  officeCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.animation = "pulse 1s infinite";
    });

    card.addEventListener("mouseleave", () => {
      card.style.animation = "none";
    });
  });



// Map Button Click Event
const loadMapBtn = document.querySelector(".map-btn"); // Changed to class selector, adjust if needed
const mapOverlay = document.querySelector(".map-box");
const mapbg = document.querySelector(".map-bg");

if (loadMapBtn && mapOverlay) {
  loadMapBtn.addEventListener("click", () => {
    // Store original button text
    const originalText = loadMapBtn.innerHTML;
    
    // Show loading state
    loadMapBtn.innerHTML = 'Loading...';
    loadMapBtn
    loadMapBtn.disabled = true;

    // Simulate loading map
    setTimeout(() => {
      // Fade out the overlay
      mapOverlay.style.transition = "opacity 0.5s ease";
      mapOverlay.style.opacity = "0";
      
      // Hide the overlay after fade completes
      setTimeout(() => {
          mapOverlay.style.display = "none";
          mapbg.style.display = "block"  
        
        // Reset button state
        loadMapBtn.innerHTML = originalText;
        loadMapBtn.disabled = false;
      }, 500);
    }, 1500);
  });
}




// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      " .info, .form-group , .input-field , .contact-info, .contact-cards, .card, .social-media , .location-cards , .faq-title , .question-cards , .content-title"
    );
  
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.15;
  
      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };
  
  // Set initial state for scroll animations
  const elementsToAnimate = document.querySelectorAll(
    ".info, .form-group , .input-field , .contact-info, .contact-cards, .card, .social-media , .location-cards , .faq-title , .question-cards , .content-title"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  });
  
  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll);
  
  // Run once on page load
  window.addEventListener("load", animateOnScroll);











});
