---
layout: js
head:
subhead:
m-thumbnail: wantsneeds_mobile_hp_332.gif
col: 1
order: 1
---
<script src="assets/createjs-2015.11.26.min.js"></script>
<script src="js/wantsneeds_Canvas.js"></script>
<script>

/* CHANGE THIS NUMBER TO RESIZE THIS THING */
var wantsNeedsCanvasSize = 350; // px

var canvas, stage, exportRoot;
function init() {
	canvas = document.getElementById("wantsneeds_canvas");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new lib.wantsneeds_Canvas();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);	    
	//Code to support hidpi screens and responsive scaling.
	(function(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			// canvas.style.width = w*sRatio+'px';			
			// canvas.style.height = h*sRatio+'px';
			// canvas.style.width = wantsNeedsCanvasSize+'px';			
			// canvas.style.height = wantsNeedsCanvasSize+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	})(false,'both',false,1);	
}
</script>
<body onload="init();" style="margin:0px;">
	<canvas id="wantsneeds_canvas" style="background-color:rgba(255, 255, 255, 1.00)" onclick="let path='/wantsneeds';if(!location.href.includes(path)){location.href=path;}"></canvas>
</body>
