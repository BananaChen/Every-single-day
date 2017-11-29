/*global jQuery:false */
(function ($) {


 $(window).load(function(){
         $("#navigation").sticky({ topSpacing: 0 });
         });


 wow = new WOW(
         {
animateClass: 'animated',
offset:       0
}
);
 wow.init();

 $('ul.nav li.dropdown').hover(function() {
     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
     }, function() {
     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
     }); 


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
        });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
        $('.navbar-nav li a').bind('click', function(event) {
                var $anchor = $(this);
                var nav = $($anchor.attr('href'));
                if (nav.length) {
                $('html, body').stop().animate({                                
scrollTop: $($anchor.attr('href')).offset().top                         
}, 1500, 'easeInOutExpo');

                event.preventDefault();
                }
                });
        $('a.totop,a#btn-scroll,a.btn-slide').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
            event.preventDefault();
            });
        });

//home slider
jQuery('#valera-slippry').slippry({
pager: false

});

$('.testimonialslide').flexslider({
animation: "slide",
slideshow: false,
directionNav:false,
controlNav: true
});

//owl carousel
$('.owl-carousel').owlCarousel({
items : 4,
itemsDesktop : [1199,5],
itemsDesktopSmall : [980,5],
itemsTablet: [768,5],
itemsTabletSmall: [550,2],
itemsMobile : [480,2],
});

//nivo lightbox
$('.owl-carousel .item a').nivoLightbox({
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


jQuery('.appear').appear();
jQuery(".appear").on("appear", function(data) {
        var id = $(this).attr("id");
        jQuery('.nav li').removeClass('active');
        jQuery(".nav a[href='#" + id + "']").parent().addClass("active");                                   
        });

//stats
var runOnce = true;
jQuery(".stats").on("appear", function(data) {
        var counters = {};
        var i = 0;
        if (runOnce){
        jQuery('.number').each(function(){
                counters[this.id] = $(this).html();
                i++;
                });
        jQuery.each( counters, function( i, val ) {
                //console.log(i + ' - ' +val);
                jQuery({countNum: 0}).animate({countNum: val}, {
duration: 3000,
easing:'linear',
step: function() {
jQuery('#'+i).text(Math.floor(this.countNum));
}
});
                });
        runOnce = false;
        }
        });

//parallax
if ($('#parallax1').length  || $('#parallax2').length)
{
    $(window).stellar({
responsive:true,
scrollProperty: 'scroll',
parallaxElements: false,
horizontalScrolling: false,
horizontalOffset: 0,
verticalOffset: 0
});

}

//video bg
$(".bg-player").mb_YTPlayer();

$("#js-rotating").Morphext({
        // Animation type (refer to Animate.css for a list of available animations)
animation: "fadeInDown",
// An array of words to rotate are created based on this separator. Change it if you wish to separate the words differently (e.g. So Simple | Very Doge | Much Wow | Such Cool)
separator: ",",
// The delay between each word in milliseconds
speed: 3000
});

//nicescroll
$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"0px",cursorwidth:"10px",cursorcolor:"#555",cursoropacitymin:.5});
function initNice() {
    if($(window).innerWidth() <= 960) {
        $('html').niceScroll().remove();
    } else {
        $("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#555",cursoropacitymin:.1});
    }
}
$(window).load(initNice);
$(window).resize(initNice);

})(jQuery);
$(window).load(function() {
        $(".loader").delay(300).fadeOut();
        $("#page-loader").delay(500).fadeOut("slow");
        });





//<div id="fb-root"></div>
(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.11&appId=1266182153487759';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
//<div class="fb-login-button" data-width="30px" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>

var userID;
var userNAME;
var userEMAIL;
var access;
// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into LoveDivine.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}
// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
            });
}
window.fbAsyncInit = function() {
    FB.init({
appId      : '1266182153487759',
cookie     : true,  // enable cookies to allow the server to access 
// the session
xfbml      : true,  // parse social plugins on this page
version    : 'v2.8' // use graph api version 2.8
});
// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.
FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        if (response.status === 'connected') {
        console.log('access token');
        console.log(response.authResponse.accessToken);
        }
        });
};
// Load the SDK asynchronously
(function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name );
            document.getElementById('status').innerHTML =
            'Welcome, ' + response.name + '!';
            access = response.id;
            userID = response.id;
            userNAME = response.name;
            userEMAIL = response.email;
            var data = {
ID:userID,
name:userNAME,
email:userEMAIL
}
});
}
