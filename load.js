document.addEventListener('DOMContentLoaded', () => {
	let storedData = window.localStorage.getItem('projectList');
	storedData = JSON.parse(storedData);
	let dropdownHTML = "";
	
	//dropdown menu
	let result = storedData.map((item)=>[
		item["name"],
	]);

	for (let i = 0; i < result.length; i++) {
		dropdownHTML = dropdownHTML + "<a class='dropdown-item' href='#' id='"+result[i]+"'>'"+result[i]+"'</a>'";
	};
	
	
	document.getElementById("historyMenu").innerHTML = dropdownHTML;
	document.querySelectorAll('.dropdown-item').forEach(item => {
		item.addEventListener('click', function(e){
			let projectName = this.id;

			var found = storedData.find(e => e.name === projectName);
			console.log(found);
			document.getElementById("htmlCode").value=found.html;
			document.getElementById("cssCode").value=found.css;
			document.getElementById("jsCode").value=found.js;
			runButton.click();
		});
	});
	
	
	
	
});



