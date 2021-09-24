document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#minimizeButton').addEventListener('click', () => {
	  document.querySelector('.codeplayerRow.collapsible').classList.toggle('collapsed');
	  document.querySelector('.codeplayerRow.bigger').classList.toggle('big');
	});
});
