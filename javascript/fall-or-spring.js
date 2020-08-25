// uses path (e.g., courses/archive/spring18/cos126) to find which semester to hide

document.addEventListener('DOMContentLoaded', function(){
	var hide = 'fall';
	if (window.location.pathname.indexOf("fall") != -1) hide = 'spring';

	var elements = document.getElementsByClassName(hide+'-only');
	while (elements.length > 0) elements[0].parentNode.removeChild(elements[0]);
});
