module.exports = {
  root: true,
  env: {
    "jest/globals": true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "react-native/no-inline-styles": "off",
    "no-redeclare": "off",
    "import/export": "off",
    "react-hooks/rules-of-hooks": "off"
  }
};
