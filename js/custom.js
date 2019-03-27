// jack morris 01/23/18

/* ensure turn-of-phrase piece width-to-height ratio is constant */

let turnOfPhraseWidthToHeightRatio = 2.25;
let turnOfPhrasePadding = 40; // px
var resizeTurnOfPhrase = function() {
	let innerImg = $('#phrase-container img');
	if(!innerImg) {
		return;
	}
	let innerWidth = innerImg.width();
	let totalWidth = innerWidth + turnOfPhrasePadding * 2;
	let totalHeight = totalWidth / turnOfPhraseWidthToHeightRatio;
	let innerHeight = totalHeight - turnOfPhrasePadding * 2;
	innerImg.height(innerHeight);
}


window.addEventListener("resize", resizeTurnOfPhrase);

// jack morris 03/27/19

function initializeArrowIcons() {
	$('#arrow-left').hide();
	$('#arrow-right').hide();
}

/* add hover arrows on desktop */

// show arrows when user moves mouse within this % of frame width
var arrowShowPerc = 0.35; 

// the last x position of the cursor, tracked so we can tell which direction the cursor is moving
var lastMouseX = $(window).width()/2; 

function checkMouseCoords(event)  {

  let mouseX = event.pageX;

  let w = $(window).width();

  // Show or hide left arrow.
  let inLeftTarget = mouseX < arrowShowPerc * w;
  let movingLeft = true;//mouseX <= lastMouseX;
  if(inLeftTarget && movingLeft) {
  	$('#arrow-left').show();
  } else {
  	$('#arrow-left').hide();
  }

  // Show or hide right arrow.
  let inRightTarget = (mouseX > (1-arrowShowPerc) * w);
  let movingRight = true;//mouseX >= lastMouseX;
  if(inRightTarget && movingRight) {
  	$('#arrow-right').show();
  } else {
  	$('#arrow-right').hide();
  }

  lastMouseX = mouseX;

}
$(window).mousemove(checkMouseCoords);

function onReady() {
	resizeTurnOfPhrase();
	initializeArrowIcons();
}

$(document).ready(onReady);