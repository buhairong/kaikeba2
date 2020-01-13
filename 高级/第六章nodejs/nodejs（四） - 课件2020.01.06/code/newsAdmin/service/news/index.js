const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'js05',
    password:"123"
})

module.exports = {
   async getData(){
        let [data] = await connection.promise().query("SELECT * FROM news");
        // console.log(data);
        return data;
    }
}