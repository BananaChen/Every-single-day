var box = 1;
var b1_col = 1;
var b2_col = 1;
var b3_col = 1;
var progress = $(".progress");
var bar = $(".bar");
var percent = $(".percent");
$("#myform_head").ajaxForm({
  //$(".progress").css({"display":"block"});
  beforeSend: function() {
    progress.css({"display":"block"});
    var percentVal = '0%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  uploadProgress: function(event, position, total, percentComplete) {
    var percentVal = percentComplete + '%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  success: function() {
    var percentVal = '100%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  complete: function(data) {
    progress.css({"display":"none"});
    var pic = '<a href="' + data.responseText + '" class="swipebox" title=""> <img src="'+ data.responseText +'" alt="image"></a>';
    switch (b1_col) {
      case 1:
        $("#box1_col1").prepend(pic).fadeIn(500);
          b1_col++;
          b1_col %= 2;
          break;
      case 0:
        $("#box1_col2").prepend(pic).fadeIn(500);
          b1_col++;
          b1_col %= 2;
          break;
    }
	}
});

$("#myform_hand").ajaxForm({
  //$(".progress").css({"display":"block"});
  beforeSend: function() {
    progress.css({"display":"block"});
    var percentVal = '0%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  uploadProgress: function(event, position, total, percentComplete) {
    var percentVal = percentComplete + '%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  success: function() {
    var percentVal = '100%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  complete: function(data) {
    progress.css({"display":"none"});
    var pic = '<a href="' + data.responseText + '" class="swipebox" title=""> <img src="'+ data.responseText +'" alt="image"></a>';
    switch (b2_col) {
      case 1:
        $("#box2_col1").prepend(pic).fadeIn(500);
          b2_col++;
          b2_col %= 2;
          break;
      case 0:
			  $("#box2_col2").prepend(pic).fadeIn(500);
          b2_col++;
          b2_col %= 2;
          break;
    }
	}
});

$("#myform_foot").ajaxForm({
  //$(".progress").css({"display":"block"});
  beforeSend: function() {
    progress.css({"display":"block"});
    var percentVal = '0%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  uploadProgress: function(event, position, total, percentComplete) {
    var percentVal = percentComplete + '%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  success: function() {
    var percentVal = '100%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  complete: function(data) {
    progress.css({"display":"none"});
    var pic = '<a href="' + data.responseText + '" class="swipebox" title=""> <img src="'+ data.responseText +'" alt="image"></a>';
    switch (b3_col) {
      case 1:
        $("#box3_col1").prepend(pic).fadeIn(500);
          b3_col++;
          b3_col %= 2;
          break;
      case 0:
        $("#box3_col2").prepend(pic).fadeIn(500);
          b3_col++;
          b3_col %= 2;
          break;
    }
	}
});
/*
$("#myform_head").ajaxForm({
  //$(".progress").css({"display":"block"});
  beforeSend: function() {
    progress.css({"display":"block"});
    var percentVal = '0%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  uploadProgress: function(event, position, total, percentComplete) {
    var percentVal = percentComplete + '%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  success: function() {
    var percentVal = '100%';
    bar.width(percentVal);
    percent.html(percentVal);
  },
  complete: function(data) {
    progress.css({"display":"none"});
    var pic = '<a href="' + data.responseText + '" class="swipebox" title=""> <img src="'+ data.responseText +'" alt="image"></a>';
    switch (box) {
      case 1:
        switch (b1_col) {
          case 1:
            $("#box1_col1").prepend(pic).fadeIn(500);
            b1_col++;
            b1_col %= 2;
            break;
          case 0:
            $("#box1_col2").prepend(pic).fadeIn(500);
            b1_col++;
            b1_col %= 2;
            break;
        }
        break;

      case 2:
        switch (b2_col) {
          case 1:
            $("#box2_col1").prepend(pic).fadeIn(500);
            b2_col++;
            b2_col %= 2;
            break;
          case 0:
						$("#box2_col2").prepend(pic).fadeIn(500);
              b2_col++;
              b2_col %= 2;
              break;
        }
        break;

			case 3:
        switch (b3_col) {
          case 1:
            $("#box3_col1").prepend(pic).fadeIn(500);
            b3_col++;
            b3_col %= 2;
            break;
          case 0:
            $("#box3_col2").prepend(pic).fadeIn(500);
            b3_col++;
            b3_col %= 2;
            break;
        }
        break;
		}


  }
});
*/

//show different picture box and different upload form
$("#head").click(function(){
  //form
  $("#myform_hand").animate({"opacity":"0"}, 400);
  $("#myform_hand").css({"display":"none"});
  $("#myform_foot").animate({"opacity":"0"}, 400);
  $("#myform_foot").css({"display":"none"});
  $("#myform_head").css({"display":"block"});
  $("#myform_head").animate({"opacity":"1"}, 400);
  //boxes
  $("#box2").animate({"opacity":"0"}, 400);
  $("#box2").css({"display":"none"});
  $("#box3").animate({"opacity":"0"}, 400);
  $("#box3").css({"display":"none"});
  $("#box1").css({"display":"block"});
  $("#box1").animate({"opacity":"1"}, 400);
  box = 1;
});
$("#hand").click(function(){
  //form
	$("#myform_head").animate({"opacity":"0"}, 400);
  $("#myform_head").css({"display":"none"});
  $("#myform_foot").animate({"opacity":"0"}, 400);
  $("#myform_foot").css({"display":"none"});
  $("#myform_hand").css({"display":"block"});
  $("#myform_hand").animate({"opacity":"1"}, 400);
  //boxes
  $("#box1").animate({"opacity":"0"}, 400);
  $("#box1").css({"display":"none"});
  $("#box3").animate({"opacity":"0"}, 400);
  $("#box3").css({"display":"none"});
  $("#box2").css({"display":"block"});
  $("#box2").animate({"opacity":"1"}, 400);
  box = 2;
});
$("#feet").click(function(){
	//form
	$("#myform_head").animate({"opacity":"0"}, 400);
  $("#myform_head").css({"display":"none"});
  $("#myform_hand").animate({"opacity":"0"}, 400);
  $("#myform_hand").css({"display":"none"});
  $("#myform_foot").css({"display":"block"});
  $("#myform_foot").animate({"opacity":"1"}, 400);
	//boxes
  $("#box1").animate({"opacity":"0"}, 400);
  $("#box1").css({"display":"none"});
  $("#box2").animate({"opacity":"0"}, 400);
  $("#box2").css({"display":"none"});
  $("#box3").css({"display":"block"});
  $("#box3").animate({"opacity":"1"}, 400);
  box = 3;
});


//show useraccount
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
        alert(`You should log in first .. `);
        window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/form_login.html";
      }
    }
  });
  //personal box (need 3 ajax here)
	$.ajax({
    method: "POST",
    url: "personal_box_head",
    success : function(data) {
      var pic;
      for (i = 0; i < data[1].length; i++) {
        pic = '<a href="' + data[0] + data[1][i] + '" class="swipebox" title=""> <img src="'+ data[0] + data[1][i] +'" alt="image"></a>';
        if (i%2 == 0)
          $("#box1_col1").append(pic);
        else
          $("#box1_col2").append(pic);
      }
    }
  });
	$.ajax({
    method: "POST",
    url: "personal_box_hand",
    success : function(data) {
      var pic;
      for (i = 0; i < data[1].length; i++) {
        pic = '<a href="' + data[0] + data[1][i] + '" class="swipebox" title=""> <img src="'+ data[0] + data[1][i] +'" alt="image"></a>';
        if (i%2 == 0)
          $("#box2_col1").append(pic);
        else
          $("#box2_col2").append(pic);
      }
    }
  });
	$.ajax({
    method: "POST",
    url: "personal_box_foot",
    success : function(data) {
      var pic;
      for (i = 0; i < data[1].length; i++) {
        pic = '<a href="' + data[0] + data[1][i] + '" class="swipebox" title=""> <img src="'+ data[0] + data[1][i] +'" alt="image"></a>';
        if (i%2 == 0)
          $("#box3_col1").append(pic);
        else
          $("#box3_col2").append(pic);
      }
    }
  });
});
//logout function
function back(){
  $.ajax({
    method: "POST",
    url: "logout",
    success : function(data) {
      alert(`You have successfully log out .. `);
      window.top.location.href = "https://luffy.ee.ncku.edu.tw:2266/index.html";
    }
  });
};

$("#head").hover(
    function(){
      $(this).attr("src", "https://i.imgur.com/r1zny51.gif");
    },
    function() {
      $(this).attr("src", "https://i.imgur.com/BgkgwNz.png");
    }
)
$("#hand").hover(
    function(){
      $(this).attr("src", "https://i.imgur.com/NZdGAOJ.gif");
    },
    function() {
      $(this).attr("src", "https://i.imgur.com/jKhXHQL.png");
    }
)
$("#feet").hover(
    function(){
      $(this).attr("src", "https://i.imgur.com/ztlsbTZ.gif");
    },
    function() {
      $(this).attr("src", "https://i.imgur.com/j5bZMLx.png");
    }
)
