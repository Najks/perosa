document.addEventListener('DOMContentLoaded', () => {
  const backgrounds = [
    {
      image: '/perosa/images/skupaj-produkti/IMG_0154.jpg',
      title: 'LUSSO caffè',
      subtitle: ' Naša blagovna znamka s preverjeno tradicijo prave Italjanske kave.'
    },
    {
      image: '/perosa/images/salce/IMG_0105.jpg',
      title: 'Naj kvalitetnejše vrste surove zelene kave',
      subtitle: 'Izberite med široko paleto kavnih zrn najvišje kvalitete.'
    },
    {
      image: '/perosa/images/skupaj-produkti/IMG_0169.jpg',
      title: 'LUSSO caffè',
      subtitle: 'Za vas v majhnih količinah sveže praži naš mojster praženja.'
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