import chalk from 'chalk';
import models from './models';
import server from './server';

console.log(chalk.blue('== Grow Roadmaps Starting =='));

process.on('uncaughtException', err => {
  console.error('Unhandled Exception', err);
});

process.on('uncaughtRejection', err => {
  console.error('Unhandled Rejection', err);
});

const port = process.env.PORT || '4100';

const service = models.sequelize.sync().then(async () => {
  const serverStart = await server.start({ port });
  console.log(
    chalk.green(`• Server started succesfully, running at port ${port} 🚀`)
  );

  return serverStart;
});

export default service;
