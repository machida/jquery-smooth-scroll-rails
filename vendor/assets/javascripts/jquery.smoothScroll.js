/*****************************************************************
 *
 * jQuery SmoothScroll Plugin
 * スマートフォン対応のスムーススクロールプラグイン
 * 
 * Required: jQuery(http://jquery.com/)
 * License: MIT
 * Update: 2012/12/06
 * Version: 1.1
 * Author: yuu.creatorish
 * URL: http://creatorish.com
 * PluginURL: http://creatorish.com/lab/5393
 *
*******************************************************************/

jQuery.fn.smoothScroll = function(op) {
	var option = {
		easing: "swing",
		duration: 500,
		cancel: true,
		target: null,
		start: function(x,y) {},
		step: function(x,y){},
		canceled: function(x,y) {},
		complete: function(x,y){}
	};
	
	jQuery.extend(option,op);
	
	var scrolling = false;
	var w = jQuery(window);
	var d = jQuery(document.body);
	var s = jQuery({st: 0, sl: 0,v: 0});
	var c;
	if (option.target) {
		c = jQuery(option.target);
		if (c.children().length != 1) {
			c.wrapInner("<div style='position: relative'></div>");
		}
	}
	
	function clickHandler(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var h = jQuery(this).attr("href");
		var t = jQuery(h);
		if (t.length === 0) {
			t = d;
		}
		scrolling = true;
		if (c) {
			s.attr({
				st: c.scrollTop(),
				sl: c.scrollLeft()
			});
		} else {
			s.attr({
				st: w.scrollTop(),
				sl: w.scrollLeft()
			});
		}
		option.start(s.attr("sl"),s.attr("st"));
		
		var o = t.offset();
		if (c) {
			o = t.position();
			if (o.top > c.get(0).scrollHeight - c.innerHeight()) {
				o.top = c.get(0).scrollHeight - c.innerHeight();
			}
		}
		s.stop(true).animate({
			st: o.top,
			sl: o.left
		}, {
			duration: option.duration,
			easing: option.easing,
			step: stepHandler,
			complete: completeHandler
		});
	}
	function completeHandler() {
		scrolling = false;
		scroll(this.sl,this.st);
		option.complete(this.sl,this.st);
	}
	function stepHandler() {
		scroll(this.sl,this.st);
		option.step(this.sl,this.st);
	}
	function scroll(x,y) {
		if (c) {
			c.scrollLeft(x);
			c.scrollTop(y);
		} else {
			window.scrollTo(x,y);
		}
	}
	function stopQueue() {
		if (scrolling) {
			option.canceled(s.attr("sl"),s.attr("st"));
			scrolling = false;
			s.stop(true);
		}
	}
	function scrollTo(x,y) {
		scrolling = true;
		if (c) {
			s.attr({
				st: c.scrollTop(),
				sl: c.scrollLeft()
			});
		} else {
			s.attr({
				st: w.scrollTop(),
				sl: w.scrollLeft()
			});
		}
		option.start(s.attr("sl"),s.attr("st"));
		var o = {
			top: y,
			left: x
		};
		if (c) {
			if (o.top > c.get(0).scrollHeight - c.innerHeight()) {
				o.top = c.get(0).scrollHeight - c.innerHeight();
			}
			if (o.left > c.get(0).scrollWidth - c.innerWidth()) {
				o.left = c.get(0).scrollWidth - c.innerWidth();
			}
		} else {
			if (o.top > document.body.scrollHeight - window.innerHeight) {
				o.top = document.body.scrollHeight - window.innerHeight;
			}
			if (o.left > document.body.scrollWidth - window.innerWidth) {
				o.left = document.body.scrollWidth - window.innerWidth;
			}
		}
		
		s.stop(true).animate({
			st: o.top,
			sl: o.left
		}, {
			duration: option.duration,
			easing: option.easing,
			step: stepHandler,
			complete: completeHandler
		});
	}
	function scrollToElement(selector) {
		var o = jQuery(selector).offset();
		if (c) {
			o = jQuery(selector).position();
		}
		scrollTo(o.left,o.top);
	}
	
	if (option.cancel) {
		if ('ontouchend' in document) {
			if (c) {
				c.unbind("touchstart",stopQueue);
				c.bind("touchstart",stopQueue);
			} else {
				d.unbind("touchstart",stopQueue);
				d.bind("touchstart",stopQueue);
			}
		} else {
			if (c) {
				c.bind("DOMMouseScroll mousewheel",stopQueue);
				c.unbind("mousedown",stopQueue);
				c.bind("mousedown",stopQueue);
			} else {
				w.bind("DOMMouseScroll mousewheel",stopQueue);
				d.unbind("mousedown",stopQueue);
				d.bind("mousedown",stopQueue);
			}
		}
	}
	
	jQuery.each(this,function() {
		jQuery(this).unbind("click",clickHandler);
		jQuery(this).bind("click",clickHandler);
	});
	
	return {
		scroll: scrollTo,
		scrollToElement: scrollToElement,
		stop: stopQueue
	};
};