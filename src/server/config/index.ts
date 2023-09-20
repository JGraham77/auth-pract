import * as dotenv from "dotenv";

dotenv.config();

export const sqlconfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
};

export const jwtconfig = {
    secret: process.env.JWT_SECRET as string,
    expires: process.env.JWT_EXPIRES,
};
