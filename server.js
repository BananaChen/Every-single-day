const express = require('express');
const app = express();
const port = 2266;

app.use(express.static(__dirname+'/public'));

app.listen(port, function(err) {
    if(!err) console.log("Listening in port " + port);
});

//hohho

// Please install npm package mysql first
const config = require('./config');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: config.mysql.user,
	password: config.mysql.password
});

connection.connect();

app.get('/get', function(req, res) {
  //res.send(`<h1>Hello, ${req.query.name} ${req.query.account} ${req.query.email}</h1>`)
  var username = req.query.name;  
  var useraccount = req.query.account;
  var useremail = req.query.email;
//  var insert = "INSERT INTO `wp2017_groupc`.`user` (name, account, email) VALUES(?,?,?)";
  connection.query("INSERT INTO `wp2017_groupc`.`user` (name,account,email) VALUES(?,?,?)",[username, useraccount, useremail], function (err, result){
    if (err){
      console.log("insert failed!");
    }
    else console.log(result);
  });
})

//選擇
/*
var sel = "SELECT * FROM `wp2017_groupc`.`user` WHERE account='0001'";
connection.query(sel, (err,result) => {//result??
    if (err){
      console.log('selete failed!');
    }
    else{
      console.log("account: "+result);
      console.log(result);
    }
});
*/
//delete data in database
/*
var del = "DELETE FROM `wp2017_groupc`.`user` WHERE name = 'yiju'";
connection.query(del, function (err, result) {
  if (err){
    console.log('delete failed!');
  }
  console.log("Number of records deleted: " + result.affectedRows);
});
*/
