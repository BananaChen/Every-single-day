const express = require('express');
const app = express();
const port = 2266;

app.use(express.static(__dirname+'/public'));

app.listen(port, function(err) {
    if(!err) console.log("Listening in port " + port);
});

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
  var useraccount = req.query.account;
  var userpassword = req.query.password;
  var check = "SELECT * FROM `wp2017_groupc`.`user` WHERE account = ? AND password = ?";
  connection.query(check, [useraccount, userpassword], function (err, rows, result){
    if (err){
      console.log("check failed!");
    }
    else{
      for(useraccount in rows){
        console.log(rows[useraccount].account);
        res.redirect('home.html')
      }
    }
  });
})

app.get('/get_signup', function(req, res) {  
  var signup_name = req.query.name_signup;
  var signup_account = req.query.account_signup;
  var signup_password = req.query.password_signup;
  var signup_check = req.query.password_again;
  var signup_email = req.query.email_signup;
  var insert = "INSERT INTO `wp2017_groupc`.`user` (name, account, password, email) VALUES(?,?,?,?)";
  connection.query(insert,[signup_name, signup_account, signup_password, signup_email], function (err, result){
    if (err){
      console.log("insert failed!");
    }
    else{
      res.redirect('home.html')
      console.log("1 account insert");
    }
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
var del = "DELETE FROM `wp2017_groupc`.`user` WHERE account = '0000'";
connection.query(del, function (err, result) {
  if (err){
    console.log('delete failed!');
  }
  console.log("Number of records deleted: " + result.affectedRows);
});
*/
