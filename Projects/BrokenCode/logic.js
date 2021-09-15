$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})
//seperate the statements each time so it pops up each time you press "booFacts"
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]
//change the text pink
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})
//change the text orange
$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
//change the text green
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//increases the size of the picture when the button is pressed
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})
//decreased the size of the picture when the button is pressed
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})