const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')
const { rules, ignores } = require('@anthony-ju/eslint-config')

module.exports = uni(
  {
    rules,
    ignores,
  },

  unocss.configs.flat,
)
