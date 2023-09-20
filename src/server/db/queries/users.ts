import { Query } from "../";
import { MysqlResponse, UsersTable } from "../../../types";

const find = (column: string, value: string) => Query<UsersTable[]>("SELECT * FROM users WHERE ??=?", [column, value]);

const insert = (newUser: { email: string; password: string }) =>
    Query<MysqlResponse>("INSERT INTO users SET ?", [newUser]);

export default {
    find,
    insert,
};
