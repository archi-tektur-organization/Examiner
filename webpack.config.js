let Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/ts/app.ts')
  .splitEntryChunks()
  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabel(() => {}, {
    useBuiltIns: 'usage',
    corejs: 3,
  })
  .enableSassLoader()
  .enableTypeScriptLoader()
  .enableIntegrityHashes(Encore.isProduction());

module.exports = Encore.getWebpackConfig();