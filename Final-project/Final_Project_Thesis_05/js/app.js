

// $('.circle-wrap-a').hover(function(){
// 	$('.iso-line').addClass('iso-line--active');
// }, function(){
// 	$('.iso-line').removeClass('iso-line--active');
// });
console.log('javascript loaded');

var $isoLineLeft =  $('.iso-line-left');

$('.circle-wrap').hover(function(event) { // this is what happens on mouseenter
	// console.log('circle got hovered!', event.target);
	// pick out the x and y positions
	var selectedClass = event.target.parentElement.classList[2];
	// console.log(selectedClass);

	// this checks for columns
	if(selectedClass == 'row1' || selectedClass == 'row2') {
		$('.line1').addClass('iso-line--active');
		$('.iso-line-1-left').siblings().hide();
		$('.iso-line-1-left').show();

	} else if(selectedClass == 'row3' || selectedClass =='row4'){
		$('.line2').addClass('iso-line--active');
		$('.iso-line-2-left').siblings().hide();
		$('.iso-line-2-left').show();

	} else if(selectedClass == 'row5' ){
		$('.line4').addClass('iso-line--active');
		$('.iso-line-3-left').siblings().hide();
		$('.iso-line-3-left').show();

	} else if(selectedClass == 'row6' ){
		$('.line5').addClass('iso-line--active');

		$('.iso-line-5-left').siblings().hide();
		$('.iso-line-5-left').show();


	} else if(selectedClass == 'row7' ){
		$('.line6').addClass('iso-line--active');

		$('.iso-line-6-left').siblings().hide();
		$('.iso-line-6-left').show();

	} else if(selectedClass == 'row8' ){
		$('.line7').addClass('iso-line--active');

		$('.iso-line-7-left').siblings().hide();
		$('.iso-line-7-left').show();

	} else if(selectedClass == 'row9' || selectedClass == 'row10' ){
		$('.line8').addClass('iso-line--active');

		$('.iso-line-8-left').siblings().hide();
		$('.iso-line-8-left').show();

	} else if(selectedClass == 'row11' || selectedClass == 'row12' ){
		$('.line9').addClass('iso-line--active');

		$('.iso-line-9-left').siblings().hide();
		$('.iso-line-9-left').show();

	}

	// grab the class that contains the column
	var letter = event.target.children[0] ? event.target.children[0].classList[1] : '';
	// check for rows and hover
	if(letter == 'a' || letter == 'b') {
		// console.log('this worked')
		$('.column9').addClass('colortemp--active');
		// debugger

		$isoLineLeft.css('width', '500px');

	} else if(letter == 'c' || letter =='d'){
		$('.column8').addClass('colortemp--active');

		$isoLineLeft.css('width', '400px');

	} else if(letter == 'e' || letter =='f'){
		$('.column7').addClass('colortemp--active');

		$isoLineLeft.css('width', '350px');

	} else if(letter == 'g' || letter =='h'){
		$('.column6').addClass('colortemp--active');

		$isoLineLeft.css('width', '300px');

	} else if(letter == 'i' || letter =='j' ){
		$('.column5').addClass('colortemp--active');

		$isoLineLeft.css('width', '250px');

	} else if(letter == 'k' || letter =='l'){
		$('.column4').addClass('colortemp--active');

		$isoLineLeft.css('width', '300px');

	} else if(letter == 'm' || letter == 'n' ){
		$('.column3').addClass('colortemp--active');

		$isoLineLeft.css('width', '350px');

	} else if(letter == 'o' || letter == 'p' ){
		$('.column2').addClass('colortemp--active');

		$isoLineLeft.css('width', '400px');

	} else if(letter == 'q' || letter == 'r' ){
		$('.column1').addClass('colortemp--active');

		$isoLineLeft.css('width', '500px');

	}



}, function(event) { // this is what happens on mouseleave
	var selectedClass2 = event.target.parentElement ? event.target.parentElement.classList[2] : '';
	// console.log('the selected class to remove' , selectedClass2);


	$isoLineLeft.hide()

	if(selectedClass2 == 'row1' || selectedClass2 == 'row2') {
		$('.line1').removeClass('iso-line--active');


	} else if(selectedClass2 == 'row3' || selectedClass2 =='row4'){
		$('.line2').removeClass('iso-line--active');

	// } else if(selectedClass == 'row5' ){
	// 	$('.line4').removeClass('iso-line--active');

	} else if(selectedClass2 == 'row5' ){
		$('.line4').removeClass('iso-line--active');

	} else if(selectedClass2 == 'row6' ){
		$('.line5').removeClass('iso-line--active');

	} else if(selectedClass2 == 'row7' ){
		$('.line6').removeClass('iso-line--active');

	} else if(selectedClass2 == 'row8' ){
		$('.line7').removeClass('iso-line--active');
		
	} else if(selectedClass2 == 'row9' || selectedClass2 == 'row10' ){
		$('.line8').removeClass('iso-line--active');

	} else if(selectedClass2 == 'row11' || selectedClass2 == 'row12' ){
		$('.line9').removeClass('iso-line--active');

	}

	var letter = event.target.children[0] ?  event.target.children[0].classList[1] : 0;
	
	if(letter == 'a' || letter == 'b') {
		// console.log('this worked')
		$('.column9').removeClass('colortemp--active');
		// debugger

	} else if(letter == 'c' || letter =='d'){
		$('.column8').removeClass('colortemp--active');

	} else if(letter == 'e' || letter =='f'){
		$('.column7').removeClass('colortemp--active');

	} else if(letter == 'g' || letter =='h'){
		$('.column6').removeClass('colortemp--active');

	} else if(letter == 'i' || letter =='j' ){
		$('.column5').removeClass('colortemp--active');

	} else if(letter == 'k' || letter =='l'){
		$('.column4').removeClass('colortemp--active');

	} else if(letter == 'm' || letter == 'n' ){
		$('.column3').removeClass('colortemp--active');

	} else if(letter == 'o' || letter == 'p' ){
		$('.column2').removeClass('colortemp--active');

	} else if(letter == 'q' || letter == 'r' ){
		$('.column1').removeClass('colortemp--active');

	}

});


// console.log($isoLineLeft.length)

// $('.circle-wrap').mousemove(function(){
// 	if ($(this).children('.a').length > 0) {
// 	 console.log('a');

// 	$isoLineLeft.css('width', '434px');
// 	} else if ($(this).children('.b').length > 0) {
// 	 console.log('b')

// 	 $isoLineLeft.css('width', '300px');
// 	} else {
// 	  $isoLineLeft.css('width', '200px');
// 	}


// });