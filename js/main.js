document.addEventListener('DOMContentLoaded', () => {

  // Highlight active link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});

var today = new Date();
    var year = today.getFullYear();
    console.log(year);
    document.querySelector(".footer-credits").innerHTML = "&copy; " + year + " Peroša. Vse pravice pridražane."; 