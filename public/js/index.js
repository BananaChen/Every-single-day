$(document).ready(function() {                                                  
  $.ajax({
    method: "POST",
    url: "default",
    success : function(data) {
    }
  });
  $.ajax({
    method: "POST",
    url: "btn",
    success : function(data) {
      if (!data){
        $("#loginbtn").prepend(`<a href="form_login.html" class="btn btn-skin" id="btn-scroll" style="width: 300px;height: 7%;font-size: 25px">Log In</a>`);
        $("#loginfbbtn").append(`<input type='button' scope="public_profile,email" value='Log In With Facebook' onclick="checkLoginState();" class="btn btn-skinfb" style="width: 250px;height: 7%;font-size: 15px"/ >`);
        $("#createbtn").append(`<a href="form_signup.html" class="btn btn-skinaccount" style="width: 250px;height: 7%;font-size: 15px">Creat An Account</a>`);
      } 
    }
  });
});
