document.addEventListener('DOMContentLoaded', () => {
  // 1. ANIMAÇÕES DE SCROLL (SCROLL REVEAL)
  // Utiliza Intersection Observer para detectar quando os elementos entram na tela
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Depois de revelado, não precisamos mais observar o elemento
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // 2. ACORDEÃO DO FAQ (PERGUNTAS FREQUENTES)
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fecha todos os acordeões abertos
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Alterna o estado do item clicado
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // 3. EFEITO HOVER PREMIUM NOS CARDS
  // Adiciona um leve efeito de brilho que segue o mouse nas bordas (opcional, para elevar o refinamento)
  const cards = document.querySelectorAll('.card-premium, .differential-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Coordenada X dentro do card
      const y = e.clientY - rect.top;  // Coordenada Y dentro do card
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
  
  // 4. SCROLL SUAVE PARA LINKS ANCORA
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Se for apenas "#" (como link vazio), ignora
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
