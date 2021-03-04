var realPNG = false;

$(document).ready
	(
		function ()
		{
			$('img').on({
				mouseenter: function ()
				{
					//console.log('enter!');
				}
			});
			// Triggers when the mouse pointer hovers over an image
			$("img").hover
				(
					function (event)
					{
						// Print the full element in the console
						//console.log(event.target);
						// Add a red border around the image for visualization and debugging
						//$(event.target).css("border", "1px solid red");
						// Get the "src" attribute of the image
						var imageSource = $(event.target).attr("src");
						// Print the "src" attribute in the console
						//console.log(imageSource);
						// Check if the image source ends with the ".png" file extension
						if (imageSource != null)
						{
							if (imageSource.endsWith(".png"))
							{
								realPNG = true;
								console.log("File ends with '.png'");
							}
							else
							{
								realPNG = false;
								//console.log("File does not end with '.png'");
							}
						}
					}
				)
		}
	);

//var imageSource = $("img").attr("src");
//console.log(imageSource);

/*chrome.runtime.onMessage.addListener
	(
	
	function(request, sender, sendResponse)
	{
		if(request.message === "clicked_browser_action")
		{
			
		}
	}
);
*/