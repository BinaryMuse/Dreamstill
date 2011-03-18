// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
	
	$('a.oembed').each(function(){
		$(this).embedly({maxWidth:400,'method':'replace'}).bind('embedly-oembed', function(e, oembed){ 
			$(this).parent().append($("<img>", { src: oembed.thumbnail_url, width:200 }));
			$(this).parent().prepend('<hr noshade>');
		});
	});

	$("#video_div img").live('click', function() {
	   $(this).toggle();	
	   $(this).parent().children('.embed').toggle();
	});
	
	
	$('a[name=modal]').click(function(e) {
	        //Cancel the link behavior
	        e.preventDefault();
	        //Get the A tag
	        var id = $(this).attr('href');

	        //transition effect     
	        $('#mask').fadeIn(50);    

	        //Get the window height and width
	        var winH = $(window).height();
	        var winW = $(window).width();
	
			$('#mask').css('top',  winH/2-$('#mask').height()/2.35);
	        $('#mask').css('left', winW/2-$('#mask').width()/2.2);

	        //Set the popup window to center
	        $(id).css('top',  winH/2-$(id).height()/2);
	        $(id).css('left', winW/2-$(id).width()/2);

	        //transition effect
	        $(id).fadeIn(50); 

	    });

	    //if close button is clicked
	    $('.window .close').click(function (e) {
	        //Cancel the link behavior
	        e.preventDefault();
	        $('#mask, .window').hide();
	    });     

	    //if mask is clicked
	    $('#mask').click(function () {
	        $(this).hide();
	        $('.window').hide();
	    });	
});



