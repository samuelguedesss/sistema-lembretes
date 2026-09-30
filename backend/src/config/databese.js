import 'dotenv/config';
import { Sequelize } from 'sequelize';

const databaseConfig = {
    dialect: 'mysql',

    pool: {
        max: 10,
        min: 2,
        acquire: 20000,
        idle: 10000,
    },
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    define: {
        timestamps: true,
        underscored: true,
    },
    logging: false,
};

export const sequelize = new Sequelize(databaseConfig);