const path = require('path')

// FIXME maybe the prettier one is redundant with the filenames map?

const prettierCommand = (filenames) =>
    `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

const eslintCommand = (filenames) =>
    `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const checkTypescriptCommand = () =>
    `npm run check-typescript`

module.exports = {
    '*.{ts,tsx}': [prettierCommand, eslintCommand, checkTypescriptCommand],
}
