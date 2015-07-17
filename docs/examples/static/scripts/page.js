$(document).ready(function() {
	$(".tabs a").click(function(e){
		e.preventDefault();
		var $el = $(e.target);
		var holder = $('body');
		$("#font-type").text($el.text());   
		holder.css("font-weight",$el.data('weight') );
		holder.css("font-style",$el.data('style'));
	});
});