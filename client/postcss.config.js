module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    [
      'postcss-normalize',
      {
        forceImport: true
      }
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './public/index.html'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ['html', 'body'],
          deep: [/^modal/, /^react-/, /^slick-/],
          greedy: [/^Mui/, /^swiper/]
        }
      }
    ],
    [
      'cssnano',
      {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            minifyFontValues: true,
            minifyGradients: true,
            calc: false
          },
        ],
      },
    ],
  ],
}; 