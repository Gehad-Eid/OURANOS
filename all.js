var darkmoda = localStorage.getItem ("darkMode");
if(darkmoda){
	DarkMode();
	}

function DarkMode(){
	var element = document.body;
	const toggle = document.getElementById('toggle');
	
	toggle.classList.toggle('active');
	element.classList.toggle("dark-mode");
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	
	var dark = toggle.classList;
	if(dark == 'active'){
		localStorage.setItem("darkMode", true);	
	}
	else{
		localStorage.removeItem("darkMode");
	}
}