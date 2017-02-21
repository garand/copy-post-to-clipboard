var cptcButton = document.getElementById('copyPostToClipboard__button')

cptcButton.addEventListener('click', copyPostToClipboard);

function copyPostToClipboard() {
	var content = document.getElementById('copyPostToClipboard__contentArea').innerHTML;

	clipboard.copy({
		"text/html": content
	}).then(
		function(){
			cptcButton.innerHTML = "Copied!";
		},
		function(err){
			cptcButton.innerHTML = "Error.";
			console.log("failure", err);
		}
	);
}
