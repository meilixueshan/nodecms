$(function() {
	$("img").each(function(i) {
		var imgUrl = $(this).attr("data-src");
		if(imgUrl) {
			$(this).attr("src", imgUrl);
		}
	});
});