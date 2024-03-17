import { Server } from './server/Server';
import { AppDataSource } from './server/config/database';



AppDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });


const server = new Server();

server.listen(3000);