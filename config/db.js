
import dotenv from 'dotenv';
import { Pool } from 'pg';

//dotenv.config();

export default (function () {

    const env = process.env;

    const port = (env.IS_CONTAINER === "TRUE") ? (5432) : (env.POSTGRES_PORT);

    const host = (env.IS_CONTAINER === "TRUE") ? (env.POSTGRES_HOST) : ("localhost");

    const db = new Pool({
        host: host,
        port: port,
        user: env.POSTGRES_USER,
        password: env.POSTGRES_PASSWORD,
        database: env.POSTGRES_DB,
    });

    return db;

})();