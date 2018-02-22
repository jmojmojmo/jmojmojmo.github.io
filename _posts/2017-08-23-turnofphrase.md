---
layout: js
head: Turn of Phrase
subhead: Animated tone poem and meditative study of interlinked idioms. <br><br>2017  -  digital installation
m-thumbnail: turnofphrase_mobile_hp_332.gif
col: 2
order: 6
classes: push-right
---
<div id="phrase-container-box">
	<div id="phrase-container" onclick="let path='/turnofphrase';if(!location.href.includes(path)){location.href=path;}">
		<div id="phrasebox" class="phrase"></div>
		<div id="phrase-animate" class="phrase"></div>
		<img src="other/turnofphrase/svg/of-1.svg" style="visibility:hidden" />
	</div>
</div>
<script src="other/turnofphrase/js/tug-of-war.js"></script>
<style>
	#phrase-container {
		cursor: pointer;
		position: relative;
		display: inline-block;
		background-color: #055470;
	}
	#phrasebox {
	}
	#phrase-animate {
	}
	.phrase {
		background: url(other/turnofphrase/svg/of-1.svg);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: left center;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>
