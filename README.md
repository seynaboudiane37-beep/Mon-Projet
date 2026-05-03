# 🌳 Le Baobab Gourmand

Site vitrine d'un restaurant de cuisine africaine moderne à Dakar, Sénégal.

## Sujet choisi

**Sujet A — Site vitrine de restaurant "Le Baobab Gourmand"**

## Technologies utilisées

- HTML5 (balises sémantiques : header, nav, main, section, article, footer)
- CSS3 (variables CSS, animations, Flexbox, Grid)
- Bootstrap 5.3 (via CDN)
- JavaScript Vanilla (aucun framework)
- Bootstrap Icons 1.13
- Google Fonts (Playfair Display + Lato)
- Git / GitHub

## Pages réalisées

| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `index.html` | Bannière hero, carousel, plats vedettes, témoignages, CTA |
| Menu | `menu.html` | Grille de plats avec filtre dynamique par catégorie |
| À Propos | `about.html` | Histoire, valeurs, équipe, récompenses |
| Contact | `contact.html` | Formulaire validé en JS, infos pratiques, carte |

## Fonctionnalités JavaScript

- ✅ Validation en temps réel du formulaire de contact (champs requis, email, téléphone)
- ✅ Filtre dynamique du menu par catégorie (Tout / Entrées / Plats / Desserts / Boissons) — **FONCTIONNEL**
- ✅ Carousel Bootstrap présentant 3 plats signature
- ✅ Bouton « retour en haut » apparaissant au scroll (>400px)
- ✅ Navbar qui rétrécit au scroll
- ✅ Animations au scroll (Intersection Observer API)
- ✅ Lien actif automatique dans la navbar selon la page courante

## Composants Bootstrap utilisés

1. **Navbar** — responsive avec menu hamburger mobile
2. **Carousel** — diaporama automatique des plats signature
3. **Cards** — présentation des plats, valeurs, équipe, témoignages
4. **Modal** — popup informations allergènes
5. **Alert** — bandeau menu du jour + message de succès formulaire
6. **Badge** — catégorisation des plats
7. **Form** — formulaire de contact avec validation

## Modifications et améliorations récentes

### 🔧 Corrections JavaScript
- **Correction du chemin du script** : Le fichier `script.js` était mal référencé dans `menu.html`. Chemin corrigé de `js/script.js` → `css/js/script.js`. Les boutons de filtrage du menu (Entrées, Plats, Desserts, Boissons) fonctionnent maintenant correctement.

### 🎨 Changement de design
- **Modification de la palette de couleurs** : Les fonds marron ont été remplacés par du gris foncé (`#4A4A4A`)
  - Navbar : gris foncé
  - Section des chiffres (bg-baobab) : gradient gris foncé
  - Footer : gris foncé
  - Texte du footer : adapté pour la lisibilité

### 🖼️ Image du hero
- **Image principal du hero** : Changée pour `image baobab.jpeg` avec gradient africain semi-transparent pour meilleure visibilité

## Structure des fichiers

```
TP BAOBAB/
├── index.html          # Accueil
├── menu.html           # Menu avec filtre (script.js maintenant chargé correctement)
├── about.html          # À Propos
├── contact.html        # Contact & Réservation
├── css/
│   ├── style.css       # CSS personnalisé (>796.lignes)
│   ├── js/
│   │   └── script.js   # JavaScript vanilla (localisation corrigée)
│   └── images/         # Images d'ambiance
├── images/             # Images des plats et contenu
│   ├── image baobab.jpeg   # Image hero
│   ├── RESTO.jpg
│   └── ... (autres images de plats)
└── README.md
```

## Palette de couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Gris foncé | `#4A4A4A` | Navbar, footer, sections foncées |
| Safran | `#E8A020` | Couleur principale, CTA, accents |
| Vert forêt | `#2D5A27` | Éléments secondaires |
| Ivoire | `#FAF3E0` | Fond clair, texte sur foncé |
| Brun | `#8B4513` | Accents terre |

## Typographie

- **Titres** : Playfair Display (serif élégant)
- **Corps** : Lato (sans-serif lisible)

## Équipe

- **[Seynabou Diane , Mame Diarra bousso Diallo , Khadidiatou Seck]** — Étudiant(e) UCAK L1, module Développement Web Front-end

## Remerciements

Projet réalisé dans le cadre du module Développement Web Front-end.
Images : Collection personnelle · Icônes : [Bootstrap Icons](https://icons.getbootstrap.com)
