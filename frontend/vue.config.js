const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/var/www/ismrdvlpr_ru_usr34/data/www/ismrdvlpr.ru/frontend/dist'
    : '/'

})
