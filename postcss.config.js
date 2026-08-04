// postcss.config.js (или postcss.config.mjs)
export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
    },
  },
};
