module.exports = {
  plugins: ["gridsome"],
  extends: ["plugin:gridsome/recommended"],
  rules: {
    "no-trailing-spaces": "error",
    "no-tabs": 2,
    "eol-last": "error",
    "indent": [2, 2],
    "no-new": 0,
    "space-before-function-paren": [2, "never"],
    "vue/max-attributes-per-line": 0
  }
};