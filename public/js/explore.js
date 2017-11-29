$(document).ready(function() {

  $('#view-more').click(function(){
    $.ajax({
      method: "POST",
      url: "view_more",
      success: function(data) {
      

  //$('#view-more').click(function(){
    var html =
    `
      <div class="row" style="display: none;">
          <div class="wow bounceInUp" data-wow-delay="0.1s">
            <div class="col-md-2 col-sm-12">
              <div class="section-title">
                <h2 class="head-title">data</h2>
                <img src="https://i.imgur.com/xdGPi1p.png" alt="" class="img-responsive">
                <p class="sec-para">Maybe some bio here? </p>
              </div>
            </div>
              <div class="col-md-10 col-sm-12">
                <div class="owl-carousel">
                  <div class="item"><a href="https://i.imgur.com/fyUGqs5.jpg" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/1@2x.jpg"><img src="https://i.imgur.com/fyUGqs5.jpg" class="img-responsive" alt="img"></a></div>
                  <div class="item"><a href="https://i.imgur.com/nbPuP6V.jpg" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/2@2x.jpg"><img src="https://i.imgur.com/nbPuP6V.jpg" class="img-responsive " alt="img"></a></div>
                  <div class="item"><a href="https://i.imgur.com/J18MCh5.jpg" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/3@2x.jpg"><img src="https://i.imgur.com/J18MCh5.jpg" class="img-responsive " alt="img"></a></div>
                  <div class="item"><a href="https://i.imgur.com/fNzCTDN.jpg" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/4@2x.jpg"><img src="https://i.imgur.com/fNzCTDN.jpg" class="img-responsive " alt="img"></a></div>
                  <div class="item"><a href="https://i.imgur.com/lJgsAYU.jpg" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/5@2x.jpg"><img src="https://i.imgur.com/lJgsAYU.jpg" class="img-responsive " alt="img"></a></div>
                  <div class="item"><a href="https://i.imgur.com/EHUvyKS.gifv" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/6@2x.jpg"><img src="https://i.imgur.com/EHUvyKS.gifv" class="img-responsive " alt="img"></a></div>
                  <div class="item"><a href="https://i.imgur.com/gLYH3KJ.jpg" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/7@2x.jpg"><img src="https://i.imgur.com/gLYH3KJ.jpg" class="img-responsive " alt="img"></a></div>
                  <div class="item"><a href="https://i.imgur.com/nvtSryF.jpg" title="This is an image title" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/works/8@2x.jpg"><img src="https://i.imgur.com/nvtSryF.jpg" class="img-responsive " alt="img"></a></div>
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
});
