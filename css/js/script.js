/* =============================================
   LE BAOBAB GOURMAND — script.js
   Fonctionnalités JS :
   1. Navbar shrink au scroll
   2. Bouton retour en haut
   3. Validation formulaire de contact
   4. Filtre dynamique du menu
   5. Animations au scroll (Intersection Observer)
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ================================================
  // 1. NAVBAR — rétrécissement au scroll
  // ================================================
  const navbar = document.querySelector('.navbar-baobab');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ================================================
  // 2. BOUTON RETOUR EN HAUT
  // ================================================
  const btnTop = document.querySelector('#btnTop');
  if (btnTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btnTop.classList.add('visible');
      } else {
        btnTop.classList.remove('visible');
      }
    });

    btnTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ================================================
  // 3. VALIDATION FORMULAIRE DE CONTACT
  // ================================================
  const form = document.querySelector('#contact-form');
  if (form) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex   = /^(\+221|00221)?\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/;
    const msgSucces  = document.querySelector('#msg-succes');

    // Validation en temps réel sur chaque champ
    const champsTexte = form.querySelectorAll('.form-control, .form-select');
    champsTexte.forEach(function (champ) {
      champ.addEventListener('blur', function () {
        validerChamp(champ);
      });
      champ.addEventListener('input', function () {
        if (champ.classList.contains('is-invalid')) {
          validerChamp(champ);
        }
      });
    });

    function validerChamp(champ) {
      const valeur = champ.value.trim();
      let valide = true;

      if (champ.required && valeur === '') {
        valide = false;
      } else if (champ.type === 'email' && valeur !== '') {
        valide = emailRegex.test(valeur);
      } else if (champ.id === 'telephone' && valeur !== '') {
        valide = telRegex.test(valeur.replace(/\s/g, ''));
      }

      champ.classList.toggle('is-valid',   valide && valeur !== '');
      champ.classList.toggle('is-invalid', !valide);

      return valide;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let formulaireValide = true;
      const champsRequis = form.querySelectorAll('[required]');

      champsRequis.forEach(function (champ) {
        if (!validerChamp(champ)) {
          formulaireValide = false;
        }
      });

      if (formulaireValide) {
        // Simuler l'envoi (pas de backend)
        const btnSoumettre = form.querySelector('button[type="submit"]');
        btnSoumettre.disabled = true;
        btnSoumettre.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Envoi en cours...';

        setTimeout(function () {
          form.reset();
          champsTexte.forEach(c => c.classList.remove('is-valid', 'is-invalid'));
          btnSoumettre.disabled = false;
          btnSoumettre.innerHTML = '<i class="bi bi-send me-2"></i>Envoyer le message';

          if (msgSucces) {
            msgSucces.style.display = 'block';
            msgSucces.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            setTimeout(() => { msgSucces.style.display = 'none'; }, 6000);
          }
        }, 1500);
      } else {
        // Scroll vers le premier champ invalide
        const premierErreur = form.querySelector('.is-invalid');
        if (premierErreur) {
          premierErreur.focus();
          premierErreur.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // ================================================
  // 4. FILTRE DYNAMIQUE DU MENU
  // ================================================
  const boutonsFiltres = document.querySelectorAll('.btn-filtre');
  const cartesMenu     = document.querySelectorAll('.menu-card-item');

  if (boutonsFiltres.length > 0) {
    boutonsFiltres.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Mettre à jour le bouton actif
        boutonsFiltres.forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');

        const categorie = btn.dataset.filter;
        const titreBoissonsChaudes = document.querySelector('#boissons-chaudes-title');
        const titreCoinStreetFood = document.querySelector('#coin-street-food-title');

        if (titreBoissonsChaudes) {
          titreBoissonsChaudes.style.display = (categorie === 'tout' || categorie === 'boisson') ? 'block' : 'none';
        }

        if (titreCoinStreetFood) {
          titreCoinStreetFood.style.display = (categorie === 'tout' || categorie === 'plat') ? 'block' : 'none';
        }

        cartesMenu.forEach(function (carte) {
          if (categorie === 'tout' || carte.dataset.categorie === categorie) {
            carte.style.display = 'block';
            // Petite animation d'apparition
            carte.style.opacity = '0';
            carte.style.transform = 'translateY(15px)';
            requestAnimationFrame(function () {
              carte.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
              carte.style.opacity = '1';
              carte.style.transform = 'translateY(0)';
            });
          } else {
            carte.style.display = 'none';
          }
        });
      });
    });
  }

  // ================================================
  // 5. ANIMATIONS AU SCROLL (Intersection Observer)
  // ================================================
  const elementsAnimes = document.querySelectorAll('.fade-in-scroll');

  if ('IntersectionObserver' in window && elementsAnimes.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elementsAnimes.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  } else {
    // Fallback : tout afficher sans animation
    elementsAnimes.forEach(el => el.style.opacity = '1');
  }

  // ================================================
  // 6. LIEN ACTIF dans la navbar selon la page
  // ================================================
  const pageCourante = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-baobab .nav-link').forEach(function (lien) {
    const href = lien.getAttribute('href');
    if (href === pageCourante || (pageCourante === '' && href === 'index.html')) {
      lien.classList.add('active');
    }
  });

});