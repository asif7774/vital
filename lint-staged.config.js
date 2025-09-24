export default {
  "*.{ts,tsx,css}": ["prettier . --write"],
  "*.{ts,tsx}": [
    "eslint . --cache --fix --ext .tsx --ext .ts",
    () => "npm run tsc",
    () => "npm run test",
  ],
};
