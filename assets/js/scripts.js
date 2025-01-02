document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.links_navbar');
  
    menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });
  