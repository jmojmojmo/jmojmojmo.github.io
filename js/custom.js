// jack morris 01/23/18

// ensure turn-of-phrase piece width-to-height ratio is constant

let widthToHeightRatio = 2.25;
let turnOfPhrasePadding = 40; // px
var resizeTurnOfPhrase = function() {
	let innerImg = $('#phrase-container img');
	if(!innerImg) {
		return;
	}
	let innerWidth = innerImg.width();
	let totalWidth = innerWidth + turnOfPhrasePadding * 2;
	let totalHeight = totalWidth / widthToHeightRatio;
	let innerHeight = totalHeight - turnOfPhrasePadding * 2;
	innerImg.height(innerHeight);
}


$(document).ready(resizeTurnOfPhrase);

window.addEventListener("resize", resizeTurnOfPhrase);