

# QR Scanner App

Cette application est une application React créée avec Vite qui utilise la caméra de l'appareil pour scanner des codes QR. Si le code QR scanné contient un lien, l'application ouvre automatiquement le lien. Si le code QR scanné n'est pas un lien, une alerte est affichée.

## Fonctionnalités

- Utilisation de la caméra arrière pour scanner les codes QR
- Ouverture automatique des liens contenus dans les codes QR
- Alerte lorsque le code QR scanné n'est pas un lien valide

## Prérequis

- Node.js et npm doivent être installés sur votre machine

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-nom-utilisateur/qr-scanner-app.git
   cd qr-scanner-app
    ```

## Installez les dépendances :

 ```bash
Copier le code
npm install
```
## Utilisation

### Lancez l'application :

```bash
Copier le code
npm run dev
```
Ouvrez votre navigateur et accédez à http://localhost:5173.

## Structure du projet
```plaintext
.
├── public
│   └── index.html
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── QRScanner.jsx
│   └── main.jsx
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Contributions
Les contributions sont les bienvenues. Veuillez ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.