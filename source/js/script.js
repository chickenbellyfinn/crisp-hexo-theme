$(function() {
	//set theme initially
	applyTheme();

	// lightbulb icon onclick
    $('#theme-toggle').click(function(){
    	// toggle the cookie
    	var dark = (localStorage.getItem('dark') == 'true');
    	console.log('set to '+ !dark)
    	localStorage.setItem('dark', !dark);

    	//update css
    	applyTheme();
    });
});

// sets the css according to the cookie
function applyTheme(){
	console.log(localStorage.getItem('dark'));
	var dark = (localStorage.getItem('dark') == 'true');

	var cssLink = $('#crisp-theme')
	var currentStyle = cssLink.attr('href');
	if(dark){
		cssLink.attr('href', currentStyle.replace('default.css', 'dark.css'));
	} else {
		cssLink.attr('href', currentStyle.replace('dark.css', 'default.css'));
	}
}

