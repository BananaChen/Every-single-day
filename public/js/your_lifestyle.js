var hover_or_not;

$(document).ready(function(){

  $("div.col-md-5.col-sm-12, #pic_section").hover(
      function(){
         $('#small_man').attr("src", "https://i.imgur.com/jzGdnXe.png");
         $('#pic_section').css("display", "block");
         $('#upload_section').css("display", "none");
         hover_or_not = 1;
      },
      function() {
        $('#small_man').attr("src", "https://i.imgur.com/BcFGhlW.png");
        $('#pic_section').css("display", "none");
        $('#upload_section').css("display", "block");
        hover_or_not = 0;
      }
  )



})
window.fbAsyncInit = function() {
    FB.init({
        appId      : '520313951662227',
        cookie     : true,  // enable cookies to allow the server to access
        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
    });
/*
FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        });
*/
};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.

FB.grtLoginStatus(function(response){
    if(response.status == 'connected'){
        console.log('hi');
    }
});
