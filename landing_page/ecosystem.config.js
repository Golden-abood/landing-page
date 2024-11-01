const appDefaultConfig = {
  exec_mode: 'fork',
  script: 'npx'
}

module.exports = {
  apps: [
    {
      ...appDefaultConfig,
      name: 'wareed landing page',
      args: 'node ./.output/server/index.mjs',
      env: {
        PORT: 2004
      }
    }
  ]
}
