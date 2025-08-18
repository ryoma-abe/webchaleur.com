const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "autoprefixer": {},
    ...(process.env.NODE_ENV === 'production' && {
      "cssnano": {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          mergeIdents: false,
          reduceIdents: false,
          minifyFontValues: true,
          minifyGradients: true,
        }]
      }
    })
  },
};

export default config;