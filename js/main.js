document.addEventListener('DOMContentLoaded', () => {
  const backgrounds = [
    {
      image: 'images/hero.jpg',
      title: 'Kavna Storitev Gostinske Storitve in Dobava Kave',
      subtitle: 'Najboljša kavna storitev v mestu. Ponujamo gostinske storitve in dobavo kave.'
    },
    {
      image: 'images/hero2.jpg',
      title: 'Najbolj Kvalitetna Kava',
      subtitle: 'Izberite med široko paleto kavnih zrn najvišje kvalitete.'
    },
    {
      image: '/perosa/images/skupaj-produkti/IMG_0169.jpg',
      title: 'Sveža in Okusna Kava',
      subtitle: 'Okusite svežino in aromo vsake skodelice kave, ki jo pripravimo za vas.'
    }
  ];

  let currentBackgroundIndex = 0;

  function switchBackground() {
    const heroSection = document.getElementById('hero');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    heroSection.classList.add('fade-out');
    heroTitle.classList.add('fade-out');
    heroSubtitle.classList.add('fade-out');

    setTimeout(() => {
      currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
      const background = backgrounds[currentBackgroundIndex];
      heroSection.style.backgroundImage = `url('${background.image}')`;
      heroTitle.textContent = background.title;
      heroSubtitle.textContent = background.subtitle;

      heroSection.classList.remove('fade-out');
      heroTitle.classList.remove('fade-out');
      heroSubtitle.classList.remove('fade-out');
    }, 500);
  }

  setInterval(switchBackground, 5000);

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
  