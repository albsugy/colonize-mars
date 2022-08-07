// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProduction = process.env.NODE_ENV === 'production'

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false
  },
  pwa: {
    dest: 'public'
  }
}

module.exports = !isProduction ? settings : withPWA(settings)
