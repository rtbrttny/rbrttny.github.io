// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#second').click(function(){
// 	$('#big-image').attr('src', $('#second').attr('src'));
// });

// $('#third').click(function(){
// 	$('#big-image').attr('src', $('#third').attr('src'));
// });

// $('#fourth').click(function(){
// 	$('#big-image').attr('src', $('#fourth').attr('src'));
// });


$('.thumb').click(function(){
	var thumbSrc = $(this).attr('src');

	$('#big-image').attr('src', thumbSrc);

	$(this).prev().css('border', '1px solid red');
});