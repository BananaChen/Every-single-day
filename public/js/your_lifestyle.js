/*$("#uploadImage").change(function(){
  readImage( this );
});

function readImage(input) {
  if ( input.files && input.files[0] ) {
    var FR= new FileReader();
    FR.onload = function(e) {
      //e.target.result = base64 format picture
      $('#img').attr( "src", e.target.result );
    };
    FR.readAsDataURL( input.files[0] );
  }
}*/

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
