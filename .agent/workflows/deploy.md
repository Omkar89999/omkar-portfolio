---
description: Deploy the latest code to GitHub Pages manually
---

To deploy the latest changes to GitHub Pages, follow these steps:

1.  **Build the application for production:**
    This command compiles the code and sets the base URL for GitHub Pages.
    ```bash
    ng build --base-href "https://Omkar89999.github.io/omkar-portfolio/"
    ```

2.  **Deploy the build artifacts:**
    This command uploads the compiled files from the `dist` directory to the `gh-pages` branch on GitHub.
    ```bash
    npx angular-cli-ghpages --dir=dist/omkar-portfolio/browser
    ```
