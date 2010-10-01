var jQT = $.jQTouch({
	icon: 'img/zsr.cupola.57x57.png',
        statusBar: 'black'
});
$(document).ready(function() {
	$('#catalog').submit(function() {
		myQuery = $('#searchtext').val();
		myUrlBase = $('#urlbase').val();
		window.location.replace(myUrlBase + myQuery);
		return false;
	});

 	$('.testfeed').bind('pageAnimationStart', function() {
		var myFeed = this.id;
		//$('.testfeed .toolbar h1').prepend('testing');
		feedurl = 'http://localhost/~mitcheet/lita_mobile/static_site/' + myFeed + '.xml';
		//alert(feedurl);
		$.ajax({
                	type: "GET",
               		url: feedurl,
                	dataType: "xml",
                	success: function(xml)
        			{
				//alert('parsing');
                		$('#' + myFeed + ' ul').empty();
				$(xml).find("item").each(function()
               				{
						var title = $(this).find('title').text();
                        			var pubDate = $(this).find('published').text();
                        			var summary = $(this).find('description').text();
						var link = $(this).find('link').text();
                        			var thumb1 = $(this).find('identifier').text()
						//thumb = 'http://www.syndetics.com/index.php?isbn=/sc.gif&amp;client=wfuni&amp;upc=' + thumb1;
						//<img class="thumbnail" height="75" src=' + thumb + ' />
                        			var listItem = $('<li class="rounded"><a target="_blank" href="' + link + '"><img class="thumbnail" src="http://localhost/~mitcheet/zsrmobile2/static/localimg/zsr.cupola.57x57.png" /></a>' + '<span>' + title + '</span>' +
pubDate + '<br/>' + summary + '</li>');
                       				 $('#' + myFeed + ' ul').append(listItem);
					});
				},
                	error: errorMsg
		});	
	});
});


function errorMsg() {
	alert("error getting xml feed");
}
   

