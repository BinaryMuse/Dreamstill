// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
	
	$("#new_video").bind('submit', function(e){
			var q = $(this).find('#video_video_url').val();
			 console.log(q)
			if (q == '')
				return false;

			$.embedly(q, {maxWidth: 500, wrapElement: 'div' }, function(oembed, dict){
				if (oembed == null)
					$(this).parent().prepend('<p class="text"> Not A Valid URL </p>');
				else 
					$(this).parent().prepend(oembed.code);
			})
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



