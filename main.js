// Espera o DOM carregar para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.getElementById('navigation'); // nav
  const backToTopButton = document.getElementById('backToTopButton'); // botão voltar ao topo

  // Seções
  const home = document.getElementById('home');
  const services = document.getElementById('services');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');

  // Scroll listener
  window.addEventListener('scroll', onScroll);
  onScroll(); // executa ao carregar para definir estado inicial

  function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
  }

  function activateMenuAtCurrentSection(section) {
    const targetLine = window.scrollY + window.innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBoundaries =
      sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*="${sectionId}"]`);

    if (menuElement) {
      menuElement.classList.remove('active');
      if (sectionBoundaries) {
        menuElement.classList.add('active');
      }
    }
  }

  function showNavOnScroll() {
    if (window.scrollY === 0) {
      navigation.classList.remove('scroll');
    } else {
      navigation.classList.add('scroll');
    }
  }

  function showBackToTopButtonOnScroll() {
    if (window.scrollY > 500) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }

  // Funções de menu
  window.openMenu = function () {
    document.body.classList.add('menu-expanded');
  };

  window.closeMenu = function () {
    document.body.classList.remove('menu-expanded');
  };

  // ScrollReveal (animações)
  ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
  }).reveal(`
    #home, 
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
  `);
});
