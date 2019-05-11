module.exports = async function(opts) {
  if (!opts.watch && !opts.watchAll) {
    await global.__KNEX__.destroy();
  }
};
