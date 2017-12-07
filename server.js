const express = require('express');
const CookieStore = require('cookie-sessions');
const app = express();
const port = 2266;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});
const crypto = require('crypto');

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/user'));
app.use(CookieStore({secret:'day'}));

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

var fs = require('fs');//make new dir

//log in
app.post('/post',urlencodedParser, function(req, res) {  
  var useremail = req.body.account;
  var userpassword = req.body.password;
  var md5 = crypto.createHash('md5');
  userpassword = md5.update(userpassword).digest('hex');//加密密碼
  var checkaccount = 0;
  var check = "SELECT * FROM `wp2017_groupc`.`user` WHERE email = ?";
  connection.query(check, [useremail], function (err, rows, result){
    if (err){
      console.log("check failed!");
    }
    else{
      for(useremail in rows){
        checkaccount = 1;
      }
    }
    if(checkaccount == 1){ 
      if(rows[useremail].password == userpassword){
        console.log(rows[useremail].email);
        req.session = {email:rows[useremail].email, name:rows[useremail].name};
        res.redirect('home.html')
      }
      else res.send(`Your password is wrong`);
    }
    else{
      res.redirect('form_signup.html')
    }
  });
});
//sign up
var signup_name;
app.post('/post_signup',urlencodedParser, function(req, res) {  
  //var signup_name = req.body.name_signup;
  signup_name = req.body.name_signup;
  var signup_password = req.body.password_signup;
  var signup_passcheck = req.body.password_again;
  var samepass = 0;
  if(signup_password == signup_passcheck) samepass = 1;
  var md5 = crypto.createHash('md5');
  signup_password = md5.update(signup_password).digest('hex');//加密密碼
  var signup_email = req.body.email_signup;
  var insert = "INSERT INTO `wp2017_groupc`.`user` (name, password, email) VALUES(?,?,?)";
  var check_signup = "SELECT * FROM `wp2017_groupc`.`user` WHERE email = ?";
  var newaccount = 0;
  connection.query(check_signup, [signup_email], function (err, rows, result){
    if (err){
      console.log("select failed");
    }
    else{
      for(useremail in rows){
        newaccount = 1;
      }
    }
    if(newaccount == 0){
      if(samepass == 1){
        connection.query(insert,[signup_name, signup_password, signup_email], function (err, result){
          if (err){
            console.log("insert failed");
          }
          else{
            res.redirect('person_info.html')
            console.log(signup_email);
          }
        });
      }
      else res.send(`Your password is wrong`);
    }
    else{
      res.send(`The email has already existed`);
    }
  });
});
//person_information
app.post('/post_info',urlencodedParser, function(req, res) {
  //var p_name = req.body.p_name;
  var p_name = signup_name;
  var p_birthday = req.body.p_birthday;
  var p_department = req.body.p_department;
  var p_hobby = req.body.p_hobby;
  var p_insert = "INSERT INTO `wp2017_groupc`.`person_information` (name, birthday, department, hobby) VALUES(?,?,?,?)";
  connection.query(p_insert, [p_name, p_birthday,p_department, p_hobby], function (err, rows, result){
    if (err){
      console.log("select failed");
    }
    else{
      res.redirect('home.html')
      console.log(p_name);
    }
  });
});

//facebook log in
app.post('/post_fb',urlencodedParser,function(req, res){
    //console.log("already there!");
    //var a=5;
    //res.send(a);
    //return;
    console.log("in the post_fb");
    var fb_id =` ${req.body.id}`;   
    var fb_name =` ${req.body.name}`;
    console.log(fb_name);
    var insert = "INSERT INTO `wp2017_groupc`.`user_fb` (ID, NAME) VALUES(?,?)"; 
    var checkaccount = 0;
    var check = "SELECT *FROM `wp2017_groupc`.`user_fb` WHERE ID = ?";
    connection.query(check, [fb_id], function(err, rows, result){
        if (err){
            console.log("check failed");
        }
        else{
            for(fb_id in rows){
                checkaccount = 1;
                console.log("you have already been the user");
                //res.send("1")
            }
        }
        if(checkaccount == 0){
             connection.query(insert,[fb_id,fb_name], function (err, result){
                if (err){
                    console.log("insert failed!");
                }
                else{ 
                        console.log("1 account insert");
                        var dir = './user/'+fb_id;//make user dir
                        console.log("a new dir");
                        if(!fs.existsSync(dir)){
                            fs.mkdirSync(dir);
                        }
                        res.send("1");
                        
                    }
                });
        
        }
        else {
                console.log("already there!");
                var a="0";
                res.send(a);
        }
    });
});

//user name
app.post('/user',urlencodedParser, function(req,res){
  console.log(req.session.name);
  res.send(req.session.name);
});

//view more //when refresh the pages, how do we reload this?
var i = -1;
app.post('/view_more',urlencodedParser, function(req, res) {
  //var r = Math.floor((Math.random() * 6));
  var rand_pick = "SELECT name FROM `wp2017_groupc`.`person_information`";
  connection.query(rand_pick, (err,result) => { //checking function
    if (err) {
      throw err;
    }
    else {
      if (i <= 5) { // i <= array size
        //console.log();
        i=i+1;
        res.status(200).send(result[i].name);
      }
    }
  });
});


var fs1 = require('fs');
var busboy = require('connect-busboy');

app.use(busboy());

app.post('/upload', function(req, res){
    var fstream;
    //var dir = './user/'+fb_id;
    req.pipe(req.busboy);
    req.busboy.on('file', function (filedname, file, filename){
        console.log("Uploading: " +filename);
        fstream = fs1.createWriteStream(__dirname +'/user/'+ filename);
        console.log(fstream);
        file.pipe(fstream);
        fstream.on('close',function(){
            res.redirect('back');
        });
    });
    res.send(filename);
});

//get picture
//var path = require('path');

app.get('/show_pic', function(req, res){
  res.send('emma.jpg');
}); 

//選擇
/*
var sel = "SELECT * FROM `wp2017_groupc`.`user` WHERE account='0001'";
connection.query(sel, (err,result) => {//result?? yes!!
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
var del = "DELETE FROM `wp2017_groupc`.`user` WHERE account = 'yiju2'";
connection.query(del, function (err, result) {
  if (err){
    console.log('delete failed!');
  }
  console.log("Number of records deleted: " + result.affectedRows);
});
*/
