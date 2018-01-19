---
layout: js
col-width: 3
img-col-width: 2
order: 6
---
<div style="width: 350px; height: 350px">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/color/jquery.color-2.1.2.min.js"></script>
	<div id="phrase-container" onclick="let path='/tugofwar';if(!location.href.includes(path)){location.href=path;}">
		<div id="phrasebox" class="phrase"></div>
		<div id="phrase-animate" class="phrase"></div>
		<img src="other/turnofphrase/svg/of-1.svg" style="visibility:hidden" />
	</div>
	<script src="other/turnofphrase/js/tug-of-war.js"></script>
</div>
<style>
	#phrase-container {
		cursor: pointer;
	    padding: 45px 40px;
		position: relative;
		display: inline-block;
	}
	#phrasebox {
		display: inline-block;
	}
	#phrase-animate {
		display: inline-block;
	}
	.phrase {
		display: inline-block;
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
