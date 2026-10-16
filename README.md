# Angular Atelier

**Angular Atelier** is a small frontend practice studio for learning Angular fundamentals. It brings together examples of variables, data binding, template control flow, and directives in a simple multi-page app.

This is a learning project, not a production application. The examples are intentionally small and use sample data so you can explore Angular concepts and experiment with the code.

## What you can explore

- **Variables** — component values, dates, objects, and arrays rendered in the template.
- **Control Flow** — conditional content with `@if`, repeated content with `@for`, form controls, and sample student records.
- **Data Binding** — interpolation, property binding, event binding, and two-way binding with `ngModel`.
- **Directives** — a placeholder page for future directive practice.
- **Navigation** — Angular Router links between the practice pages, including a default route and a not-found page.

The app uses a shared, responsive visual style and Bootstrap's CSS alongside custom styles.

## Requirements

- Node.js and npm

## Run locally

Clone the repository, open a terminal in the project folder, and install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The server reloads the app when source files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server. |
| `npm run build` | Build the app into `dist/`. |
| `npm test` | Run unit tests. |
| `npm run watch` | Rebuild when files change using the development configuration. |

## Project structure

```text
src/
├── app/
│   ├── components/
│   │   ├── control-flow/
│   │   ├── databinding/
│   │   ├── directive-exp/
│   │   ├── not-found/
│   │   └── variables/
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── styles.css
└── main.ts
```

