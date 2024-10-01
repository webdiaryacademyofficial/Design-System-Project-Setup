import { exec } from 'child_process';

export default function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a reusable component (atom, molecule, organism, etc.)',
    prompts: [
      {
        type: 'list',
        name: 'category',
        message: 'What type of component are you creating?',
        choices: ['Atom', 'Molecule', 'Organism', 'Template'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name (e.g., Button or Modal)',
        validate: function (input) {
          if (/^[A-Z][A-Za-z0-9]+$/.test(input)) {
            return true;
          }
          return 'Component name must start with an uppercase letter and contain only alphanumeric characters.';
        },
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: 'Do you want to generate a test file?',
        default: false,
      },
    ],
    actions: data => {
      const pathPrefix = `src/components/{{category}}s/{{pascalCase name}}`;

      const actions = [
        {
          type: 'add',
          path: `${pathPrefix}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${pathPrefix}/{{pascalCase name}}.types.ts`,
          templateFile: 'plop-templates/component.types.ts.hbs',
        },
        {
          type: 'add',
          path: `${pathPrefix}/{{pascalCase name}}.component.scss`,
          templateFile: 'plop-templates/component.scss.hbs',
        },
        {
          type: 'add',
          path: `${pathPrefix}/index.ts`,
          templateFile: 'plop-templates/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${pathPrefix}/{{pascalCase name}}.stories.tsx`,
          templateFile: 'plop-templates/component.stories.tsx.hbs',
        },
        {
          type: 'add',
          path: `${pathPrefix}/README.md`,
          templateFile: 'plop-templates/component.readme.md.hbs',
        },
        {
          type: 'lint-fix',
          path: `${pathPrefix}`,
          message: 'Linting and formatting code...',
          run: 'npm run lint:fix',
        },
      ];

      // Conditionally add test file
      if (data.withTest) {
        actions.push({
          type: 'add',
          path: `${pathPrefix}/{{pascalCase name}}.test.tsx`,
          templateFile: 'plop-templates/component.test.tsx.hbs',
        });
      }

      return actions;
    },
  });

  // Add custom action for linting and formatting
  plop.setActionType('lint-fix', (answers, config, plop) => {
    const command = config.run || 'npm run lint:fix';

    return new Promise((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  });
}
