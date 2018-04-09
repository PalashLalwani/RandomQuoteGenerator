function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quote").html("<p id='quote' class='text-center '>" + response.quoteText + "<br/> by: " + response.quoteAuthor + " </p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {randomQuote();});

$("button").click(function(){
  randomQuote();
});