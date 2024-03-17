import { Server } from "./server/Server";
import myDataSource from "./server/config/database";

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

const server = new Server();

server.listen(3000);
