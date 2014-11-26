# Quel est le contenu []({{ site.repo }}/blob/master/docs/_includes/getting-started/whats-include.md)

---

Le code source téléchargé de Bootstrap table contient le fichier CSS pré-compilé, le fichier Javascript, les fichiers de traduction, les extensions. Il contient la version minimum et compilée avec la documentation. Plus spécifiquement, il contien les fichiers suivants et plus:

```bash
bootstrap-table/
├── dist/
│   ├── extensions/
│   ├── locale/
│   ├── bootstrap-table.min.css
│   └── bootstrap-table.min.js
├── docs/
└── src/
    ├── extensions/
    ├── locale/
    ├── bootstrap-table.css
    └── bootstrap-table.js
```

Les répertoires `src/`, `locale/`, et `extensions/` contiennent le code source CSS et JavaScript. Le répertoire `dist/`  contient l'équivalent de `src/` compilé et en version minimum. Le répertoire `docs/` contient le code source pour la documentation. En plus de cela, les autres fichiers contiennent de l'aide pour les paquets, l'information de licence et le développement.
