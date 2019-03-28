var currentPhrase = 1;

var currentPhraseColor = 0;
var phraseColors = ["#055470","#6D760C","#34590A","#067C65", "#374D6D", "#2E7203", "#4F473F", "#A58604", "#449968", "#06517F", "#536813", "#035771", "#4F473F", "#696D72", "#055470", "#756F0D", "#067C65", "#6D760C", "#374D6D", "#449968", "#06517F", "#696D72", "#34590A", "#067C65", "#A58604", "#536813", "#055470", "#4F473F", "#A58604", "#449968", "#06517F", "#056277", "#6D760C", "#34590A", "#067C65", "#696D72", "#4F473F", "#2E7203", "#6D760C", "#A58604", "#449968", "#696D72", "#4F473F", "#056277"];

$(document).ready(function(){

    setInterval(swapPhrase,4000);
    swapPhrase();
    resizeTurnOfPhrase();

    function swapPhrase() {
        
        currentPhrase++;
        if (currentPhrase > phraseColors.length)
            currentPhrase = 1;

        currentPhraseColor++;
        if (currentPhraseColor >= phraseColors.length)
            currentPhraseColor = 0;

		$("#phrase-container").animate({
			backgroundColor: phraseColors[currentPhraseColor]
			}, 2000 );

    	backgroundImageURL = "url('other/turnofphrase/svg/of-" + currentPhrase + ".svg')";

		$('#phrase-animate').css("opacity", 0);
		$('#phrase-animate').css("background-image", backgroundImageURL);

		$('#phrasebox').animate({ opacity: 0 }, {duration:2000});
		$('#phrase-animate').animate({ opacity: 1 }, {duration:2000, complete: function() {
			$('#phrasebox').css("background-image", backgroundImageURL);
			$('#phrasebox').css("opacity", 1);

		}});

    }
});


/* ensure turn-of-phrase piece width-to-height ratio is constant */
// jack morris 01/23/18

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