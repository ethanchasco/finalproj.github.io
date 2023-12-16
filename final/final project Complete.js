(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"final project Complete_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"final project Complete_atlas_2", frames: [[0,0,775,1101],[777,600,1145,586],[777,0,1185,598],[0,1188,980,466],[982,1188,980,466]]},
		{name:"final project Complete_atlas_3", frames: [[660,397,574,123],[1439,217,390,192],[1421,0,468,215],[0,0,658,614],[660,0,759,233],[660,235,777,160],[1236,411,640,98],[1236,511,640,98]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4249,723);


(lib.CachedBmp_5 = function() {
	this.initialize(ss["final project Complete_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["final project Complete_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["final project Complete_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["final project Complete_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["final project Complete_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["final project Complete_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.crowdofpeopletrans = function() {
	this.initialize(ss["final project Complete_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.testbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(1,1,1).p("ARCD/QAABZg/A/Qg/A/hZAAQhZAAg/g/Qg/g/AAhZQAAhZA/g/QA/g/BZAAQBZAAA/A/QA/A/AABZgEgWBgktMAsDAAAMAAABJbMgsDAAAg");
	this.shape.setTransform(-6.95,-89.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_1.setTransform(80.55,-64.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("EgWBAkuMAAAhJbMAsDAAAMAAABJbgALTBnQg/A/AABZQAABZA/A/QA/A/BZAAQBZAAA/g/QA/g/AAhZQAAhZg/g/Qg/g/hZAAQhZAAg/A/g");
	this.shape_2.setTransform(-6.95,-89.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.9,-325.9,284,471.9);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-17.65,-17.1,0.3546,0.3546);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-17.6,-17.1,274.8,390.5), null);


(lib.starttext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-286.95,-223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.4898,x:-288.4863,y:-215.5594},0).wait(1).to({rotation:-2.9796,x:-289.8275,y:-208.0828},0).wait(1).to({scaleX:0.9999,rotation:-4.4693,x:-290.9729,y:-200.575},0).wait(1).to({rotation:-5.9591,x:-291.9216,y:-193.0413},0).wait(1).to({rotation:-7.4489,x:-292.6731,y:-185.4868},0).wait(1).to({rotation:-8.9387,x:-293.2269,y:-177.9165},0).wait(1).to({scaleX:0.9998,rotation:-6.9712,x:-292.5335,y:-188.01},0).wait(1).to({rotation:-5.0037,x:-291.4955,y:-198.072},0).wait(1).to({rotation:-3.0362,x:-290.114,y:-208.0907},0).wait(1).to({rotation:-1.0687,x:-288.3908,y:-218.0545},0).wait(1).to({scaleX:0.9997,rotation:0.8988,x:-286.328,y:-227.9516},0).wait(1).to({rotation:2.8663,x:-283.9281,y:-237.7704},0).wait(1).to({rotation:4.8338,x:-281.194,y:-247.4993},0).wait(1).to({rotation:6.8013,x:-278.129,y:-257.127},0).wait(1).to({scaleX:0.9996,rotation:8.7688,x:-274.7367,y:-266.6421},0).wait(1).to({rotation:7.7756,x:-276.5417,y:-261.9146},0).wait(1).to({rotation:6.7823,x:-278.2638,y:-257.1573},0).wait(1).to({rotation:5.7891,x:-279.9024,y:-252.3717},0).wait(1).to({scaleX:0.9995,rotation:4.7958,x:-281.4571,y:-247.5593},0).wait(1).to({rotation:3.8025,x:-282.9274,y:-242.7216},0).wait(1).to({rotation:2.8093,x:-284.3129,y:-237.8599},0).wait(1).to({scaleX:0.9994,rotation:1.816,x:-285.6132,y:-232.9758},0).wait(1).to({rotation:0.8228,x:-286.8279,y:-228.0708},0).wait(1).to({rotation:-0.1705,x:-287.9567,y:-223.1463},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.9,-223,574,123);


(lib.sign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-61.4,-170.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,204,204,0)").ss(1,1,1).p("AAZB9IizAAIycAAIAAxVMAptAAAIAARVI0eAAIAAM+IAAAeIizAAIAAgeIAAs+");
	this.shape.setTransform(33.5,-79.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999933").s().p("AhZGuIAAgeIAAs9ICzAAIAAM9IizAAICzAAIAAAeg");
	this.shape_1.setTransform(27,-23.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AAZIrIizAAIycAAIAAxVMAptAAAIAARVg");
	this.shape_2.setTransform(33.5,-122.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sign, new cjs.Rectangle(-101,-178.9,269,199), null);


(lib.painting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-165.5,-80.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-214.2,-174.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.painting, new cjs.Rectangle(-214.2,-174.3,329,307), null);


(lib.otherdoor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(1,1,1).p("ANhBLQAABTg6A7Qg7A6hTAAQhTAAg6g6Qg7g7AAhTQAAhSA7g6QA6g7BTAAQBTAAA7A7QA6A6AABSgAwo8MMAhRAAAMAAAA4ZMghRAAAg");
	this.shape.setTransform(-28.5,17.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiMCOQg7g7AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSQAABTg7A7Qg6A6hTAAQhSAAg6g6g");
	this.shape_1.setTransform(38,25.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AwocNMAAAg4ZMAhRAAAMAAAA4ZgAIMhBQg7A6AABSQAABTA7A7QA6A6BTAAQBTAAA6g6QA7g7AAhTQAAhSg7g6Qg6g7hTAAQhTAAg6A7g");
	this.shape_2.setTransform(-28.5,17.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#993300").ss(1,1,1).p("AwozAIAApMMAhRAAAIAAKOAM0DKQgGAIgHAHQg7A6hTAAQhTAAg6g6Qg7g7AAhTQAAgsARglAQpFjIAAWqMghRAAAIAAyzAwoEQIAAzBAQptlIAAO6");
	this.shape_3.setTransform(-28.5,17.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AZZSTQgqgRhJgtIr9neIj1iZIlSjRIgWgNIl2jnIgkAWQmCD0i8CGQk3DejXDYIgOAPQhWBXguBHQgSAbgIAKQgQATgSAIQgbANg1gIQg6gIgYAHQgTheAlhWQAQgnAfgpQAWgeAngqQBmhwB+hwQCaiIC8iJQDCiNGGj1Qmfj9ltjZIiShYIhwhEQiPhahphQQgWgQgLgMQgRgRgIgRQgMgcAEgzQAGg8gEgWQAugPA2AJQAvAIAxAZQAnAUAuAjIBRA/QAdAWAhAXQBFAxBUAzQA2AgCsBhQEpCnHaEkIIblTQEKinCIhbIAmgZQDEiHCWh7QAbgWANgJQAWgQAVgHQAcgJAsACIBJADQAFA2gBAeQgCAugOAiQgPAlgkAkQgXAXgvAjQiiB3jTCKIhEAtQh3BNjCB6Im8EYIFuDmQDPCCC4BzQJoF/FiDIQAgATAQAMQAYATAMAWQAPAegDA2QgEBHADASQgfAFgfAAQg/AAg8gXg");
	this.shape_4.setTransform(3.513,-10.0626);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah2BTQg6g7AAhSQAAgtARglIFQDQIgNAPQg6A6hTAAQhSAAg7g6g");
	this.shape_5.setTransform(35.7375,30.9375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AwocNIAAyzIAOgPQDXjYE3jeQC8iGGBjzIAkgWIF3DnIAWANQgRAlAAAsQAABTA7A7QA6A6BTAAQBTAAA6g6IAOgPID1CZIAAWqgAwouxICTBYQFsDZGfD9QmFD2jDCNQi8CIiaCIgAKjifIlwjnIG9kYQDCh6B3hNIAAO6Qi4hyjOiCgAqtvbQishhg1ggQhVgzhFgwIAApNMAhRAAAIAAKOIglAZQiIBbkLCnIocFTQnYkkkqing");
	this.shape_6.setTransform(-28.5,17.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#993300").ss(1,1,1).p("Awo0eIAAnuMAhRAAAIAAC2AQpR5IAAKUMghRAAAIAAqHAQpnUIAAIN");
	this.shape_7.setTransform(-28.5,17.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996600").s().p("AwocNIAAqIQBLguBAgtQAzgkBdhIQBjhMAughQBFgyCIhYQCMhcBBguIAmgcQCEA/C2BMQFNCKB4A6QC0BYEyCxIAAKUgAPvAhIhJgeIkDiiIgYgPQCqiGDWiNIAegTIAAINIg6gYgAqtvbIgxgcQisiMieibIAAnuMAhRAAAIAAC2IiuBnQlSDGizBzQkZC0jQCqQg5AvhUBJQj3iVi2hmg");
	this.shape_8.setTransform(-28.5,17.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("EgsnAelIgCpZQAAgwADgZQAFgoAQgcQARgdAhgZQAWgRAqgVQBAghBmgtICphKQEKh5EyjEQC8h5Fhj7IBlhIIhzhTQj/i5i4iqQhvhmh6iCQhehkh/iRQhoh3g/hPQhZhwhAhjQgrhEgNgtQgJgegDgoQgBgYAAgwIACpOILKAEQDpFsElFBQBhBqBmBjQCeCbCsCMIAxAcQC2BmD3CVQBThJA6gvQDQiqEZi0QCzhzFRjGICvhnILYmpQA2gfAcgOQAvgXApgJQAhgIApgCQAbgCAxABIInAEIACJ2QAAAegDAQQgEAZgLARQgOASgkAVIovFDQlBC7jsCLQj9CXikBqIgeATQjXCNipCFIAXAPIEECjIBJAeIA6AYQE3CDCoBeQBPAsCWBeQCYBgBNArQGKDdIMB1IgBLJQk0ANibgEQkBgGjJgtQk1hGmfjnIjRh6Qkyixi0hYQh5g6lMiKQi3hMiDg/IgnAcQhAAuiNBcQiHBYhFAyQguAhhjBMQheBIgzAkQg/AthLAuQiTBbjABiQi0BbjCBWQhWAmglAUQhEAjguAnIgjAeQgUAQgTAHQgVAHgvAAg");
	this.shape_9.setTransform(-22.275,-6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.1,-203,571.7,402);


(lib.introwall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960.025,-540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#29FF00","#FF0000","#FFFFFF"],[0,0.157,0.851,1],-959.9,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960.025,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.introwall, new cjs.Rectangle(-0.9,-1081,1921.9,1082), null);


(lib.gohere = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-146,-54.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-285.45,-132.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(-146,-54.45,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(-285.45,-132.45,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(-168.35,-70.75,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_11();
	this.instance_5.setTransform(-335.55,-174.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_14();
	this.instance_6.setTransform(-188.6,-101.05,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_13();
	this.instance_7.setTransform(-341.05,-141.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341,-174.1,598,325.29999999999995);


(lib.clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmaHvQgjgWAGghQAAgXAcgaIAAAAQAdgaBCg1IB8hhIAAAAQAzgoA8hBQgKg2gChPIAAAAQgBhZgHhTQgHhXAAgsIAAAAQABguAehkIABAAQAEgQAPgIQAPgIAQAFQAPAFAIAPQAGANgDAOIAAADQgaBVgCAnIAAABQAAApAHBRQAHBWABBbQACBDAIAwQAwANA4gIIAAAAIBvgOQAjgFCbAGQARAAALAMQALAMAAARQgBAQgMAMQgMALgRAAQiQgGggAEIhvAPIgBAAQhJAKg/gRQhABFg2ApIAAAAIh7BhQg6AugcAZIADAHQADAQgIAOQgKAOgQAEIgJABQgLAAgKgHg");
	this.shape.setTransform(2.9226,-13.1025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AENQKQiOgPipgKQizgKiMgiIAAAAQiRgiilhoQithvhBiLIAAgBQg6h6hCiuQgMgfAOgeQAOgeAfgMIAMgEQAZgFAYALQAeAOAMAeQA/CnA4B2IAAAAQAyBlCBBTQCLBYB7AeQB/AeCkAKQCsAKCRAPQBuAHBkhjIAAgBQB/h/Bth7IAAAAQBhhuAfiEIABAAQAgiIAaiKQhIiGAFh4IAAgBQAChBgShSIgGgaQgIghgLgkQgmh5h2gxQgfgNgNgeQgMgfANgfQAFgMAIgKQAMgNASgIQAegMAfAMQC8BPA8C/QA1CsgFB8IAAAAQgBBcA9BoIAKAxIAAAFQgdCcglCaIAAgBQgnCrh9CNIAAgBQhwCAiDCDIAAAAQiNCMicAAQgVAAgVgCgAwGCdQgbgTgFghQgfirAWicQAUirCsiZIAAAAQCKh6BChoIAAAAQBTiFDChKQC4hFCnAQQCYAOCjAcQCpAdCVA7QAfAMANAfQANAegMAfQgEAKgGAIQgMARgUAJQgfANgegMQiHg1iYgaIhhgQQg4gIg2gGIhggLQgdgCgdAAIgYABQhgAGhmAnQiJA0g9BbIABgBQhMB5ieCMIAAgBQh5BsgTB2QgSCFAaCRQAGAhgTAbQgTAbghAGIgEABIgLAAQgYAAgVgOg");
	this.shape_1.setTransform(-3.1764,3.2864);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AGAMTIAAgQQAdgPAhAAIgHg0QgDgXgLgFQgHgEgUAFQghAHgegSQgHgWANghQAUgxABgHQAEgbADgNIADgKIgSgJQAEgQAfABIAKAAQAKgCAQACIAKACICXAGQAnACAKASQgNARgcACQgJABgOgCIgXgDQgTgCgegBIgxgBQgHAjgGARIgMAfQgIATgDANQAeABARAEQAaAGANAPQAQASAHArQACASAAAKQgBAQgHAJQgKANgVAFQgWAGgVAAQgeAAgdgMgACKMWQglgCgUgJQgRgIgZgZQgTgTgGgKQgNgWACgvQAAgWAFgMQAFgOASgSQAVgWAOgLQAVgQAUgHQATgHAqgBQAggBARACQAbADATAJQgJANgVAEIgmACQgkACgfAWQgeAVgPAhQAkgKAngBQAngBAZALQAjARAHAfQAFAcgVAiQgUAfgXALQgWALgmAAIgHAAgACSKPQgLAHgGACQgIADgOABQgQABgHACQgCAOAFAMQAFANAVATIAWATQAGAEADABQAHACAGgGQAFgFABgHQABgLACgDQABgDAFgEIAHgGQAGgHAAgSQAAgJgCgEQgEgJgPgHIAAgFIgEAAQgGAAgIAEgAmLL0QACgKANgHQAFgEASgHQAYgKAZgZIApgtQAWgXAWgQQhtgWg1gUQAAgHAJgFQAHgEAKAAQAtgCBWATIAtALQAYAIARALQALAIAAAHQACALgPAJIgYAKQgQAGgHAGQgJAHgJAQIgQAaQgLANgbARQgnAYgZAGQgOAEgNAAQgXAAgSgMgAqOJ6QgPgWAEghQACgWANgkQgTgEgOgOQgOgOgGgTQgKgiAPgqQATg0ArgbQAWgNAZgEQAbgDAYAHQASAHAUAOQAMAJAVATQARAQAIALQALAQgBAQQgCAhgwAUIgkAQQgUAKgJAOQAGAIArAhQAeAYAEAYQADASgJARQgJAQgPALQgaAQgsABQhCAAgYglgApAIsQgDABgCADQgEAEAAANIAAAcQAAAIACAEQACAEAGAFQAGAFAFAAQADgBACgCIAFgGIAFgEQADgCABgDIAAgJQABgJgBgFQgBgFgHgIIgNgPQgGgGgDAAIgBAAgApJFaQgQASgJAPQgLAVgCAMQgEASADAeQABANAGABQADACAHgDQApgQAigWQAMgIADgHQADgGAAgMQAAgJgCgEQgEgGgM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");
	this.shape_2.setTransform(-5.4446,-4.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("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");
	this.shape_3.setTransform(-6.05,3.2601);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(-111.3,-100.3,216.3,207.2), null);


(lib.character = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.1,1,1).p("AGGk9IJOAAIAAJOIpOAAgAvTkBII/AAIAAI/Io/AAg");
	this.shape.setTransform(-3,-51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AvTE+IAAo/II/AAIAAI/gAGGERIAApOIJOAAIAAJOg");
	this.shape_1.setTransform(-3,-51.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AGQjRIJEAAIAAFdIpEAAgAvTjRIJEAAIAAGjIpEAAg");
	this.shape_2.setTransform(-3,-48.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AvTDSIAAmjIJEAAIAAGjgAGQCMIAAldIJEAAIAAFdg");
	this.shape_3.setTransform(-3,-48.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(0.1,1,1).p("AGfhyIIwAAIAACfIowAAgAvOhKIJYAAIAAC9IpYAAg");
	this.shape_4.setTransform(-3.5,-49.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AvOBzIAAi9IJYAAIAAC9gAGfAtIAAifIIwAAIAACfg");
	this.shape_5.setTransform(-3.5,-49.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,153,0,0)").ss(0.1,1,1).p("AGkgxIIcAAIAAAoIocAAgAu/AKII6AAIAAAoIo6AAg");
	this.shape_6.setTransform(-3,-51.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("Au/AyIAAgoII6AAIAAAogAGkgJIAAgoIIcAAIAAAog");
	this.shape_7.setTransform(-3,-51.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},5).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(8));

	// head
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AtvAAIbfAA");
	this.shape_8.setTransform(-5,66.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF6600").ss(1,1,1).p("Ayl2zMAlLAAAMAAAAtnMglLAAAg");
	this.shape_9.setTransform(-4,9.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AylW0MAAAgtnMAlLAAAMAAAAtngANmI6I7fAAg");
	this.shape_10.setTransform(-4,9.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-137.9,240,294);


(lib.wall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-62,-1098.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// painting
	this.instance_1 = new lib.painting();
	this.instance_1.setTransform(4152.95,-648.1,1,1,0,0,0,-48.5,-19.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,10,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// clock
	this.instance_2 = new lib.clock();
	this.instance_2.setTransform(11377.25,-605.1,1,1,0,0,0,-2.5,3.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,10,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// sign
	this.sign_mc = new lib.sign();
	this.sign_mc.name = "sign_mc";
	this.sign_mc.setTransform(20163.25,-587.65,1,1,0,0,0,33.5,-79.5);
	this.sign_mc.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,16,31);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,204,204,0)").ss(1,1,1).p("EAFNAg4IlNAAEgdxgg3MA7jAAAMAAAAmnMg7jAAAg");
	this.shape.setTransform(2939.4,-278.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.sign_mc}]}).wait(1));

	// walls
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(20160,-540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_2.setTransform(18240,-540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(16320,-540);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_4.setTransform(14400,-540);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_5.setTransform(12480,-540);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_6.setTransform(10560,-540);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_7.setTransform(8640,-540);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_8.setTransform(6720,-540);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-1460.1,0.1,1460.2,0.1).s().p("EjkICuZMAAAlcxMHIRAAAMAAABaBMAAACowMAAABaAg");
	this.shape_9.setTransform(960,-540.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_10.setTransform(4800,-540);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#0D29E7","#D8F200","#0D29E7","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6","#D8F200","#001CF6"],[0.059,0.165,0.29,0.29,0.4,0.51,0.631,0.753,0.859,0.945],-1210,0,710,0).s().p("Ehu6BUYMAAAiovMDd1AAAMAAACovg");
	this.shape_11.setTransform(3130.0625,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall, new cjs.Rectangle(-500.1,-1656.2,21620.1,2232.3), null);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// head
	this.instance = new lib.character();
	this.instance.setTransform(38,-44.9,1,1,0,0,0,-4,9.1);

	this.redHead_mc = new lib.character();
	this.redHead_mc.name = "redHead_mc";
	this.redHead_mc.setTransform(37.95,-47.9,1,1,0,0,0,-4,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-44.9}}]}).to({state:[{t:this.instance,p:{y:-34.9}}]},2).to({state:[{t:this.instance,p:{y:-30.9}}]},2).to({state:[{t:this.redHead_mc}]},2).wait(4));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhVIrQgTgMgRgXQgMgOgQgcQgnhIgWgkQgkg9gkglIgYgZQgOgOgJgNQgWgiAJgfQAHgVAWgQQAQgLAdgMQCHg4BGgYQBxgnBggQQAXgEAGgKQAEgHAAgOQgJjLAYjCQAHgyAQgVQATgXAhgBQAhgCAUAWQATAUAEAkQACAXgFAqQgXC7AJC/QACArgEAWQgFAjgWATQgNANgWAHQgNAEgcAFQhpAShOAXQhgAchMAoQAbAjAjA7IA6BiIAVAjQALAUAFASQAGAVgEAUQgEAWgOAOQgQASgcAAQgaAAgYgOg");
	this.shape.setTransform(-40.2,129.5451);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj6IWQgaAAgPgDQgXgEgOgLQgXgSgFgmQgDgUAEgwQACgrgEg6IgJhlQgKh8gBizQABjKgBhlQgBggADgRQAEgaANgRQARgWAegDQAfgDAVARQAWASAHAjQAFAYgBAoQgHGPAdGAIHZACQAaAAAQADQAXADAPALQAdATAAAnQABAngdAUQgPALgYAEQgQACgcAAg");
	this.shape_1.setTransform(91.2713,131.103);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACWH+QgkgFhGgTIh8giQgtgMgSgRQgSgSgGgfQgEgTAAgnQgBhIgMiRIgUjoQgCgdgEgPQgFgYgMgQQgJgNgTgOIgggYQgLgKgZgcQgXgagQgLIgjgWQgWgMgLgNQgVgaAIglQAHglAegPQAYgMAfAFQAcAFAZASQATANAYAYIApApQAZAWA1ApQAtAmARAlQANAfAFBAIAnHkQBmAhA3ALQBYARBIgLIA1gJQAfgDAVAKQAgAOAIAnQAHAngZAZQgOAPgXAIQgQAFgcAEQhGALg6AAQglAAgfgEg");
	this.shape_2.setTransform(96.4781,123.8651);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AlLHVQgogCgSgeQgLgSgCgbIAAgxQAAgwgMg+IgYhuQgThWgXiUIgmjjQgGgnADgYQADgiAVgSQAOgLAUgDQATgDATAFQAXAHArAcQB8BVBwBeQAUARALAHQATALARABQAOABARgGQAKgEARgJIFxi+QAkgSAYgGQAjgHAZAOQAWANAHAcQAHAcgLAYQgMAcghAVQgUANgqARQiRA7iPBXQg9AmgeANQg0AWgtgFQgbgEgdgOQgVgLgfgUQhag8hUhGQAKBQAsDSQAmC3AGBtQACAegDAUQgEAcgOARQgUAZgjAAIgGAAg");
	this.shape_3.setTransform(-60.1757,118.8438);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AHqISQgRgEgjgPQgzgXhOgXQhYgZgsgOQhhgdiqhEQgkgOgTgKQgdgQgTgTQgWgXgGgeQgIggAPgYQAMgUAZgNQAQgJAfgKIDzhNIjviPIgugcQg7gjgogbQgegUgUgPIhZhIQg1grgogWIglgVQgUgNgJgPQgQgaAJggQAIggAcgNQAvgXBMAvQAtAdBGA3QBSBCAeAVQAXAQAmAYIA9AlIBSAyIBiA6QBKAtAuASQA/AXAKAGQAoAVAKAfQAHAUgHAYQgGAXgQASQgXAbg0AZQhIAiiLAvQCwBPC5AoIAzALQAdAIAUAKQA4AbANAvQAIAagKAaQgKAbgYAKQgMAFgPAAQgLAAgNgDg");
	this.shape_4.setTransform(31.6284,128.9512);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3IpQgYgGgkgUQkCiQiqiTQgZgWgNgRQgRgYgCgYQgBgUAMgUQAKgTASgPQAXgSA2gUQDMhNCKhDQBGgiBAgkQAnAbA7AkIAuAbQjOB8jUBSQhQAggbAOQCdCIC5BYQAmASARANQAcAWAHAbQAHAYgMAYQgLAYgXAKQgNAHgRAAQgOAAgPgFgADCjlIg8glIAhgYQB4hVBqhoQAgggAOgLQAcgWAbgJQAfgJAgAMQAhANAIAdQAGAUgIAVQgGAUgPAQQgMANgUAOIgjAYQgkAagzAxQhEBCgQANQgZAWgiAZg");
	this.shape_5.setTransform(5.3123,126.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AilInQgegKgngiQg1gxhKhXQhjh2gWgXQhQhSgngpQhEhJgjg9Qgig/APgpQAOgmAygTQASgGAZgFIArgHQA4gKBLgcICAgxQBMgbCagkQBZgUB0gXQBIgPBAgPQC3gsBugzQAxgWAcgGQAtgIAcAVQAWAPAFAcQAGAdgOAWQgQAagyAVQg8AZg8AWQiHAxiOAeIgmAIIiCAXQhOAOgzANQgzANheAfIlgB2QAXAoAvAsIBSBMQAkAjBNBfQBFBWAuApIAoAiQAWAVALATQAPAYgBAbQAAAdgRARQgOAPgWADIgOABQgOAAgNgEg");
	this.shape_6.setTransform(-8.6247,122.2388);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AICHyQgngKgugWQgWgLg5ghQiphji2hdQglgSgSgPQgcgVgJgbQgIgZAIgdQAIgbATgWQAQgSAZgSIAtgeQBjg/BWhGQjvhFjOg5QCOgeCGgxIDKA9QA1APAeAHQAvAKAmAAIBCACQAlAFAVASQAXAVgCAjQgBAigZATQgQAMgdAGIgxAJQgfAHgiATQgWANglAaQhtBNhgBNIEtCjQBPArAqAPIAqAQQAYAKANANQAZAZgDAmQgDAngeAQQgRAKgYAAQgRAAgUgFgApcl6QgVgVABggQACghAWgTQAWgRAigBQAZgBAlAIQBrAVCIAlQhAAPhIAPQh0AXhaAUQgOgGgJgJg");
	this.shape_7.setTransform(41.0864,122.9471);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("ADdJzQgqgFirgOQiCgKhRgSQgfgHgTgIQgagMgOgTQgQgVgHgvQgLhHgMh7QgNiFgEhWQgHh3AEhkIAJiVQAFhZgEg9IgCg2QAAgfAIgWQAJgbAXgRQAYgSAZAFQARADAOANQAMAMAHARQALAXACAtQAEBSgGCDQgICqAAArQgBBsALCGQAHBVATCdQADAcAKAKQALAKAbACIFyAcQAfADARAEQAbAHAQAOQAZAXgDAlQgCAlgcATQgVAOggABIgEAAQgSAAgjgEg");
	this.shape_8.setTransform(87.4852,127.3732);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AC0JQIkrgYQgxgEgbgIQgpgNgVgbQgRgXgEgjQgDgWABgqQAGiqgKkIQgPl3gBg9QgBghADgRQAFgcAOgQQAVgZAkACQAjACASAbQAKAOAEAVQACANABAZIAOEwQAME0gDEiIFBAbQAeACAQAEQAZAGAPANQAaAWgDAnQgDAngdASQgSAKgZACIgPABIgfgCg");
	this.shape_9.setTransform(4.4869,129.1706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-194.4,269.9,384.9);


(lib.loopingligths = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(7,22.05,1,1,0,0,0,120,179);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:119.8,regY:178.1,x:6.8,y:21.15,alpha:0.9383},0).wait(1).to({alpha:0.8767},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.7533},0).wait(1).to({alpha:0.6917},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.5067},0).wait(1).to({alpha:0.445},0).wait(1).to({alpha:0.3833},0).wait(1).to({alpha:0.3217},0).wait(1).to({alpha:0.26},0).wait(1).to({alpha:0.3217},0).wait(1).to({alpha:0.3833},0).wait(1).to({alpha:0.445},0).wait(1).to({alpha:0.5067},0).wait(1).to({alpha:0.5683},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.6917},0).wait(1).to({alpha:0.7533},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.8767},0).wait(1).to({alpha:0.9383},0).wait(1).to({alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.6,-189,308,424);


// stage content:
(lib.finalprojectComplete = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		var root=this;
		var speed = 50
		function handleKeyDown(event){
			console.log(root.redHead_mc.scaleX)
			if (root.redHead_mc.currentFrame == 9){
				root.redHead_mc.gotoAndPlay("walking");
			}
			if(event.keyCode == 39 && root.background_mc.x > -18000){
				root.redHead_mc.scaleX = 1
				root.background_mc.x = root.background_mc.x - speed;
				console.log(root.background_mc.x)
			}
			if(event.keyCode == 37 && root.background_mc.x < 960){
				root.redHead_mc.scaleX = -1
				root.background_mc.x = root.background_mc.x + speed;
				console.log(root.background_mc.x)
			}
		}
		function handleKeyUp(event){
			root.redHead_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.sign_mc.addEventListener("click", handleClickSign);
		
		function handleClickSign(event){
			var test_snd = createjs.Sound.play("test");
			root.background_mc.sign_mc.play();
		}
		
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var music_snd = createjs.Sound.play("ticking");
			root.play();
		}
		
		this.Ex.addEventListener("click", handleClickEx);
		
		function handleClickEx(event){
			var test_snd = createjs.Sound.play("error");
			root.Ex.play();
		}
		
		this.here_mc.addEventListener("click", handleClickHere);
		
		function handleClickHere(event){
			var test_snd = createjs.Sound.play("thump");
			root.here_mc.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// character
	this.redHead_mc = new lib.walking();
	this.redHead_mc.name = "redHead_mc";
	this.redHead_mc.setTransform(894.9,561.65,1,1,0,0,0,38,-2.6);
	this.redHead_mc.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,13,43);
	this.redHead_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.redHead_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.wall();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(843.8,718.5,1,1,0,0,0,843.8,-361.5);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	// text
	this.instance = new lib.starttext();
	this.instance.setTransform(988.3,180.1,1,1,0,0,0,-1,-162.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// intro_room
	this.here_mc = new lib.gohere();
	this.here_mc.name = "here_mc";
	this.here_mc.setTransform(920.75,541.15);
	new cjs.ButtonHelper(this.here_mc, 0, 1, 2, false, new lib.gohere(), 3);

	this.instance_1 = new lib.crowdofpeopletrans();
	this.instance_1.setTransform(0,189);

	this.instance_2 = new lib.loopingligths();
	this.instance_2.setTransform(393.8,411.1,1.3646,1.4099,0,0,0,7.2,22.2);

	this.play_btn = new lib.testbutton();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(403.15,514.2);
	this.play_btn.shadow = new cjs.Shadow("rgba(0,0,0,1)",5,2,42);
	this.play_btn.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.play_btn.cache(-151,-328,288,476);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.Ex = new lib.otherdoor();
	this.Ex.name = "Ex";
	this.Ex.setTransform(1650.45,420.4,1.4691,1.4176,0,0,0,0,0.1);
	this.Ex.shadow = new cjs.Shadow("rgba(0,0,0,1)",5,2,42);
	new cjs.ButtonHelper(this.Ex, 0, 1, 2, false, new lib.otherdoor(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Ex},{t:this.play_btn},{t:this.instance_2},{t:this.instance_1},{t:this.here_mc}]}).to({state:[]},1).wait(1));

	// intro_wall
	this.instance_3 = new lib.introwall();
	this.instance_3.setTransform(959.95,540,1,1,0,0,0,960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(459.9,-36.2,20660.1,1692.3);
// library properties:
lib.properties = {
	id: '25A8B8BA40A94643B8E0C80CDBCE91F1',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_6.png?1702752032720", id:"CachedBmp_6"},
		{src:"images/final project Complete_atlas_1.png?1702752032678", id:"final project Complete_atlas_1"},
		{src:"images/final project Complete_atlas_2.png?1702752032678", id:"final project Complete_atlas_2"},
		{src:"images/final project Complete_atlas_3.png?1702752032679", id:"final project Complete_atlas_3"},
		{src:"sounds/ticking.mp3?1702752032720", id:"ticking"},
		{src:"sounds/error.mp3?1702752032720", id:"error"},
		{src:"sounds/test.mp3?1702752032720", id:"test"},
		{src:"sounds/thump.mp3?1702752032720", id:"thump"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['25A8B8BA40A94643B8E0C80CDBCE91F1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;