document.addEventListener('DOMContentLoaded', () => {
	let projectList = [];
	saveButton.addEventListener('click', () => {
		let projectName = prompt("Please enter a name for your project:", "My Project");
		let project = {
			name: projectName,
			html: document.getElementById('htmlCode').value,
			css: document.getElementById('cssCode').value,
			js: document.getElementById('cssCode').value
		}
		projectList.push(project);
				
		//save local storage
		localStorage.setItem('projectList', JSON.stringify(projectList));
	});
	
});