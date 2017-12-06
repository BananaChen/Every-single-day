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
-    };
-    FR.readAsDataURL( input.files[0] );
-  }*/
var hover_or_not;

$(document).ready(function(){

  $("#man_head, #pic_section_head").hover(
      function(){
         $('#man_head').attr("src", "https://i.imgur.com/IMPP1Ie.png");
         $('#pic_section_head').css("display", "block");
         $('#upload_section').css("display", "none");
         hover_or_not = 1;
      },
      function() {
        $('#man_head').attr("src", "https://i.imgur.com/nCZJng8.png");
        $('#pic_section_head').css("display", "none");
        $('#upload_section').css("display", "block");
        hover_or_not = 0;
      }
  )

  $("#man_body, #pic_section_body").hover(
      function(){
         $('#man_body').attr("src", "https://i.imgur.com/u6GqAga.png");
         $('#pic_section_body').css("display", "block");
         $('#upload_section').css("display", "none");
         hover_or_not = 1;
      },
      function() {
        $('#man_body').attr("src", "https://i.imgur.com/pKCJS1p.png");
        $('#pic_section_body').css("display", "none");
        $('#upload_section').css("display", "block");
        hover_or_not = 0;
      }
  )

  $("#my_pic").owlCarousel({
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
  })
})


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
}
