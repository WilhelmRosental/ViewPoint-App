# ViewPoint

ViewPoint est une plateforme innovante dédiée aux photographes et aux clients souhaitant trouver le professionnel idéal pour leurs projets. Ce projet, réalisé avec Next.js, React et Tailwind CSS, met en avant des interfaces modernes et responsives.

## Fonctionnalités

- Navigation intuitive entre les pages : Accueil, Photographes, Projets, Comment ça marche, etc.
- Gestion du compte utilisateur, des projets et des messages.
- Section dédiée aux paramètres et à la confidentialité.
- Intégration de données fictives pour démontrer le fonctionnement de l’application.

## Technologies

- **Next.js** – Framework React pour le rendu côté serveur et le routage.
- **React** – Bibliothèque JavaScript pour la construction d’interfaces utilisateur.
- **Tailwind CSS** – Utilisé pour le style.
- **Lucide React** – Librairie d’icônes.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://votre-url-de-depot.git
   ```
2. Installez les dépendances :
   ```bash
   cd ViewPoint-App
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

## Scripts Disponibles

- `npm run dev` – Démarrer le serveur de développement.
- `npm run build` – Générer une version de production.
- `npm run start` – Démarrer le serveur en mode production.
- `npm run lint` – Lancer ESLint pour analyser le code.

## Structure du Projet

```
ViewPoint-App/
├── src/
│   ├── app/
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   ├── post-project/
│   │   │   └── page.tsx
│   │   ├── how-it-works/
│   │   │   └── page.tsx
│   │   └── ... (autres pages)
│   ├── components/
│   │   └── Ui/
│   │       └── Footer.tsx
│   ├── lib/
│   │   └── fetchData.ts
│   └── styles/
│       └── globals.css
├── package.json
└── README.md
```

## Contribution

Les contributions sont les bienvenues. Veuillez ouvrir une issue ou soumettre une pull request pour proposer des améliorations ou corriger des bugs.

## Licence

ViewPoint est sous licence [MIT](LICENSE).

---

Ce projet sert de démonstration et pourra être étendu selon les besoins futurs.
