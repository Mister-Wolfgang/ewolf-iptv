module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-paper/babel',
  ],
  env: {
    production: {
      // keep other production-only plugins here if needed
      plugins: []
    },
  },
};
