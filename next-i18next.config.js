import path from 'path'

const config = {
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
  },
  localePath:
    typeof window === 'undefined'
      ? path.resolve('./public/locales')
      : './public/locales',
}

export default config
