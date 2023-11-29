const cors = require('cors')
const express = require('express');
const { request } = require('http');
const mysql = require('mysql')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021'


const app = express();
app.use(express.json())
app.use(cors());





//mysql connection


// production
// const connection = mysql.createConnection({
//     host: '10.0.51.72',
//     user: 'client',
//     password: 'p11026',
//     database: 'phr_queue',
//     port: '3306'
// })

//localhost
const connection = mysql.createConnection({
    host: '10.0.51.4',
    user: 'clientaccess',
    password: 'p11026',
    database: 'hosxp',
    port: '3306',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci'
})

connection.connect((err) =>{
    if (err){
        console.log('Error connecting to mysql database = ', err)
        return;
    }
    console.log('Mysql Successfully connected!')
})


//LIVE Search

app.get("/livesearch/:text", async (req, res) => {
    const text = req.params.text
    try {
        connection.query("SET NAMES utf8mb4");
        connection.query("SELECT hn, CONCAT(pname, fname, ' ', lname) AS fullname FROM patient WHERE hn LIKE ? OR CONCAT(pname, fname, ' ', lname) LIKE ? LIMIT 10",
            [`%${text}%`, `%${text}%`],
            (err, result, fields) => {
                if (err) {
                    console.log("error");
                    return res.status(400).send();
                }
                res.status(200).json(result);
            });
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
});









app.listen(3002,()=>console.log('Server Is running on port 3002'));