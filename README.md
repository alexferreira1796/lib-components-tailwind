# Lib Components with Tailwind

## :rocket: Features

Developer experience first:

- [Next.js](https://nextjs.org) for Static Site Generator
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org) for components documentation
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org)
- Code Formatter with [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/#/) for Git Hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- Testing with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/)
- Absolute Imports using `@` prefix
- Nextjs custom layouts
- [T3 env](https://env.t3.gg/) Manage your environment variables with ease
- Message convention for git
- Maximize lighthouse score
- GH actions

## 🧪 Testing

All tests are collocated with the source code inside the same directory. So, it makes it easier to find them. Coverage threshold is set to `70%`. In the `.jest` folder there is a custom provider for the all tests.

## 🚀 Deploy to production

You can see the results locally in production mode with:

```shell
yarn build
```

```shell
yarn start
```

## :gear: Generating components

```bash
yarn generate Button
```

Result (if you chose a component):

```
└── components
        └── Button
          ├── index.ts
          ├── Button.stories.tsx
          ├── Button.test.tsx
          └── Button.tsx
```

## License

Licensed under the MIT License, Copyright © 2024

---

Made with much :heart: and :muscle: by <a href="https://github.com/alexferreira1796">Alex Fereira</a> and <a href="https://github.com/andersonBenedetti">Anderson Benedetti </a> :blush:
