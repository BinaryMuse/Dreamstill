// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
	
	$('a.oembed').embedly({maxWidth:300,'method':'replace'}).bind('embedly-oembed', function(e, oembed){ 
		$("#video_div").prepend($("<img>", { src: oembed.thumbnail_url, width:200 }));
	});
	
	$("#video_div img").click(function() {
	   $("div.embed").toggle();
	});
	
	
});



