import "reflect-metadata"
import { DataSource } from "typeorm"
import { init1626737786922 } from "./src/migrations/1626737786922-init"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database.db",
    synchronize: true,
    logging: true,
    entities: ["src/models/**/*{.js,.ts}"],
    migrations: [init1626737786922],
    subscribers: [],
})
