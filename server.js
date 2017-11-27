const express = require('express');
const app = express();
const port = 2266;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});
const crypto = require('crypto');

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

app.post('/post',urlencodedParser, function(req, res) {  
  var useraccount = req.body.account;
  var userpassword = req.body.password;
  var md5 = crypto.createHash('md5');
  userpassword = md5.update(userpassword).digest('hex');//加密密碼
  var checkaccount = 0;
  var check = "SELECT * FROM `wp2017_groupc`.`user` WHERE account = ?";
  connection.query(check, [useraccount], function (err, rows, result){
    if (err){
      console.log("check failed!");
    }
    else{
      for(useraccount in rows){
        checkaccount = 1;
      }
    }
    if(checkaccount == 1){ 
      if(rows[useraccount].password == userpassword){
        console.log(rows[useraccount].account);
        res.redirect('home.html')
      }
      else res.send(`Your password is wrong`);
    }
    else{
      res.redirect('form_signup.html')
    }
  });
});
app.post('/post_signup',urlencodedParser, function(req, res) {  
  var signup_name = req.body.name_signup;
  var signup_account = req.body.account_signup;
  var signup_password = req.body.password_signup;
  var signup_passcheck = req.body.password_again;
  var samepass = 0;
  if(signup_password == signup_passcheck) samepass = 1;
  var md5 = crypto.createHash('md5');
  signup_password = md5.update(signup_password).digest('hex');//加密密碼
  var signup_email = req.body.email_signup;
  var insert = "INSERT INTO `wp2017_groupc`.`user` (name, account, password, email) VALUES(?,?,?,?)";
  var check_signup = "SELECT * FROM `wp2017_groupc`.`user` WHERE account = ?";
  var newaccount = 0;
  connection.query(check_signup, [signup_account], function (err, rows, result){
    if (err){
      console.log("select failed");
    }
    else{
      for(useraccount in rows){
        newaccount = 1;
      }
    }
    if(newaccount == 0){
      if(samepass == 1){
        connection.query(insert,[signup_name, signup_account, signup_password, signup_email], function (err, result){
          if (err){
            console.log("insert failed");
          }
          else{
            res.redirect('home.html')
            console.log(signup_account);
          }
        });
      }
      else res.send(`Your password is wrong`);
    }
    else{
      res.send(`The account has already existed`);
    }
  });
});
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
