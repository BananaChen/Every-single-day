$(document).ready(function() {

  /*show all the pictures*/
	$.ajax({
    method: "POST",
    url: "refresh_explore",
    success : function(data) {
      //$('#carousel .owl-carousel .owl-item:nth-child(1) img').attr('src', data[0])
			var html =
    	`
    		<br><br><br>    
      	<div class="row" style="display: none;">
          <div class="wow bounceInUp" data-wow-delay="0.1s">
            <div class="col-md-2 col-sm-12">
              <div class="section-title">
                <h6>
                `
                +
                data[1]
                //'shit'
                +
                `
                </h6>
                <img src="https://i.imgur.com/xdGPi1p.png" alt="" class="img-responsive">
              </div>
            </div>
              <div class="col-md-10 col-sm-12">
                <div class="owl-carousel">
									<div class="item"><a href="${data[0][0]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][0]}"><img src="${data[0][0]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][1]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][1]}"><img src="${data[0][1]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][2]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][2]}"><img src="${data[0][2]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][3]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][3]}"><img src="${data[0][3]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][4]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][4]}"><img src="${data[0][4]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][5]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][5]}"><img src="${data[0][5]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][6]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][6]}"><img src="${data[0][6]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][7]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][7]}"><img src="${data[0][7]}" class="img-responsive" alt="img"></a></div>
                </div>
              </div>
            </div>
      	</div>
    	`
			$("#carousel").append(html);
    	$("#carousel .row:last-child").fadeIn(500);
	    $('#carousel .row:last-child').find('.owl-carousel').owlCarousel({
        items : 4,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [980,5],
        itemsTablet: [768,5],
        itemsTabletSmall: [550,2],
        itemsMobile : [480,2],
  	  });
    	$('#carousel .row:last-child').find('.owl-carousel .item a').nivoLightbox({
	      effect: 'fadeScale',                             // The effect to use when showing the lightbox
	      theme: 'default',                           // The lightbox theme to use
	      keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
	      clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
	      onInit: function(){},                       // Callback when lightbox has loaded
	      beforeShowLightbox: function(){},           // Callback before the lightbox is shown
	      afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
	      beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
	      afterHideLightbox: function(){},            // Callback after the lightbox is hidden
	      onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
	      onNext: function(element){},                // Callback when the lightbox gallery goes to next item
	      errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	    });
    }
    //above is the success part
  });

	/*bar information*/
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

	/*department choosen*/
  $.ajax({
    method: "POST",
    url: "department",
    success: function(data) {
      if (data == '1') {
        	$.ajax({
          	method: "POST",
	          url: "explore_pic",
	          success: function(pics) {
              alert('CSIE!!');
	            //file in 8 of the user's photos
	          }
	        }); 
      }
      if (data == '2') {
					$.ajax({
            method: "POST", 
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                                                                                
            }
          });	
      }
      if (data == '3') {
					$.ajax({
            method: "POST",
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                                                                                
            }
          });
      }
      if (data == '4') {
					$.ajax({
            method: "POST",
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                                                                                
            }
          });
      }
      if (data == '5') {
					$.ajax({
            method: "POST",
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                                                                                
            }
          });
      }
      if (data == '6') {
					$.ajax({
            method: "POST",
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                                                                                
            }
          });
      }
      if (data == '7') {
					$.ajax({
            method: "POST",
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                                                                                
            }
          });
      }
      if (data == '8') {
					$.ajax({
            method: "POST",
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                                                                                
            }
          });
      }
      if (data == '9') {
          $.ajax({
            method: "POST",
            url: "explore_pic",
            success: function(pics) {
              //file in 8 of the user's photos                                  
            }
          });
      }
    }
  });



  $('#view-more').click(function(){
    $.ajax({
      method: "POST",
      url: "view_more",
      success: function(data) {
      
    if (data) {
    var html =
    `
    <br><br><br>    
      <div class="row" style="display: none;">
          <div class="wow bounceInUp" data-wow-delay="0.1s">
            <div class="col-md-2 col-sm-12">
              <div class="section-title">
                <h6>
                `
                +
                data[1]
                +
                `
                </h6>
                <img src="https://i.imgur.com/xdGPi1p.png" alt="" class="img-responsive">
              </div>
            </div>
              <div class="col-md-10 col-sm-12">
                <div class="owl-carousel">
                  <div class="item"><a href="${data[0][0]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][0]}"><img src="${data[0][0]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][1]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][1]}"><img src="${data[0][1]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][2]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][2]}"><img src="${data[0][2]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][3]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][3]}"><img src="${data[0][3]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][4]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][4]}"><img src="${data[0][4]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][5]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][5]}"><img src="${data[0][5]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][6]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][6]}"><img src="${data[0][6]}" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="${data[0][7]}" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="${data[0][7]}"><img src="${data[0][7]}" class="img-responsive" alt="img"></a></div>
                </div>
              </div>
            </div>
      </div>
    `
    $("#carousel").append(html)
    $("#carousel .row:last-child").fadeIn(500);
    $('#carousel .row:last-child').find('.owl-carousel').owlCarousel({
        items : 4,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [980,5],
        itemsTablet: [768,5],
        itemsTabletSmall: [550,2],
        itemsMobile : [480,2],
    });
    $('#carousel .row:last-child').find('.owl-carousel .item a').nivoLightbox({
  		effect: 'fadeScale',                             // The effect to use when showing the lightbox
  		theme: 'default',                           // The lightbox theme to use
  		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
  		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
  		onInit: function(){},                       // Callback when lightbox has loaded
  		beforeShowLightbox: function(){},           // Callback before the lightbox is shown
  		afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
  		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
  		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
  		onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
  		onNext: function(element){},                // Callback when the lightbox gallery goes to next item
  		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
  	});
    }
    }
  });
});

//infinite scroll


  /*
	var offset = $('#container');

	$('#container').endlessScroll({
		fireOnce: false,
		fireDelay: false,
		loader: '',
		insertAfter: '#container:last',
		content: function(i) {
			return '<div class = "pic">' + '<img src="https://i.imgur.com/nvtSryF.jpg" width="220" height="176" alt="" />' + '</div>';
		}
	});
  */

  //register
  $.ajax({
    method: "POST",
    url: "regis",
    success : function(data) {
      if (!data){
        $("#register1").append(`<h3>Register Now</h3>`);
        $("#register1").append(`<p>Join us to inspect your life and to share your lifestyle to everyone!</p>`);
        $("#register2").append(`<a href="form_signup.html" class="btn btn-submit">Register</a>`);
      } 
    }
  });
});

//log out
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
