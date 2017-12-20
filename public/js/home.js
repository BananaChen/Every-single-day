$("document").ready(function(){
  $.ajax({
    method: "POST",
    url: "user",
    success : function(data) {
     if (data) {                                                                                                                             
        $("#yourname").prepend(`<li><a href="your_lifestyle.html">${data}</a></li>`);
        $("#yourname").append(`<li><a href="#" onclick="back()">Log Out</a></li>`);
      } 
      else {
        $("#yourname").prepend(`<li><a href="#">Guest</a></li>`);
        $("#yourname").append(`<li><a href="form_login.html">Login</a></li>`);
      }  
    }

  });
});
function back(){
  $.ajax({
    method: "POST",
    url: "logout",
    success : function(data) {
      console.log("logout success");
      alert(`You have successfully log out 🙂 `);
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/index.html";
    }
  });
};

function d1(){
  $.ajax({
    method: "POST",
    url: "choose_department_1",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html";

    }
  });
};
function d2(){
  $.ajax({
    method: "POST",
    url: "choose_department_2",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
function d3(){
  $.ajax({
    method: "POST",
    url: "choose_department_3",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
function d4(){
  $.ajax({
    method: "POST",
    url: "choose_department_4",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
function d5(){
  $.ajax({
    method: "POST",
    url: "choose_department_5",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
function d6(){
  $.ajax({
    method: "POST",
    url: "choose_department_6",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
function d7(){
  $.ajax({
    method: "POST",
    url: "choose_department_7",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
function d8(){
  $.ajax({
    method: "POST",
    url: "choose_department_8",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
function d9(){
  $.ajax({
    method: "POST",
    url: "choose_department_9",
    success : function(data) {
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/explore.html"
    }
  });
};
