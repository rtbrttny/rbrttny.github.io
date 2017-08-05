$('#submit').click(function(){
	// console.log('its working');
	var a = parseFloat($('#a').val());
	var b = parseFloat($('#b').val());

	console.log(a,b);

	if (a > b) {
		$('#comparison').html('>')
	} 
	else if (a < b) {
		$('#comparison').html('<')
	} 
	else if (a = b) {
		$('#comparison').html('is equal to (==)')
	else{
		$('#comparison').html('what are your doing')
	}
	}
});