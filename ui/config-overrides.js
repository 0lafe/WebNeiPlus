// config-overrides.js
const {alias, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./jsconfig.paths.json') // or jsconfig.paths.json

module.exports = alias(aliasMap)