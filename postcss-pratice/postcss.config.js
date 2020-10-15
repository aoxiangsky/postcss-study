module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      autoprefixer: {
        cascade: false,
      },
      features: {
        "custom-properties": true,
      },
    },
    "postcss-prefixer": {
      prefix: "dipont-",
      ignore: [/\[class\*=.*\]/],
    },
    cssnano: true,
    "postcss-nesting": {},
  },
};
