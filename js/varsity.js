// scroll to top smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 62
	    }, 1000, 'swing', function () {
	    });
	});
});

// grow animations
$(document).ready(function(){
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });
}

// Element in view check
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});

$(document).ready(function(){
    $('#open-modal').on('click', function(e) {
        e.preventDefault();
        $(".modal-content").slideToggle();
    });
    $('#close-modal').on('click', function(e) {
        e.preventDefault();
        $(".modal-content").slideToggle();
    });
});


// Videos - Drawer button
$('.js-viddrawer').on('click',function(e){
	e.preventDefault();

	// if video not already open,
	if( !$('#drawer-vid').hasClass('js-open') ) {

	    $('#drawer-vid').addClass('js-open');

	    $('html,body').animate({
	        scrollTop: $('#drawer-vid').offset().top
	    }, 2000, function() {
	        //callPlayer('cs-video','playVideo');
	    });
	}
});

// jquery media queries
function movePageIntro(width){
    if ( width <= 500) {
     $(".page-intro").prependTo("#next-section");
    }
    else {
      $(".page-intro").insertAfter("h1");
    }
  }
  movePageIntro( $(window).width() );
      $(window).on('resize', function(){
          movePageIntro( $(this).width() );
  });

// randomize client logos
var logos = $(".logo-block");
for(var i = 0; i < logos.length; i++){
    var target = Math.floor(Math.random() * logos.length -1) + 1;
    var target2 = Math.floor(Math.random() * logos.length -1) +1;
    logos.eq(target).before(logos.eq(target2));
}

// blog post filtering
if($.fn.isotope) { 
$('.grid').isotope({
  // options
  itemSelector: '.blog-post',
    masonry: {
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 0
    }
});
}
// filter by author name
if($.fn.isotope) { 
    $('.grid').isotope({ filter: '.fresh' });
    $('.grid').isotope({ filter: '.fresh' });
    $('.grid').isotope({ filter: '.wayne' });
    $('.grid').isotope({ filter: '.derek' });
    $('.grid').isotope({ filter: '.jackie' });
    $('.grid').isotope({ filter: '.rob' });
    $('.grid').isotope({ filter: '.emily' });
    $('.grid').isotope({ filter: '.seth' });
    $('.grid').isotope({ filter: '*' });
}
// filter items on button click
$('.blog-categories').on( 'click', 'a', function(e) {
    e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
});
// add line to active filter
$('.blog-categories').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'a', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});

// load more posts
$(function () {
    $(".blog-post").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".blog-post:hidden").slice(0, 4).slideDown();
        if ($(".blog-post:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

// show each case study
(function($) {

  // $(document).ready(function() {
  
  'use strict';
  
  // find the desired selectors
  var $btn = $('.request');
  var $bio = $('#case-study-expanded');

  // register an event
  $btn.on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass("edgewater")) {
          $bio.load('ajax/edgewater.html', completeFunction);
      } else if ($(this).hasClass("event")) {
          $bio.load('ajax/event.html', completeFunction);
      } else if ($(this).hasClass("asbury")) {
          $bio.load('ajax/asbury.html', completeFunction);
      } else if ($(this).hasClass("meadowood")) {
          $bio.load('ajax/meadowood.html', completeFunction);
      } else if ($(this).hasClass("presbys")) {
          $bio.load('ajax/presbys.html', completeFunction);
      } else if ($(this).hasClass("voice")) {
          $bio.load('ajax/voice.html', completeFunction);
      } else if ($(this).hasClass("franklin")) {
          $bio.load('ajax/franklin.html', completeFunction);
      } else if ($(this).hasClass("cappella")) {
          $bio.load('ajax/cappella.html', completeFunction);
      }
  });
  
  
  // complete function
  function completeFunction(responseText, textStatus, request) {
      $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    // uncomment the line below to see the request
    // console.log(request);
    // check if there are any errors
    if(textStatus == 'error') {
      // show a relevant message
      $bio.text('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    } 
  }
  
// });
  
})(jQuery);