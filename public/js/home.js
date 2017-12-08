$("document").ready(function(){
  $.ajax({
    method: "POST",
    url: "user",
    success : function(data) {
      if (data == null) {
        $("#yourname").prepend(`<li><a href="#">Guest</a></li>`);
        $("#yourname").append(`<li><a href="form_login.html">Login</a></li>`);
      }
      else {
        $("#yourname").prepend(`<li><a href="your_lifestyle.html">${data}</a></li>`);
        $("#yourname").append(`<li><a href="#" onclick="back()">Log Out</a></li>`);
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
      alert("You've successfully log out ..");
      window.top.location.href = "http://luffy.ee.ncku.edu.tw:2266/index.html";
    }
  });
};
