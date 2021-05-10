const Pg = require("pg");
const dbInfo = require("../config/default.json").database;
const pool = new Pg.Pool({
    user: dbInfo.user,
    host: dbInfo.host,
    database: dbInfo.database,
    password: dbInfo.password,
    port: dbInfo.port
});

module.exports = {
    query: (sql, values) => pool.query(sql, values)  
};