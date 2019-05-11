import chalk from 'chalk';
import app from './app';

console.log(chalk.blue('== Grow Roadmaps Starting =='));

process.on('uncaughtException', err => {
  console.error('Unhandled Exception', err);
});

process.on('uncaughtRejection', err => {
  console.error('Unhandled Rejection', err);
});

const PORT = process.env.PORT || '4100';

app().then(app => {
  const server = app.listen(PORT);
  server.on('error', onError);
  server.on('listening', () => {
    console.log(
      chalk.green(`• Server started succesfully, running at port ${PORT} 🚀`)
    );
  });
});

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var port = normalizePort(process.env.PORT || '4100');
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
