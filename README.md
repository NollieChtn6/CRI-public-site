# Code Rouge Info — Site public

![Logo de l'association Code Rouge Info](https://raw.githubusercontent.com/NollieChtn6/CRI-public-site/5a40cb265eb1b1ae0c058fd777654679596eef2b/public/images/logo-inline.svg)

Date de mise à jour : 11/01/2026

## SOMMAIRE

- [Présentation du projet](#-présentation-du-projet)
- [Stack technique](#-stack-technique)
- [Structure du projet](#-structure-du-projet)
- [Gestion des données](#-gestion-des-données)
- [Gestion des images](#-gestion-des-images)
- [Composants](#-composants)
- [Styles](#-styles)
- [Linting et formatage](#-linting-et-formatage)
- [Scripts `pnpm`](#-scripts-pnpm)
- [Développement local](#-développement-local)
- [Déploiement du site](#-déploiement-du-site)
- [Collaboration](#-collaboration)
- [Choix techniques et trade-offs](#-choix-techniques-et-trade-offs)
- [Contact](#️-contact)

## 📋 Présentation du projet

Bienvenue sur le repo du site public de l'association **Code Rouge Info**.

La présente documentation a pour objectif de :

- faciliter la reprise du projet par un autre développeur
- expliquer les choix techniques
- décrire le workflow de développement et de contribution

## 🧱 Stack technique

### Frontend

- Astro (v. 5.16.4) : framework principal (SSG / SSR léger)
- React (v. 19.2.1) : composants interactifs
- TailwindCSS (v. 4.1.17) : styles utilitaires
- Radix UI : primitives accessibles (dialog (v. 1.1.15), separator (v. 1.1.8))
- Embla Carousel (v. 8.6.0) : carrousels
- React Icons (v. 5.5.0) : icônes

### Tooling

- PNPM : gestionnaire de paquets
- TypeScript (v. 5.9.3) : typage strict
- Biome (v. 2.3.8) : linter + formatter (config astro : v. 1.2.4)
- Vite : bundler (via Astro)

### Déploiement

🚧 En cours...

## 📂 Structure du projet

```ascii

├── src/
│   ├── @types/            # Types TypeScript globaux 
│   ├── assets/            # Images locales, SVG, placeholders
│   ├── atoms/             # Composants UI atomiques (Astro / React)
│   ├── components/        # Composants plus complexes
│   ├── data/              # Données JSON et Markdown (fallback intranet)
│   ├── fonts/             # Polices de la charte graphique de l'association
│   ├── layouts/           # Layouts Astro
│   ├── lib/               # Configuration de tailwind-merge et clsx
│   ├── pages/             # Pages Astro (routing)
│   ├── styles/            # Fichiers de style
│   └── utils/             # Fonctions utilitaires
│
├── public/                # Fichiers statiques
├── .gitignore
├── astro.config.mjs
├── biome.json
├── components.json
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json

```

## 📦 Gestion des données

### Contraintes

L'intranet de l'association n'étant pas encore opérationnel et pour des raisons de délais serrés, les données sont pour le moment stockées localement (contenus textuels) ou sur une plateforme tierce distante (photos).

### Solutions mises en place

Pour les contenus (dans `src/data`) :

- du Markdown pour les articles de la section "Prévention",
- du JSON pour les articles de la section "Reportages", les partenaires, l'histoire de l'association, les liens vers les images contenues dans les galeries photo.

Pour les images (pour plus de détails, consulter la section [Gestion des images](#-gestion-des-images) ):

- certaines images sont stockées en local (dans `src/assets`) pour éviter les contraintes des CORS (logos des partenaires),
- les photos de l'association sont hébergées sur une plateforme externe et accessibles via leur url distante.

## 🌃 Gestion des images

### Images locales

- Importées via `astro:assets`
- Optimisées automatiquement
- Utilisation du composant `<Image />`

### Images distantes

- Chargées via `<img>` HTML classique
- Gestion d'un placeholder SVG via un composant dédié (`ImageWithPlaceholder`)

❌ Ne jamais utiliser `getImage()` ou `<Image />` avec une URL distante !

## 🧩 Composants

### Astro

Les composants Astro sont utilisés pour :

- les pages
- les layouts
- les composants statiques ou semi-dynamiques

### React

Les composants React sont utilisés pour :

- les interactions complexes
- les composants nécessitant une gestion de l'état
- l'UI avancée (carrousels, modales)

Astro permet une hydration partielle, seuls les composants nécessaires sont hydratés côté client (instruction : `client: load`).

## 🎨 Styles

Le site fait appel à TailwindCSS (v.4).

Liste des plugins et fonctions utilisés :

- @tailwindcss/typography`
- tw-animate-css
- clsx
- tailwind-merge
- class-variance-authority

L'objectif principal est de respecter la charte graphique de l'association et d'avoir un style cohérent sur l'ensemble du site.

> 📋 TODO : penser à factoriser les classes Tailwind

## 🧹 Linting et formatage

### Biome

Biome est utilisé comme outil unique pour :

- lint
- formatage

Une configuration spéciale pour astro est utilisée afin d'éviter les conflits : `biome-config-astro` (v. 1.2.4).

### Scripts disponibles

```bash
npm run format           # Formatage du code
npm run lint             # Analyse statique
npm run lint:fix         # Corrections sûres
npm run lint:fix:unsafe  # Corrections plus agressives
```

## 🧪 Scripts `pnpm`

```bash
npm run dev       # Lancement du serveur local
npm run build     # Build de production
npm run preview   # Preview du build
```

## 🚀 Développement local

### Prérequis techniques

- Node.js ≥ 18
- pnpm

### Installation

Récupérer le code et installer les dépendances à l'aide des commandes suivantes :

```bash
git clone git@github.com:NollieChtn6/CRI-public-site.git
cd cri-site-public
pnpm install
```

### Lancer le projet

Pour lancer le serveur de développement local, exécuter la commande suivante :

```bash
pnpm run dev
```

Le site est accessible sur : <http://localhost:4321>

## 🌍 Déploiement du site

### Nom de domaine

Le nom de domaine `coderougeinfo.fr` est la propriété de l'association.

Il permet d'accéder au site vitrine de l'association, mais également à d'autres applications (via les sous-domaines).

### Déploiement sur Vercel

Le site vitrine est aujourd'hui hébergé sur [Vercel](https://www.vercel.com), une plateforme moderne, performante et gratuite pour l'association.

Pour que le domaine principal pointe vers le nouveau site, les DNS ont été mis à jour sur Hostinger pour référencer ceux de Vercel :

- `A @ 216.198.79.1`
- `CNAME www 9404e2c5c36d46b1.vercel-dns-017.com`

Le site est maintenant accessible sur :

- [www.coderougeinfo.fr](www.coderougeinfo.fr)
- [coderougeinfo.fr](coderougeinfo.fr).

⚠️ Les autres applications et sous-domaines restent hébergés sur Hostinger. Aucune interruption ou modification n'est pour le moment prévue pour ces services.

### Environnements

Pour assurer la sécurité et la continuité du service, le site dispose de deux environnements distincts :

| Environnement | Branche Git | URL                                                                       |
|---------------|-------------|---------------------------------------------------------------------------|
|Test / Preview |`develop`    |[https://cri-public-site.vercel.app/](https://cri-public-site.vercel.app/) |
|Production.    |`main`       |[www.coderougeinfo.fr](www.coderougeinfo.fr)                               |

### Workflow recommandé

- Développement des nouvelles fonctionnalités sur des branches spécifiques.
- Merge dans la branche `develop` et déploiement automatique sur l'environnement de test (`preview`).
- Vérification et validation des modifications par l'équipe.
- Merge dans la branche `main` et déploiement automatique sur l'environnement de production [www.coderougeinfo.fr](www.coderougeinfo.fr).

Ce workflow permet :

- de tester et valider les modifications avant qu'elles ne soient publiques,
- de réduire au maximum le risque d'interruption du site,
- de garantir une continuité parfaite pour l'intranet et les autres services hébergés sur Hostinger.

## 🧾 Collaboration

### Gestion des tickets

La gestion des évolutions et bugs se fait via :

- la création de GitHub Issues,
- un [GitHub Project](https://github.com/users/NollieChtn6/projects/2) dédié (kanban).

Le kanban est divisé en plusieurs sections :

- `Back Log`,
- `Todo (fixes)`, pour les bugs à corriger et correctifs à implémenter,
- `Todo (dev)`, pour les développements et tâches à faire,
- `In Progress`, pour les tâches en cours,
- `Done`, done pour les tâches terminées et/ou nécessitant un déploiement,
- `Deployed`.

Types de tickets actuellement disponibles :

- `bug`, pour les problèmes ou erreurs à corriger,
- `chore`, pour les tâches non visibles côté utilisateur,
- `content`, pour l'ajout ou la modification de contenu,
- `deployment`, pour le déploiement du site,
- `design`, pour toutes les modifications liées à l'UX/UI,
- `dev`, pour toutes les tâches liées au développement à proprement parler,
- `documentation`, pour la création ou la mise à jour de la documentation,
- `enhancement`, pour toutes les tâches liées à l'amélioration ou à l'ajout de nouvelles fonctionnalités.

Les tickets peuvent aussi être taggés par ordre de priorité : `Low` — `Medium` — `High`

### Contributions

Pour développer le site de manière organisée et sécurisée, nous utilisons Git et des branches dédiées. Cela permet de travailler simultanément sur plusieurs fonctionnalités ou corrections sans impacter la version en production.

#### Étapes du workflow

- Création d'une branche de travail :
  - Toujours partir de la branche `develop`.
  - Préfixer le nom de la branche en fonction du type de développement : `feature/` pour une nouvelle fonctionnalité, `fix/` pour la correction d'un bug, et `chore/` pour les tâches purement techniques et de maintenance.
- Développement et commits :
  - Les modifications sont réalisées sur la nouvelle branche de travail.
  - Chaque étape importante est enregistrée via des commits clairs et descriptifs.
- Pull Request (PR) vers `develop`
  - Une fois le développement terminé, ouvrir une PR vers la branche `develop`,
  - Compléter le template de la PR pour expliquer les changements, les tests effectués et les impacts possibles.
- Validation et tests par l'association :
  - Les modifications sont automatiquement déployées sur l'environnement de test (`preview`) pour que l'équipe puisse les valider.
  - Les demandes de corrections et de modifications sont signalées dans le kanban mis en place pour le projet.
  - Les retours sont intégrés directement sur la même branche si nécessaire.
- Merge sur main et déploiement en production :
  - Après validation, la PR est fusionnée dans la branche `main`.
  - Le site est automatiquement mis à jour sur l'environnement de production.

#### Avantages de ce workflow

- Sécurité : aucune modification n'affecte directement le site en production.
- Traçabilité : toutes les modifications sont documentées et visibles dans l'historique Git.
- Collaboration fluide : plusieurs développeurs ou bénévoles peuvent travailler simultanément sur différentes fonctionnalités.
- Tests simplifiés : les nouvelles fonctionnalités sont visibles sur l'environnement de test avant d'être publiées.

## 🧠 Choix techniques et trade-offs

Cette section documente les décisions techniques majeures prises sur le projet, ainsi que les compromis associés.

### Astro comme framework principal

Astro est utilisé comme framework principal pour construire le site.

- Pourquoi ?
  - Génération de pages statiques performantes
  - Très bon SEO par défaut
  - Hydratation partielle (JavaScript envoyé uniquement si nécessaire)
  - Intégration naturelle avec React
  - Courbe de maintenance faible pour un site associatif

- Trade-offs
  - Écosystème plus jeune que Next.js
  - Certaines fonctionnalités avancées (images distantes, SSR complexe) demandent plus de vigilance

### React uniquement quand nécessaire

React est utilisé uniquement pour les composants nécessitant de l'interactivité.

- Pourquoi ?
  - Réduction du JavaScript côté client
  - Meilleures performances globales
  - Code plus simple à maintenir

- Trade-offs
  - Nécessite de réfléchir au bon découpage Astro / React
  - Mélange de paradigmes (Astro + JSX)

### TailwindCSS comme solution de styling

TailwindCSS est utilisé pour tous les styles.

- Pourquoi ?
  - Rapidité de développement
  - Styles cohérents
  - Suppression du CSS mort
  - Très bon support dans l'écosystème Astro

- Trade-offs
  - Classes longues dans le markup
  - Nécessite une discipline sur la factorisation (via composants)

### Données locales (JSON / Markdown)

Les données sont stockées localement sous forme de JSON et de fichiers Markdown.

- Pourquoi ?
  - Pas d'intranet actuellement
  - Simplicité de mise en œuvre
  - Versionnement Git natif
  - Facilité de contribution

- Trade-offs
  - Pas de mise à jour en temps réel
  - Duplication potentielle des données
  - Scalabilité limitée

### Images distantes non optimisées

Les images distantes sont chargées via des balises `<img>` classiques.

- Pourquoi ?
  - Contraintes du service d'images Vercel
  - Sources d'images externes (articles, partenaires)
  - Éviter les erreurs de build et de runtime

- Trade-offs
  - Pas d'optimisation automatique (resize, format)
  - Dépendance aux performances des serveurs distants

### Composant image personnalisé avec placeholder

Un composant `ImageWithPlaceholder` est utilisé pour améliorer l'expérience utilisateur.

- Pourquoi
  - Éviter les flashs de contenu vide
  - Uniformiser le comportement des images
  - Gestion cohérente local / distant

- Trade-offs
  - Complexité CSS et JavaScript
  - Composant sensible aux changements de layout

### Biome comme outil unique de qualité de code

Biome est utilisé comme linter et formatter unique.

- Pourquoi ?
  - Un seul outil à configurer
  - Rapidité d'exécution
  - Configuration simple
  - Compatible Astro / TypeScript

- Trade-offs
  - Moins de plugins que ESLint
  - Moins connu par certains développeurs

### Vercel comme plateforme de déploiement

Vercel est utilisé pour le déploiement.

- Pourquoi ?
  - Intégration native avec Astro
  - Previews automatiques sur PR
  - Déploiement simple et fiable

- Trade-offs
  - Dépendance à une plateforme propriétaire
  - Limitations sur le service d'images

## ✉️ Contact

Pour toute question ou reprise du projet, se référer à cette documentation ou aux tickets GitHub existants.
