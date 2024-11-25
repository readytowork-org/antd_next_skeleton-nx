<h1 align="center">
 NextJs Monorepo Skeleton
</h1>

## ▶️ Getting Started

1. Install dependencies

   ```bash
   yarn bootstrap
   ```

2. initialize git hook with husky
   ```bash
   npx husky install
   ```
3. To create a new nextJS application
   ```bash
   npx nx g @nx/next:application web --directory=apps --projectNameAndRootFormat=as-provided
   #OR if nx globally installed
   nx g @nx/next:application web --directory=apps --projectNameAndRootFormat=as-provided
   ```
4. To create a component
   ```bash
    npx nx g @nx/next:component cad --directory shared/src/components/  --projectNameAndRootFormat=as-provided
   ```
   **Note: 📖 If you want to remove apps/projects**

```bash
  1. npx nx g remove <app-name>-e2e
  # OR
   nx g remove <app-name>-e2e
  2. npx nx g remove <app-name>
   # OR
   nx g remove <app-name>
```

## 📖 Introduction

This nextjs_skeletin template has a bunch of folders, code examples, and configurations. Feel free to edit or remove them, including this README!

## 📖 Conventions

Folder Name 👉 Kebab case <br/>
<code> Example: folder-name another-folder-name </code>

File Name 👉 Kebab case <br/>
<code> Example: folder-name another-folder-name </code>

Variable Name 👉 snake case/ camel case <br/>
<code> snake case: variable_name </code> <br/>
<code> camel case: variableName </code>

Function Name 👉 camel case <br/>
<code> Example: functionName </code>

<!-- file structure section -->

## 📁 File Tree

See below the file tree to understand the project structure.

<details>
 <summary>View file tree</summary>

> Folders and file structure.

```txt
.
├── consumer
│   ├── index.d.ts
│   ├── jest.config.ts
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── project.json
│   ├── public
│   │   └── favicon.ico
│   ├── specs
│   │   └── index.spec.tsx
│   ├── src
│   │   └── app
│   │       ├── api
│   │       │   └── hello
│   │       │       └── route.ts
│   │       ├── global.css
│   │       ├── layout.tsx
│   │       ├── page.module.css
│   │       └── page.tsx
│   ├── tsconfig.json
│   └── tsconfig.spec.json
└── owner
    ├── index.d.ts
    ├── jest.config.ts
    ├── next-env.d.ts
    ├── next.config.js
    ├── project.json
    ├── public
    │   └── favicon.ico
    ├── specs
    │   └── index.spec.tsx
    ├── src
    │   └── app
    │       ├── api
    │       │   └── hello
    │       │       └── route.ts
    │       ├── global.css
    │       ├── layout.tsx
    │       ├── page.module.css
    │       └── page.tsx
    ├── tsconfig.json
    └── tsconfig.spec.json
```

</details>

<!-- Feature section -->

## ✨ Features

This template features all the latest tools and web development best practices. Some of the tools are listed below 👇

#### 📊 Legend

✅ : Implemented <br/>
⌛ : In progress <br/>
⏰ : Thinking <br/>

#### 🏗️ Build System

| Name                  | Description                                                    | status |
| --------------------- | -------------------------------------------------------------- | ------ |
| [Nx](https://nx.dev/) | Next generation build system with first-class monorepo support | ✅     |

#### 🔥 Framework

| Name                          | Description                     | status |
| ----------------------------- | ------------------------------- | ------ |
| [NextJs](https://nextjs.org/) | The React framework for the web | ✅     |

#### 💄 Design System and Animations

| Name                                                          | Description                                           | status |
| ------------------------------------------------------------- | ----------------------------------------------------- | ------ |
| [ant design](https://ant.design/)                             | A fully featured react component library              | ✅     |
| [@tabler/icons-react](https://tabler-icons-react.vercel.app/) | Beautiful &consistent icons                           | ✅     |
| [Framer motion](https://www.framer.com/motion/)               | A production-ready motion library for React           | ✅     |
| [TanStack Table](https://tanstack.com/table/)                 | Headless UI for building powerful tables & data grids | ✅     |

#### 🏬 Data Fetching

| Name                                                | Description                                           | status |
| --------------------------------------------------- | ----------------------------------------------------- | ------ |
| [TanStack Query](https://tanstack.com/query/latest) | Powerful asynchronous state management                | ✅     |
| [axios](https://axios-http.com/docs/intro)          | Promise based HTTP client for the browser and node.js | ⏰     |

#### 🏬 State Management and Hooks

| Name                                          | Description                                     | status |
| --------------------------------------------- | ----------------------------------------------- | ------ |
| [Typescript](https://www.typescriptlang.org/) | TypeScript is JavaScript with syntax for types. | ✅     |
| [react-use](https://www.npmjs.com/package/react-use)  | Collection of essential React Hooks | ⏰     |

#### ❄️ Internationalization

| Name                                                                | Description                         | status |
| ------------------------------------------------------------------- | ----------------------------------- | ------ |
| [next-intl](https://next-intl-docs.vercel.app/docs/getting-started) | Next.js internationalization (i18n) | ✅     |

#### 🔐 Authetication

| Name                                     | Description                | status |
| ---------------------------------------- | -------------------------- | ------ |
| [firebase](https://firebase.google.com/) | Authentication             | ⌛     |
| [Next-auth](https://next-auth.js.org/)   | Authentication for Next.js | ⌛     |

#### 🏬 Type Checking

| Name                                          | Description                                     | status |
| --------------------------------------------- | ----------------------------------------------- | ------ |
| [Typescript](https://www.typescriptlang.org/) | TypeScript is JavaScript with syntax for types. | ✅     |

#### 📉 Linter and Prettier

| Name                                                                         | Description                                                                                    | status |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| [👺 Eslint](https://eslint.org/)                                             | Find and fix problems in your JavaScript code                                                  | ✅     |
| [💅 Prettier](https://prettier.io/)                                          | Prettier- An opinionated code formatter                                                        | ✅     |
| [💩 lint-staged]()                                                           | Run linters against staged git files and don't let 💩 slip into your code base                 | ✅     |
| [🐶 Husky](https://typicode.github.io/husky/)                                | Husky improves your commits and more 🐶 woof!                                                  | ✅     |
| [📓 Commitlint](https://commitlint.js.org/#/)                                | Lint commit messages                                                                           | ✅     |
| [🔢 standard version](https://commitlint.js.org/#/)                          | A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits | ⏰     |
| [Validte branch name](https://github.com/JsonMa/validate-branch-name#readme) | validate git branch name                                                                       | ✅     |

#### 🚫 Form/validation

| Name                                   | Description                                                          | status |
| -------------------------------------- | -------------------------------------------------------------------- | ------ |
| [React hook form](react-hook-form.com) | Performant,flexible and extensible forms with easy-to-use validation | ✅     |
| [Zod](https://zod.dev/)                | TypeScript-first schema validation with static type inference        | ✅     |

#### 🧪 Test

| Name                                                                             | Description                                                          | status |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------ |
| [jest](https://www.cypress.io/)                                                  | A delightful JavaScript Testing Framework with a focus on simplicity | ✅     |
| [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | React Testing Library                                                | ✅     |
| [cypress](https://www.cypress.io/)                                               | Test. Automate. Accelerate.[end-to-end testing]                      | ✅     |

#### ➕ Additional

| Name                                       | Description                                                                                  | status |
| ------------------------------------------ | -------------------------------------------------------------------------------------------- | ------ |
| [Partytown](https://partytown.builder.io/) | Relocate resource intensive third-party scripts off of the main thread and into a web worker | ⏰     |

#### 📈 Analysis

| Name                                                                          | Description                                       | status |
| ----------------------------------------------------------------------------- | ------------------------------------------------- | ------ |
| [why-did-you-render](https://github.com/welldone-software/why-did-you-render) | Notify you about potentially avoidable re-renders | ⏰     |
