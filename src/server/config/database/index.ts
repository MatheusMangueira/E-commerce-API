import { DataSource } from "typeorm";
import { ProductModel } from "../../model";

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "123456",
    database: "shop-db",
    entities: [ProductModel],
    synchronize: true,
});

export default myDataSource;
