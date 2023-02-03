module.exports = {
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : './public/locales',
};
