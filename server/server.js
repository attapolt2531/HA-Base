const cors = require('cors')
const express = require('express');
const { request } = require('http');
const mysql = require('mysql')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021'
const axios = require('axios');
const fs = require('fs');
const path = require('path');


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
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DrugResistant',
    port: '3306'
})

connection.connect((err) =>{
    if (err){
        console.log('Error connecting to mysql database = ', err)
        return;
    }
    console.log('Mysql Successfully connected!')
})





app.listen(3001,()=>console.log('Server Is running on port 3001'));