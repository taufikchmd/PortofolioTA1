function myFunctionHome() {
	document.getElementById("divHome").style.borderBottom = "2px solid #FEFFFF";
	document.getElementById("divAbout").style.borderBottom = "none";
	document.getElementById("divProject").style.borderBottom = "none";
	document.getElementById("divContact").style.borderBottom = "none";
}

function myFunctionAbout() {
	document.getElementById("divHome").style.borderBottom = "none";
	document.getElementById("divAbout").style.borderBottom = "2px solid #FEFFFF";
	document.getElementById("divProject").style.borderBottom = "none";
	document.getElementById("divContact").style.borderBottom = "none";
}

function myFunctionProject() {
	document.getElementById("divHome").style.borderBottom = "none";
	document.getElementById("divAbout").style.borderBottom = "none";
	document.getElementById("divProject").style.borderBottom = "2px solid #FEFFFF";
	document.getElementById("divContact").style.borderBottom = "none";
}

function myFunctionContact() {
	document.getElementById("divHome").style.borderBottom = "none";
	document.getElementById("divAbout").style.borderBottom = "none";
	document.getElementById("divProject").style.borderBottom = "none";
	document.getElementById("divContact").style.borderBottom = "2px solid #FEFFFF";
}
