document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
  
    const handleScroll = () => {
      if (window.scrollY > 5) {
        
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-dark')
      } else {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-dark');
      }
    };
  
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  
    // Highlight active link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });
  });
  