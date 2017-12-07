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

