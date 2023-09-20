import { Request } from "express";

export interface UsersTable {
    id?: number;
    email?: string;
    password?: string;
    created_at?: Date;
}

export interface MysqlResponse {
    affectedRows: number;
    insertId: number;
}

export interface ReqUser extends Request {
    user?: UsersTable | Payload;
}

export interface Payload extends UsersTable {
    userid?: number;
    role?: number;
}

declare global {
    namespace Express {
        interface User extends Omit<UsersTable, "password"> {}
    }
}
