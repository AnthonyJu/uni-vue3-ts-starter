const antfu = require('@antfu/eslint-config').default
const { ignores, rules } = require('@anthony-ju/eslint-config')

module.exports = antfu({
  rules,
  ignores,
  unocss: true,
  formatters: {
    css: false,
    html: true,
  },
})
