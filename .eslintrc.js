module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended", 
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": '@typescript-eslint/parser',
    "plugins": ['@typescript-eslint'],
    "root": true,
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
  }