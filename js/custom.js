// jack morris 03/27/19

function initializeArrowIcons() {
	$('#arrow-left').css('opacity', '0');
	$('#arrow-right').css('opacity', '0');
}

function replaceSvgs() {
	$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

	});
	}

/* add hover arrows on desktop */

// show arrows when user moves mouse within this % of frame width
var arrowShowPerc = 0.35; 
var arrowAnimationDur = 500; // ms
var arrowMargin = 35; // px

// the last x position of the cursor, tracked so we can tell which direction the cursor is moving
var lastMouseX = $(window).width()/2; 

function checkMouseCoords(event)  {
  // return; 
  let mouseX = event.pageX;
  let w = $(window).width();
  // Show or hide left arrow.
  let inLeftTarget = mouseX < arrowShowPerc * w;
  if( $('#arrow-left').is(':animated') ) {
  	// pass
  } else if(inLeftTarget) { // show
  	console.log('animate left')
  	$('#arrow-left').animate({
        opacity : 1,
        left    : arrowMargin
      });
  } else { // hide
  	$('#arrow-left').animate({
        opacity : 0,
        left    : arrowMargin + 15
      });
  }

  // Show or hide right arrow.
  let inRightTarget = (mouseX > (1-arrowShowPerc) * w);
  if( $('#arrow-right').is(':animated') ) {
  	// pass
  } else if(inRightTarget) { // show
  	console.log('animate right');
  	$('#arrow-right').animate({
        opacity : 1,
        right    : arrowMargin
      });
  } else { // hide
  	$('#arrow-right').animate({
        opacity : 0,
        right    : arrowMargin + 15
      });
  }

  lastMouseX = mouseX;

}

function onReady() {
	replaceSvgs();
	initializeArrowIcons();

	$(window).mousemove(checkMouseCoords);
}

$(document).ready(onReady);
