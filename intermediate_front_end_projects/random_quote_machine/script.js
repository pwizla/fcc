$(document).ready( function() {
	$.getJSON("http://quotes.rest/qod.json?category=funny", function(json) {
//		$(".quote").html(JSON.stringify(json));
		var theQuote = json.contents.quotes[0].quote;
		console.log('quote: ', theQuote);

		$(".quote").html(theQuote);
	});
});