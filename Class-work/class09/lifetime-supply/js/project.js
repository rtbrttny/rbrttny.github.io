
	$('.click-me').click(submitClick);

function submitClick () {
	  var age = $('#age').val();
	  var maxiumAge = $('#max-age').val();
	  var item = $('#item').val();
	  var dayAmount = $('#num-per-day').val();
	}

// $('#solution').html('You will drink' 
// 	+ (age * max-age) * (item * num-per-day) + 'inYourLifetime'}


$('#age'.val() * '#max-age'.val() * '#num-per-day'.val()).click(function(){
	total = 0;
	$('.solution').html(total);
});

$('.solution').html('You Will Drink' + total + 'more' + item + 'in Your Lifetime')}



// HTML
// 	$('#someId').html()
// inserts and overwrites html text
// $('#someId').html('<h1>a heading</h1>')
// returns(reads)any text inside the selected element
// $('#someId').text()
// Overwrites any text (or HTML) inside the selected element
// $('#someId').text('some text!')



// click function 
// refrence food and drink code pen