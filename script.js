document.addEventListener('DOMContentLoaded', function() {
    const mvvItems = document.querySelectorAll('.mvv-item');
  
    mvvItems.forEach(item => {
      item.addEventListener('click', () => {
        // Toggle active class to show/hide description
        item.classList.toggle('active');
  
        // Close other descriptions when opening a new one
        mvvItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
      item.classList.add("fade-in");
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
  
    mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  });
  
  
  