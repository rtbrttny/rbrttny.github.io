// aa6b2cb03f8141689e5a87096483590c
//javascript, jQuery

var xhrReddit = $.get("https://www.reddit.com/r/news/new/.json");

xhrReddit.done(function(data) { 

	data.data.children.forEach(function(post, index){
		if (index < 5) {
			console.log(post.data.title);

			var postTitle = post.data.title;

			var postTitleNoPluses = 

			// $('.headline').html(postTitle);

			$('.meme-wrap').append('<h1>' + postTitle + '<h1>');

			postTitle = postTitle.split(' ');
			
			postTitle = postTitle.join('+');

			console.log(postTitle);

			var xhrGiphy = $.get("http://api.giphy.com/v1/gifs/search?q=" + postTitle +  "&api_key=aa6b2cb03f8141689e5a87096483590c&limit=5");

			xhrGiphy.done(function(data) { 
				var firstMp4 = data.data[0].images.original_mp4.mp4; 

				$('.meme-wrap').append('<video src="' + firstMp4 +  '" type="video/mp4" autoplay loop></video>')
			});
		}

	})
});
