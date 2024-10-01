Bundler used to bundle the project : Vite
npm create vite@latest

Story book implementation
npx storybook@latest init
run npm run storybook

Plop for scaffolding new components
npm install --save-dev plop
touch plopfile.js
Create a folder called plop-templates in root directory
npm run generate:component

ES Lint Integration
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-tailwindcss --save-dev
touch .eslintrc.json


Prettier Integration
(To avoid conflicts between ESLint and Prettier, you can install and configure Prettier as well:)
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev


Husky Integration
Husky (Optional - For Enforcing Linting Before Committing)
npm install husky --save-dev






