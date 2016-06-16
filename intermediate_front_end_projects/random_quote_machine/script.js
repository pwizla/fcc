$(document).ready( function() {
	$.getJSON("https://raw.githubusercontent.com/pwizla/fcc/master/intermediate_front_end_projects/random_quote_machine/quotes.json", function(json) {
		quote = '"' + json.contents.quotes[1].quote + '"';
		console.log('length: ', json.contents.quotes.length);
		$(".quote").html(quote);
	});
});