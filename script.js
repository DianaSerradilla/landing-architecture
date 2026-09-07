(() => {
  document.documentElement.classList.add('js');

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (header && 'IntersectionObserver' in window) {
    const headerSentinel = document.createElement('span');
    headerSentinel.setAttribute('aria-hidden', 'true');
    headerSentinel.className = 'header-sentinel';
    document.body.prepend(headerSentinel);

    const headerObserver = new IntersectionObserver(([entry]) => {
      header.classList.toggle('is-scrolled', !entry.isIntersecting);
    });

    headerObserver.observe(headerSentinel);
  }

  if (menuToggle && menu) {
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('.sr-only').textContent = 'Abrir navegación';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menu.classList.toggle('is-open', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Abrir navegación' : 'Cerrar navegación';
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  }

  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -36px' }
  );

  reveals.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 75}ms`;
    observer.observe(item);
  });
})();
