import server from '../src/server';
import models from '../src/models';
import setup from '../src/setup';

export default ({ port }) =>
  new Promise(resolve => {
    // Start database
    models.sequelize.sync({ force: true }).then(() => {
      // Setup database
      setup
        .setupDatabase({ models, silent: true, skipCreateTasks: true })
        .then(() => {
          // Start server
          server.start({ port }).then(app => resolve(app));
        });
    });
  });
