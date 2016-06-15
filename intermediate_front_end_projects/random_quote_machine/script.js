$(document).ready( function() {
	console.log("MES COUILLES !");
	$.getJSON("https://raw.githubusercontent.com/pwizla/fcc/master/intermediate_front_end_projects/random_quote_machine/quotes.json", function(json) {
		// quote = json.quotes.quote[0];
		console.log('json: ', json);
		quote = json.contents.quotes[0].quote;

		console.log("quote: ", quote);

		$(".quote").html(quote);
		// var theQuote = json.contents.quotes[0].quote;
		// console.log('quote: ', theQuote);
	console.log("MES COUILLES !");
	});
});