export default ({ ts, clientPrettier, clientEslintStyle }) => {
  return `
  {
    "extends": ["${clientEslintStyle}", ${clientPrettier ? `"plugin:prettier/recommended"` : ''}],
    ${
      ts
        ? `
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"]
    `
        : ''
    }
  }
  `
}
