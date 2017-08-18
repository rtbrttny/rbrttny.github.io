// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// Inside the anonymous function:
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)

// $(document).ready(function () {
	var total = 0;

	$('form').submit(function(e){
		e.preventDefault();

		var newEntry = parseFloat($('#newEntry').val());

	$('#entries').append('<tr><td></td><td>' + newEntry +'</td></tr>');
			

		total += newEntry;
		$('#total').html($ + 'total');
	})



// 	$('#n30').click(function () {
// 	total -= 30;

// 	$('#out').text(total);
// });



// $('.thumb').click(function(){
// 	var thumbSrc = $(this).attr('src');

// 	$('#big-image').attr('src', thumbSrc);

// 	$(this).prev().css('border', '1px solid red');
// });