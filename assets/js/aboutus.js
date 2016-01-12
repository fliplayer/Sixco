$(document).ready(function() {
	var active = 1;
	$('.namebox').click(function(event) {
		var targetid = event.target.id;
		if((targetid == "box1" || targetid == "name1") && active != 1) {
			var elem = "#active" + active;
			$(elem).animate({
				opacity: 0
			}, 500, function(){});
			$('#active1').animate({
				opacity: 1
			}, 500, function(){});
			$('h2#name').text("JOSH ZHANG");
			$('h3#position').text("CEO");
			$('span.name.short').html("B.A. in Economics at University of California, Los Angeles (UCLA)<br><br>Background in sales negotiation, international trading, and accounting.");
			$('#image').attr("src", "../assets/images/people1.jpg");
			active = 1;
		}
		else if((targetid == "box2" || targetid == "name2") && active != 2) {
			var elem = "#active" + active;
			$(elem).animate({
				opacity: 0
			}, 500, function(){});
			$('#active2').animate({
				opacity: 1
			}, 500, function(){});
			$('h2#name').text("ALEX REED");
			$('h3#position').text("CFO");
			$('span.name.short').html("B.A. in Economics at University of California, Los Angeles (UCLA)<br><br>Background in sales, marketing, and client relations.");
			$('#image').attr("src", "../assets/images/people2.jpg");
			active = 2;
		}
		else if((targetid == "box3" || targetid == "name3") && active != 3) {
			var elem = "#active" + active;
			$(elem).animate({
				opacity: 0
			}, 500, function(){});
			$('#active3').animate({
				opacity: 1
			}, 500, function(){});
			$('h2#name').text("HONGBO CUI");
			$('h3#position').text("Director of Marketing");
			$('span.name.short').html("B.A. in Business Administration at University of Southern California (USC)<br><br>Background in start-up businesses, international trading, and sales.");
			$('#image').attr("src", "../assets/images/people3.jpg");
			active = 3;
		}
		else if((targetid == "box4" || targetid == "name4") && active != 4) {
			var elem = "#active" + active;
			$(elem).animate({
				opacity: 0
			}, 500, function(){});
			$('#active4').animate({
				opacity: 1
			}, 500, function(){});
			$('h2#name').text("JAI KYEONG KIM");
			$('h3#position').text("Managing Director");
			$('span.name.short').html("B.A. in Business Economics at University of California, Los Angeles (UCLA)<br><br>Background in business development and team management.");
			$('#image').attr("src", "../assets/images/people4.jpg");
			active = 4;
		}
		else if((targetid == "box5" || targetid == "name5") && active != 5) {
			var elem = "#active" + active;
			$(elem).animate({
				opacity: 0
			}, 500, function(){});
			$('#active5').animate({
				opacity: 1
			}, 500, function(){});
			$('h2#name').text("WESLEY WANG");
			$('h3#position').text("Director of Risk Management");
			$('span.name.short').html("B.A. in Economics at University of Melbourne<br><br>Background in risk-management and internal management.");
			$('#image').attr("src", "../assets/images/people5.jpg");
			active = 5;
		}
		else if((targetid == "box6" || targetid == "name6") && active != 6) {
			var elem = "#active" + active;
			$(elem).animate({
				opacity: 0
			}, 500, function(){});
			$('#active6').animate({
				opacity: 1
			}, 500, function(){});
			$('h2#name').text("ERIC ZHU");
			$('h3#position').text("Director of Public Relations");
			$('span.name.short').html("B.A. in Economics at Simon Fraser University (SFU)<br><br>Background in marketing, team management, and company operations.");
			$('#image').attr("src", "../assets/images/people6.jpg");
			active = 6;
		}
		
	});
});