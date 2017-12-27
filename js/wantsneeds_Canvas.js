(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};


lib.ssMetadata = [];


lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.wantsneedsrd3ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wantsneeds rd3.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3D4C").s().p("AjlDbQgEgEAAgHQAAgEACgDIBBhWIACgDQADgDAFAAQAGgBAFAEQAmAaAoANQAoANAtAAQAbABAQgLQAOgKAAgQIAAgCQAAgWgUgLQgUgLg6gOQhsgXgwgkQg4gpAAhMIAAgCQAAhXA/gyQA/gxBpABQCHAABjBNQAEACACAIQAAAHgDADIhABSQgEAFgFABQgJACgDgEQgmgZgjgMQgogOgtAAQgfAAgRAKQgRALAAASIAAACQAAASATAMQAUAMA3ANQBtAZAtAfQA/ApAABRIAAACQAABRg8AyQg8A0hmAAIgFAAQiFAAhphNg");
	this.shape.setTransform(331.4,331.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B3D4C").s().p("AAzEeQiVAAhYhPQhVhOAAh+IAAgCQAAh9BWhPQBZhSCWAAIDIAAQAHAAAEADQAHAEAAALIAAINQABANgHAIQgEAFgJABIgHABgAhBhqQgrAmAABEIAAAAQAABEArAoQArAlBGABIAxAAIAEgBQAGgCADgDQADgEAAgHIAAkFQgCgHgDgCQgCgCgEgBIgEgBIgyAAQhGAAgrAng");
	this.shape_1.setTransform(386.3,331.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B3D4C").s().p("AjfEaQgDgDgBgIIAAgHIAAhcIAAgGQABgHADgEQAFgFAMABIESAAQADAAABgCQADgDAAgEIAAhGQAAgEgCgCIgHgCIj1AAQgIABgHgFQgDgDgBgFIgBgGIAAhVIABgGQAAgGADgDQAGgGAKABID4AAIAEgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAhOQAAgEgCgBIgEgCIgCAAIkUAAQgMAAgFgFQgEgDgBgGIAAgGIAAhjIAAgEQABgGACgDQAEgEAKABIGtgBIAFABQAFABADADQAFAFgBAIIAAIVQABAJgFAGQgDAEgHACIgFABImiAAIgCAAQgKAAgGgFg");
	this.shape_2.setTransform(501.7,331.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B3D4C").s().p("AjfEaQgDgDgBgIIAAgHIAAhcIAAgGQABgHADgEQAFgFAMABIESAAQADAAACgCQACgDAAgEIAAhGQAAgEgCgCIgEgBIgDgBIj1AAQgIABgHgFQgDgDgBgFIgBgGIAAhVIABgGQAAgGADgDQAGgGAKABID4AAIAEgCQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIAAhOQAAgEgCgBIgEgCIgCAAIkUAAQgMAAgFgFQgEgDgBgGIAAgGIAAhjIAAgEQABgGACgDQAEgEAKABIGtgBIAFABQAFABADADQAGAFgCAIIAAIVQABAJgFAGQgDAEgHACIgFABImiAAIgCAAQgKAAgGgFg");
	this.shape_3.setTransform(445.4,331.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3D4C").s().p("AhLEaQgCgCgBgGIAAmcQAAgEgCgDIgHgBIiIAAQgJAAgEgFQgDgDgBgFIAAgFIAAhqQgBgIAFgFQACgCAGgBIAFAAIHCAAIAEABQADAAADADQAEADAAAHIAAByQgBAEgCADQgEAFgIAAIiKAAIgCAAQgBABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgCADAAAFIAAGWIgBAEQgBAFgCADQgEAEgHAAIh+AAIgBABQgHAAgFgFg");
	this.shape_4.setTransform(280.2,331.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B3D4C").s().p("AkJEbQgDgDgBgEIgBgEIAAocIABgEQABgGADgDQAEgFAJAAIBsAAQAIABAEACQAGADAFAGIDjEkIABACQABAAAAAAQABABAAAAQAAAAABAAQAAAAABgBQACgBAAgEIAAkbIAAgFQABgFADgDQAGgGAIABIB7AAIAEABQAFABADADQAFAFgBAJIAAIUQABAKgFAFQgEAEgIACIgHAAIhoAAQgOAAgGgDIgHgFIjakYQgDgFgFACQgCABAAADIAAABIAAEPQAAAIgEAEQgDACgFABIiCAAIgCABQgFAAgEgEg");
	this.shape_5.setTransform(563.3,331.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B3D4C").s().p("AiCEeIh7AAQgIAAgEgFQgDgDgBgGIAAoaQgCgLAGgFQADgDAHgBIAGAAIBwAAIAGABQAGAAADACQAGADADAEIDYEXIACACQADACADgBQADgCgBgEIAAkPQAAgHAEgEQADgDAFAAIAEgBICCAAQAEABADADQAFAEAAAHIAAIbIgBAFQgBAFgDAEQgEAFgJgBIhhAAQgTAAgFgDIgHgGIjmknQgCgDgDABQAAABgBAAQAAAAAAAAQAAABgBAAQAAABAAAAIAAACIAAEgQgBAFgDADQgFAGgHAAIgCgBg");
	this.shape_6.setTransform(224,331.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3B3D4C").s().p("AiqEgIiBAAQgJABgDgGQgDgFAEgKIDkoaQAFgKAFgEQADgDAGAAIAGgBIB6AAQAFABAEACQAGAFAEAJIDkIaIABAFQABAGgCADQgEAHgHAAIiGAAQgKAAgEgDQgDgCgDgEIgCgEIgfhMQgCgHgFgEQgCgCgGAAIjFAAIgEAAQgFABgDACQgEADgCAHIgfBMQgEAGgDADQgHAFgIAAIgBgBgAgDhYIgCADIg4CLIABAFQABABAAABQABAAAAAAQABABAAAAQABAAAAAAIBtAAQAEgBABgCQABAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAgBIgBgCIg2iKQgCgGgDAAQgBAAgCADg");
	this.shape_7.setTransform(164.2,331);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3B3D4C").s().p("AB1EeQgDgDgDgFIgDgFIhpkrQgBgEgCAAIgCgBIhrEyIgCAEQgCAEgDACQgFAFgJgBIhmAAQgMABgHgEQgCgCgDgGIi2oiQgEgKAFgFQACgDAFAAIAEgBICLAAQAFABADACQAFAEACAIIBbErIABADQACADACAAQADAAACgFIBlkvQADgHAEgDQADgCAFgBIAEAAIBtAAIAIADQAFACADAJIBkEsIACADQACADACAAQAEAAABgGIBakoQACgJAFgEQADgDAGAAIAFgBICBAAIAFABQAGABACADQAEAEgCAHIi2IhIgCAEQgDAFgDACQgHAFgIgBIhnAAIgDAAQgIAAgEgDg");
	this.shape_8.setTransform(99.5,331);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3F0DF").s().p("EgUIAvsQpSj8nLnKQnKnLj8pSQkEpoAAqhQAAqhEEpnQD8pSHKnLQHLnKJSj8QJokEKgAAQKiAAJnEEQJTD8HKHKQHLHLD7JSQEEJnAAKhQAAKhkEJoQj7JSnLHLQnKHKpTD8QpnEEqiAAQqgAApokEg");
	this.shape_9.setTransform(331.3,331.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,662.6,662.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wantsneedsrd3ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(331.2,331.2,1,1,0,0,0,331.2,331.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,662.6,662.5);


// stage content:
(lib.wantsneeds_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(399.9,400,1,1,0,0,0,331.2,331.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({startPosition:0},0).wait(1).to({regX:331.3,rotation:0.9,x:400,y:399.9},0).wait(1).to({rotation:3.8,y:400},0).wait(1).to({rotation:8.5,y:399.9},0).wait(1).to({rotation:15.1,y:400},0).wait(1).to({rotation:23.6},0).wait(1).to({rotation:34},0).wait(1).to({rotation:46.3},0).wait(1).to({rotation:60.4,y:400.1},0).wait(1).to({rotation:76.4,y:400},0).wait(1).to({rotation:94.4,y:400.1},0).wait(1).to({rotation:114.2},0).wait(1).to({rotation:135.9,x:399.9,y:400},0).wait(1).to({rotation:159.5},0).wait(1).to({rotation:185,y:400.1},0).wait(1).to({regX:331.2,rotation:180,x:400},0).wait(55).to({startPosition:0},0).wait(1).to({regX:331.3,rotation:179.1,x:399.9,y:400},0).wait(1).to({rotation:176.2},0).wait(1).to({rotation:171.5,y:400.1},0).wait(1).to({rotation:164.9},0).wait(1).to({rotation:156.4,y:400},0).wait(1).to({rotation:146,y:400.1},0).wait(1).to({rotation:133.8},0).wait(1).to({rotation:119.6,y:400},0).wait(1).to({rotation:103.6,x:400,y:400.1},0).wait(1).to({rotation:85.6,y:400},0).wait(1).to({rotation:65.8,y:400.1},0).wait(1).to({rotation:44.1},0).wait(1).to({rotation:20.5,y:400},0).wait(1).to({rotation:-5},0).wait(1).to({regX:331.2,rotation:0,x:399.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(468.7,468.8,662.6,662.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;