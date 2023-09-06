$(document).ready(function(){
	$('#ham-menu').click(function(){
		$(this).toggleClass('open');
        $('#nav_bar').toggleClass('open_nav');
	});
});