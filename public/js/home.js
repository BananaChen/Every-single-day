$("document").ready(function(){
  $.ajax({
    method: "POST",
    url: "user",
    success : function(data) {
      var text = `<li><a href="your_lifestyle.html">${data}</a></li>`;
      $("#yourname").prepend(text);
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
