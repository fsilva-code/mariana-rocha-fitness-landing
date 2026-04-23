/* ----------------------------------------------------------
       1. ANIMAÇÕES DE SCROLL (Intersection Observer)
    ---------------------------------------------------------- */
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));


    /* ----------------------------------------------------------
       2. CONTADOR REGRESSIVO DE URGÊNCIA (FAKE - reinicia a cada dia)
    ---------------------------------------------------------- */
    function updateCountdown() {
      const now = new Date();
      // Define o fim como meia-noite do dia seguinte
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 0);

      const diff = endOfDay - now;
      if (diff <= 0) return;

      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      document.getElementById('countdown').textContent =
        `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    /* ----------------------------------------------------------
       3. VAGAS DECRESCENTES (simulação de escassez)
    ---------------------------------------------------------- */
    let vagas = 7;
    const vagasEl = document.getElementById('vagas');

    setTimeout(() => {
      const intervalo = setInterval(() => {
        if (vagas > 3) {
          vagas--;
          vagasEl.textContent = vagas;
        } else {
          clearInterval(intervalo);
        }
      }, 45000); // reduz uma vaga a cada 45 segundos
    }, 30000); // começa após 30 segundos na página


    /* ----------------------------------------------------------
       4. NAVBAR SHADOW ON SCROLL
    ---------------------------------------------------------- */
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 30
        ? '0 2px 20px rgba(0,0,0,0.1)'
        : 'none';
    });


    /* ----------------------------------------------------------
       5. PARALLAX SUAVE NO HERO
    ---------------------------------------------------------- */
    const hero = document.getElementById('hero');
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      if (offset < window.innerHeight) {
        hero.style.backgroundPositionY = `calc(center + ${offset * 0.3}px)`;
      }
    }, { passive: true });