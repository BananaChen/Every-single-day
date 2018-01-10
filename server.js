const express = require('express');
const CookieStore = require('cookie-sessions');
const app = express();
const port = 2266;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const escape = require("html-escape");
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/user'));
app.use(CookieStore({secret:'day'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

var fs2 = require('fs');
var fs3 = require('fs');
var key = fs2.readFileSync('ssl/private.key');
var cert = fs2.readFileSync( 'ssl/certificate.crt' );
var ca = fs2.readFileSync( 'ssl/ca_bundle.crt' );
var options = {
  key: key,
  cert: cert,
  ca: ca
};
var https = require('https');
https.createServer(options, app).listen(port, function(err){
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
app.post('/post', function(req, res) {  
  var useraccount = req.body.account;
  //console.log("t = "+req.session.id);
  var userpassword = req.body.password;
  var md5 = crypto.createHash('md5');
  userpassword = md5.update(userpassword).digest('hex');//加密密碼
  var checkaccount = 0;
  var check = "SELECT * FROM `wp2017_groupc`.`user` WHERE account = ?";
  connection.query(check, [useraccount], function (err, rows, result){
    if (err){
      console.log("log in check failed!");
    }
    else{
      for(useraccount in rows){
        checkaccount = 1;
      }
    }
    if(checkaccount == 1){ 
      if(rows[useraccount].password == userpassword){
        req.session = {account:rows[useraccount].account, counting:0, department:'0', id:rows[useraccount].account};
        //req.cookies.is_login = true;
        console.log("log in:" + rows[useraccount].account);
        res.redirect('home.html');
      }
      else res.send(`Your password is wrong`);
    }
    else{
      res.redirect('form_signup.html')
    }
    fs3.exports = {
        escape: function(html) {
            return String(html)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        },
    }
});
});

//sign up
var signup_account;
app.post('/post_signup',urlencodedParser, function(req, res) {
  signup_account = escape(req.body.account_signup);
  var signup_password = req.body.password_signup;
  var signup_passcheck = req.body.password_again;
  var samepass = 0;
  if(signup_password == signup_passcheck) samepass = 1;
  var md5 = crypto.createHash('md5');
  signup_password = md5.update(signup_password).digest('hex');//加密密碼
  var signup_email = req.body.email_signup;
  var insert = "INSERT INTO `wp2017_groupc`.`user` (account, password, email) VALUES(?,?,?)";
  var check_signup = "SELECT * FROM `wp2017_groupc`.`user` WHERE account = ?";
  var newaccount = 0;
  req.session={id:signup_account};
  connection.query(check_signup, [signup_account], function (err, rows, result){
    if (err){
      console.log("sign up select failed");
    }
    else{
      for(signup_account in rows){
        newaccount = 1;
      }
    }
    if(newaccount == 0){
      if(samepass == 1){
        connection.query(insert,[signup_account, signup_password, signup_email], function (err, result){
          if (err){
            console.log("sign up insert failed");
          }
          else{
            res.redirect('person_info.html')
            console.log("sign up:" + signup_account);
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

//facebook log in
app.post('/post_fb',urlencodedParser,function(req, res){
    console.log("in the post_fb");
    var fb_id =`${req.body.id}`;   
    req.session={id:fb_id};
    console.log(req.session.id);
    var fb_name =`${req.body.name}`;
    signup_account = fb_name;
    var insert = "INSERT INTO `wp2017_groupc`.`user_fb` (NAME, id) VALUES(?,?)"; 
    var checkaccount = 0;
    var check = "SELECT *FROM `wp2017_groupc`.`user_fb` WHERE id = ?";
    connection.query(check, [fb_id], function(err, rows, result){
        if (err){
          console.log("check failed");
        }
        else{
          for(fb_id in rows){
            checkaccount = 1;
            console.log("you have already been the user");
          }
        }
        //fb_signup
        if(checkaccount == 0){
          connection.query(insert,[fb_name,fb_id], function (err, result){
            if (err){
              console.log("insert failed!");
            }
            else{ 
              var dir = './user/'+fb_id;//make user dir
              var dir1 = './user/'+fb_id+'/head/';//make user dir
              var dir2 = './user/'+fb_id+'/hand';//make user dir
              var dir3 = './user/'+fb_id+'/foot/';//make user dir

              console.log(dir1);
              if(!fs.existsSync(dir)){
                fs.mkdirSync(dir);
                fs.mkdirSync(dir1);
                fs.mkdirSync(dir2);
                fs.mkdirSync(dir3);
              }
              res.send("1");
            }
          });
        }
        else {
          console.log("already there!");
          var a="0";
          for(fb_name in rows){
            req.session={account:rows[fb_name].NAME, id:rows[fb_name].id, counting:0, department:'0'};
          }
          console.log(req.session);
          res.send(a);
        }
    });
});
//person_information
app.post('/post_info',urlencodedParser, function(req, res) {
  var p_id = req.session.id;
  var p_account = signup_account;
  var p_birthday = req.body.p_birthday;
  var p_department = req.body.p_department;
  var p_hobby = req.body.p_hobby;
  var p_insert = "INSERT INTO `wp2017_groupc`.`person_information` (account, birthday, department, hobby, id) VALUES(?,?,?,?,?)";
  var p_select = "SELECT * FROM `wp2017_groupc`.`user` WHERE account = ?";
  var t=0;
  var tt;
  var p_select_fb = "SELECT * FROM `wp2017_groupc`.`user_fb` WHERE NAME = ?";
  connection.query(p_insert, [p_account, p_birthday,p_department, p_hobby, p_id], function (err, result){
    if (err){
      console.log("person_info select failed");
    }
    else{
      connection.query(p_select, [p_account], function (err, rows, result){
        for(p_account in rows){
          req.session = {account:rows[p_account].account, counting:0, department:'0', id:rows[p_account].account};
          console.log("person_info:" + req.session.account);
          var dir ='./user/'+req.session.account;//make user dir
          var dir1 = './user/'+req.session.account+'/head/';//make user dir
          var dir2 = './user/'+req.session.account+'/hand';//make user dir
          var dir3 = './user/'+req.session.account+'/foot/';//make user dir
          console.log("a new dir");
          if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            fs.mkdirSync(dir1);
            fs.mkdirSync(dir2);
            fs.mkdirSync(dir3);
          }
          res.redirect('home.html');
        }
      });
       connection.query(p_select_fb, [p_account], function (err, rows, result){
        for(p_account in rows){
          req.session = {account:rows[p_account].NAME, counting:0, department:'0'};
          console.log("person_info:" + req.session.account);
          res.redirect('home.html');
        }
 });
    }
  });
});

//user name
app.post('/user',urlencodedParser, function(req,res){
  if (req.session == null) {
    res.send(null);
  }
  else if(req.session.account == null){
    res.send(null);
  }
  else {
    console.log("user session:" + req.session.account);
    res.send(req.session.account);
  }
});
//index name
app.post('/indexname',urlencodedParser, function(req,res){
  if (req.session == null) {
    res.send(null);
  }
  else {
    res.send(req.session.account);
  }
});
//default user name
app.post('/default', function(req,res){
  if (!req.session) {
    req.session = {account:null,counting:0,department:'0'};
    res.send("first visit");
  }
  else {
    res.send("not first visit");
  }
});

//btn
app.post('/btn',urlencodedParser, function(req,res){
  if(req.session==null){
    res.send(null);
  }
  else res.send(req.session.account);
});

//regis
app.post('/regis',urlencodedParser, function(req,res){
  if(req.session==null){
    res.send(null);
  }
  else res.send(req.session.account);
});

//go to explore
app.post('/department',urlencodedParser, function(req,res){
  if(req.session) res.send(req.session.department);
  else res.send(null);
});
app.post('/choose_department_1',urlencodedParser, function(req,res){
  var depart = '1';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});
app.post('/choose_department_2',urlencodedParser, function(req,res){           
	var depart = '2';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");  
});
app.post('/choose_department_3',urlencodedParser, function(req,res){           
	var depart = '3';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});
app.post('/choose_department_4',urlencodedParser, function(req,res){           
	var depart = '4';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});
app.post('/choose_department_5',urlencodedParser, function(req,res){           
	var depart = '5';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});
app.post('/choose_department_6',urlencodedParser, function(req,res){           
	var depart = '6';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});
app.post('/choose_department_7',urlencodedParser, function(req,res){           
	var depart = '7';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});
app.post('/choose_department_8',urlencodedParser, function(req,res){           
	var depart = '8';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});
app.post('/choose_department_9',urlencodedParser, function(req,res){           
	var depart = '9';
  if(req.session) req.session.department = depart;
  else req.session={department:depart};
  res.send("let's go");
});

//explore pictures
app.post('/explore_pic',urlencodedParser, function(req,res){
  res.send('CSIE');
});

//logout
app.post('/logout',urlencodedParser, function(req,res){
  console.log("user logout:" + req.session.account);
  req.session = null;
  req.cookies.is_login = false;
  res.send(null);
});

/*personal box*/
var fs5 = require('fs');
app.post('/personal_box_head',urlencodedParser, function(req,res){
  var path = 'user/'+req.session.id+'/head';
  fs5.readdir(path, function (err, files) {
  	if (err) {
    	throw err;
    }
    var send_path = '/'+req.session.id+'/head/';
    res.send([send_path, files]);
	});  
});
app.post('/personal_box_hand',urlencodedParser, function(req,res){
  var path = 'user/'+req.session.id+'/hand';
  fs5.readdir(path, function (err, files) {
    if (err) {
      throw err;
    }
    var send_path = '/'+req.session.id+'/hand/';
    res.send([send_path, files]);
  });
});
app.post('/personal_box_foot',urlencodedParser, function(req,res){
  var path = 'user/'+req.session.id+'/foot';
  fs5.readdir(path, function (err, files) {
    if (err) {
      throw err;
    }
    var send_path = '/'+req.session.id+'/foot/';
    res.send([send_path, files]);
  });
});

/*picture upload*/
var fs1 = require('fs');
var busboy = require('connect-busboy');
var pic_insert =  "INSERT INTO `wp2017_groupc`.`person_pic` (account, path) VALUES(?,?)";
app.use(busboy());
app.post('/upload_head', function(req, res){
    var fstream;
    var account = req.session.account;
    var path = '/user/'+req.session.id+'/head/';
    var send_path = '/'+req.session.id+'/head/';
    req.pipe(req.busboy);
    req.busboy.on('file', function (filedname, file, filename){
        fstream = fs1.createWriteStream(__dirname + path + filename);
        file.pipe(fstream);
        connection.query(pic_insert, [account, path+filename], function (err, result){
        	if (err){
           	console.log("failed");
         	}
         	else{
            console.log("insert!");
         	}
        });
        fstream.on('close',function(){
        	fstream.close();
        	res.send(send_path+filename);
        });
    });
});
app.post('/upload_hand', function(req, res){
    var fstream;
    var account = req.session.account;
    var path = '/user/'+req.session.id+'/hand/';
    var send_path = '/'+req.session.id+'/hand/';
    req.pipe(req.busboy);
    req.busboy.on('file', function (filedname, file, filename){
        fstream = fs1.createWriteStream(__dirname + path + filename);
        file.pipe(fstream);
        connection.query(pic_insert, [account, path+filename], function (err, result){
          if (err){
            console.log("failed");
          }
          else{
            console.log("insert!");
          }
        });
        fstream.on('close',function(){
          fstream.close();
          res.send(send_path+filename);
        });
    });
});
app.post('/upload_foot', function(req, res){
    var fstream;
    var account = req.session.account;
    var path = '/user/'+req.session.id+'/foot/';
    var send_path = '/'+req.session.id+'/foot/';
    req.pipe(req.busboy);
    req.busboy.on('file', function (filedname, file, filename){
        fstream = fs1.createWriteStream(__dirname + path + filename);
        file.pipe(fstream);
        connection.query(pic_insert, [account, path+filename], function (err, result){
          if (err){
            console.log("failed");
          }
          else{
            console.log("insert!");
          }
        });
        fstream.on('close',function(){
          fstream.close();
          res.send(send_path+filename);
        });
    });
});

/*refresh explore.html*/
app.post('/refresh_explore', urlencodedParser, function(req, res){
  if(req.session) req.session.counting = 0;
  else req.session = {account:null, counting:0};
	console.log('index is now '+req.session.counting);
	var accounts = "SELECT account FROM `wp2017_groupc`.`person_information`";
  connection.query(accounts , (err,result) => {
    if (err) {
      throw err;
    }
    else {
      var dir = 'user/'+result[0].account; 
      fs3.readdir('user', function (err, files) {
        if (err) {
          throw err;
        }
        files = files.sort(() => Math.random() - 0.5);
        files = files.splice(0, 7);
        res.send([files, result[0].account]);
      });
    }
  });
});

/*view more*/
var path = require('path');
var fs3 = require('fs');
app.post('/view_more', function(req, res){
  console.log('index is now '+req.session.counting);
  var accounts = "SELECT account FROM `wp2017_groupc`.`person_information`";
  connection.query(accounts , (err,result) => {
		req.session.counting = req.session.counting + 1;
    if (err) {
      throw err;
    }
    else {
      if (req.session.counting < result.length) { //array size
				var dir = 'user/'+result[req.session.counting].account; 
		    fs3.readdir('user', function (err, files) {
    		  if (err) {
       			throw err;
      		}
      		files = files.sort(() => Math.random() - 0.5);
		      files = files.splice(0, 7);
    		  res.send([files, result[req.session.counting].account]);
    		});
      }
			else {
				console.log('no more accounts!');
				res.send(null);
			}
    }
  });
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
var del = "DELETE FROM `wp2017_groupc`.`user` WHERE email='s@s'";
var del = "DELETE FROM `wp2017_groupc`.`person_information` WHERE hobby = ''";
connection.query(del, function (err, result) {
  if (err){
    console.log('delete failed!');
  }
  console.log("Number of records deleted: " + result.affectedRows);
});
*/
