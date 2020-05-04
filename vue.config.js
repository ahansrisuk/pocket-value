const { theme } = require('./tailwind.config');

module.exports = {
  pwa: {
    name: 'Pocket Value',
    themeColor: theme.colors.background,
    msTileColor: theme.colors.background,
    manifestOptions: {
      background_color: theme.colors.background,
    },
  },
};
