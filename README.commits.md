# Commits

Use `commitizen` to prepare commit messages.

## Installation

```shell
npm install -g commitizen
```

## Commiting

Instead of `git commit`, use:

```shell
git cz
```

Or see following section on `husky`.

## Husky

This project uses a commit hook to automatically invoke commitizen when using `git commit`.
