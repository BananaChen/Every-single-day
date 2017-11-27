$(document).ready(function() {

  $('#view-more').click(function(){
    $.ajax({
      method: "GET",
      url: "view_more",
      success: function(data) {
        var html =   '<br><br><br>' +
                     "<div class='container'>" +
                     "<div class='row'>" +
                     "<div class='col-md-3 col-sm-12'>" +
                     "<div class='section-title'>" +
                     '<h2 class="head-title">Your Name</h2>' +
                     '<img src="https://i.imgur.com/xdGPi1p.png" alt="" class="img-responsive">' +
                     '<p class="sec-para">Maybe some bio here? (livestyle or anythign else)</p>' +
                     '</div>' +
                     '</div>' +
                     '<div class="col-md-9 col-sm-12">' +
                     '<div class="col-md-4 col-sm-6 padding-right-zero">' +
                     '<div class="portfolio-box design">' +
                     '<img src="https://i.imgur.com/nvtSryF.jpg" alt="" class="img-responsive">' +
                     '</div>' +
                     '</div>' +
                     '<div class="col-md-4 col-sm-6 padding-right-zero">' +
                     '<div class="portfolio-box design">' +
                     '<img src="https://i.imgur.com/fyUGqs5.jpg" alt="" class="img-responsive">' +
                     '</div>' +
                     '</div>' +
                     '<div class="col-md-4 col-sm-6 padding-right-zero">' +
                     '<div class="portfolio-box design">' +
                     '<img src="https://i.imgur.com/nbPuP6V.jpg" alt="" class="img-responsive">' +
                     '</div>' +
                     '</div>' +
                     '<div class="col-md-4 col-sm-6 padding-right-zero">' +
                     '<div class="portfolio-box design">' +
                     '<img src="https://i.imgur.com/J18MCh5.jpg" alt="" class="img-responsive">' +
                     '</div>' +
                     '</div>' +
                     '<div class="col-md-4 col-sm-6 padding-right-zero">' +
                     '<div class="portfolio-box design">' +
                     '<img src="https://i.imgur.com/fNzCTDN.jpg" alt="" class="img-responsive">' +
                     '</div>' +
                     '</div>' +
                     '<div class="col-md-4 col-sm-6 padding-right-zero">' +
                     '<div class="portfolio-box design">' +
                     '<img src="https://i.imgur.com/lJgsAYU.jpg" alt="" class="img-responsive">' +
                     '</div>' +
                     '</div>' +
                     '</div>' +
                     '</div>' +
                     '</div>';
        $(html).hide().appendTo("#portfolio").fadeIn(1000);
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
});
