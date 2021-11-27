// Options: https://prettier.io/docs/en/options
// Configuration: https://prettier.io/docs/en/configuration
module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  overrides: [
    {
      files: '*.js',
      options: {
        semi: true
      }
    }
  ],
  // Resolves "Delete `␍` eslint(prettier/prettier)" warning
  endOfLine: 'auto'
};
