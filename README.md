<h1 align="center">
  <a href="https://zmrl.dev">
    zmrl.dev
  </a>
</h1>

This project began as a simple need for a portfolio site and
has progressed as a bleeding edge playground for me to try
technology I'm interested in. As such, the tech stack is probably
way overkill for this type of project, but conforms to best practices
in the strictest possible work environment I could come up with.

This project uses [pnpm](https://pnpm.io/) for its notable disk space
efficiency and overall convenience.

## Scripts

The following scripts can be used in the workspace root.
Each script will be run for every relevant app and package

### `pnpm build`

Build for an optimized production environment

### `pnpm test`

Run tests for each app

### `pnpm lint`

Check for issues

### `pnpm dev`

Start dev server

## Apps

| Name | Path                         | Description        |
| ---- | ---------------------------- | ------------------ |
| Main | [./apps/main/](./apps/main/) | Main portfolio app |
| Blog | [./apps/blog/](./apps/blog/) | Blog app           |

## Packages

| Name | Path | Description |
| ---- | ---- | ----------- |
