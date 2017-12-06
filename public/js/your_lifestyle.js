/*$("#uploadImage").change(function(){
   readImage( this );
-});
+  });

-function readImage(input) {
+  function readImage(input) {
   if ( input.files && input.files[0] ) {
-    var FR= new FileReader();
-    FR.onload = function(e) {
-      //e.target.result = base64 format picture
-      $('#img').attr( "src", e.target.result );
-"    };
-    FR.readAsDataURL( input.files[0] );
-  }*/

var box = 1; 
var b1_col = 1;
var b2_col = 1;
var b3_col = 1;

//still need to make a responsive version?
$("#go").click(function(){
  $.ajax({ 
    method: "GET",
    url: "show_pic",
    success:  function(data) {
     var pic =
      `
      <img src="${data}" style="width:100%">
      `;
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
    //waiting
    //$('#go').html('loading...');
  });
});

//show different picture box

$("#head").click(function(){
  $("#box2").animate({"opacity":"0"}, 400);
  $("#box2").css({"display":"none"});
  $("#box3").animate({"opacity":"0"}, 400);
  $("#box3").css({"display":"none"});
  $("#box1").css({"display":"block"});
  $("#box1").animate({"opacity":"1"}, 400);
  box = 1;
});
$("#hand").click(function(){
  $("#box1").animate({"opacity":"0"}, 400);
  $("#box1").css({"display":"none"});
  $("#box3").animate({"opacity":"0"}, 400);
  $("#box3").css({"display":"none"});
  $("#box2").css({"display":"block"});
  $("#box2").animate({"opacity":"1"}, 400);
  box = 2;
});
$("#feet").click(function(){
  $("#box1").animate({"opacity":"0"}, 400);
  $("#box1").css({"display":"none"});
  $("#box2").animate({"opacity":"0"}, 400);
  $("#box2").css({"display":"none"});
  $("#box3").css({"display":"block"});
  $("#box3").animate({"opacity":"1"}, 400);
  box = 3;
});
/*
//hover on little man
$("#head").hover(
  function(){
    $(this).css({"filter":"brightness(110%)"});
  },
  function(){
    $(this).css({"filter":"brightness(100%)"});
  }
);
$("#hand").hover(
  function(){
    $(this).css({"filter":"brightness(110%)"});
  },
  function(){
    $(this).css({"filter":"brightness(100%)"});
  }
);
$("#feet").hover(
  function(){
    $(this).css({"filter":"brightness(110%)"});
  },
  function(){
    $(this).css({"filter":"brightness(100%)"});
  }
);
*/

/*
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    //console.log("shit");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
*/


//facebook stuff
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        //testAPI();
        console.log("wlcome");
    }
    else if (response.status === 'not_authorized'){
        window.top.location.href= "https://www.facebook.com/dialog/oauth?client_id=1573588719392394&scope=email,user_birthday&redirect_uri=http://luffy.ee.ncku.edu.tw:2266/your_lifestyle.html"

    }
    else {
        // The person is not logged into your app or we are unable to tell.
        alert("please log in :)");
        window.top.location.href= "http://luffy.ee.ncku.edu.tw:2266/index.html"
        //document.getElementById('status').innerHTML = 'Please log ' +
        //  'into this app.';
    }
}
window.fbAsyncInit = function() {
    FB.init({
                appId      : '1573588719392394',
                xfbml      : true,
                version    : 'v2.11'
    });
//FB.AppEvents.logPageView();
    FB.getLoginStatus(function(response) {
          console.log(response);
          statusChangeCallback(response);
              });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "https://connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function fun(){

    console.log("hi");
    FB.logout(function(response) {
            // user is now logged out
            window.top.location.href="http://luffy.ee.ncku.edu.tw:2266/index.html"
            });
};
