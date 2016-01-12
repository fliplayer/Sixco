$(document).ready(function() {
	window.setInterval(function() {
		var id = $('.active').attr('id');
		if(id == "pic1") {
			$('.headertext').text("Expand your market and discover new opportunities");
		}
		else if(id == "pic2") {
			$('.headertext').html("<strong id='heading'>Create</strong><br><br>Building from the ground up");
		}
		else if(id == "pic3") {
			$('.headertext').html("<strong id='heading'>Connect</strong><br><br>Matching markets with solutions");
		}
		else if(id == "pic4") {
			$('.headertext').html("<strong id='heading'>Inspire</strong><br><br>Leading positive movements");
		}
	}, 500);
	
});