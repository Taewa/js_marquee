//THIS PROJECT IS NOT FINISHED
//Css3 Marquee
//Author : Taehwa KIM
//Dependencies : <jquery> 

//Get text width
// $.fn.textWidth = function(){
//   var html_org = $(this).html();
//   var html_calc = '<span>' + html_org + '</span>';
//   $(this).html(html_calc);
//   var width = $(this).find('span:first').width();
//   $(this).html(html_org);
//   return width;
// };


var Marquee = function(opt){
	this.init(opt);
};


/* Init
========================================================================== */
Marquee.prototype.init = function(opt){
	var self = this;

	$(".marquee-element").empty().text(opt.text);
	
	var textSize = $(".marquee-element").textWidth();
	
	var coverSize = $(".marquee-wrapper").width();

	self.marqueeAniSet(coverSize, textSize);
}



/* Animation keyframe set
========================================================================== */
Marquee.prototype.marqueeAniSet = function(coverSize, textSize){
	$(".marquee-animation-style").remove();

	var marqueeStyle = "<style class='marquee-animation-style'>";
	var prefix = "";

	if (CSSRule.KEYFRAMES_RULE) { 				// W3C
		prefix = "@keyframes ";					//Need to have a space
	} else if (CSSRule.WEBKIT_KEYFRAMES_RULE) { // WebKit
	    prefix = "@-webkit-keyframes ";			//Need to have a space
	}

	marqueeStyle += prefix + "marqueeAnimation {\
	    0%   {-webkit-transform: translate3d(0, 0, 0); left: " + coverSize + "px}\
	    100% {-webkit-transform: translate3d(0, 0, 0); left: -" + textSize + "px}\
	}";

	marqueeStyle += "</style>";

	$(marqueeStyle).appendTo("head");
}

