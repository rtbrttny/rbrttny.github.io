$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function(){
		console.log(lights);

		if (lights == 'on') {
			$('body').css('background','black');
			$('#lightswitch').css('background','white');
			$('#lightswitch').css('color', 'black');
			$('#lightswitch').text('OFF');


			lights = 'off';
			}
			else {
			$('body').css('background','white');
			$('#lightswitch').css('background','black');
			$('#lightswitch').css('color', 'white');
			$('#lightswitch').text('ON');

			lights = 'on';
		
			// console.log('lights are already off')
		}

	})

})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;