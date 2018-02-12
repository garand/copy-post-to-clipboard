var cptcButtons = document.getElementsByClassName('copyPostToClipboard__button');

console.log(cptcButtons);

for (var i = 0; i < cptcButtons.length; i++) {
	cptcButtons[i].addEventListener('click', copyPostToClipboard);
}

function copyPostToClipboard(event) {
	var content = document.getElementById('copyPostToClipboard__contentArea').innerHTML;

	console.log(event);

	var dt = new clipboard.DT();
	dt.setData("text/plain", content.replace(/<(?:.|\n)*?>/gm, ''));
	dt.setData("text/html", content);

	clipboard.write(dt).then(
		function(){
			event.target.innerHTML = "Copied!";
			window.setTimeout(function(){
				event.target.innerHTML = "Copy to Clipboard";
			}, 1000);
		},
		function(err){
			event.target.innerHTML = "Error.";
			console.log("failure", err);
		}
	);
}
