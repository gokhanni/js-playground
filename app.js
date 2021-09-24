document.addEventListener('DOMContentLoaded', () => {

	// Elements
	const header = document.querySelector('.codeplayer__nav');
	const playerContainers = Array.from(document.querySelectorAll('.codeplayer__player'));
	const playerToggles = Array.from(document.querySelectorAll('.codeplayer__toggle'));
	const windowHeight = window.innerHeight;
	const headerHeight = header.clientHeight;
	const runButton = document.querySelector('#runButton');
	const iframe = document.querySelector('.codeplayer__results-frame');
	

	// Update iframe upon clicking the run button
	runButton.addEventListener('click', () => {
		let cssCode = document.querySelector('#cssCode').value;
		let jsCode = document.querySelector('#jsCode').value;
		let htmlCode = document.querySelector('#htmlCode').value;
		let result = `<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`;
		let doc;

		if (iframe.contentDocument) {
			doc = iframe.contentDocument;
		} else if (iframe.contentWindow) {
			doc = iframe.contentWindow.document;
		}
		else {
			doc = iframe.document;
		}

		doc.open();
		doc.writeln(result);
		doc.close();
	});

	playerContainers.forEach(container => {
		container.addEventListener('keyup', (e) => {
			if (e.ctrlKey && e.key == "Enter") {
				runButton.click();
				e.preventDefault();
			}
		})
	});
	
	//toggle dropdown menu open/close
	var toClose = false

	function toggle(e) {
	  e.stopPropagation();
	  var btn=this;
	  var menu = btn.nextSibling;
	  
	  while(menu && menu.nodeType != 1) {
		 menu = menu.nextSibling
	  }
	  if(!menu) return;
	  if (menu.style.display !== 'block') {
		menu.style.display = 'block';
	    if(toClose) toClose.style.display="none";
	    toClose  = menu;
	  }  else {
		menu.style.display = 'none';
	    toClose=false;
	  }

	};
	function closeAll() {
	    toClose.style.display='none';
	};

	window.addEventListener("DOMContentLoaded",function(){
	  document.querySelectorAll(".btn-buy-list").forEach(function(btn){
		 btn.addEventListener("click",toggle,true);
	  });
	});

	window.onclick=function(event){
	  if (toClose){
		closeAll.call(event.target);
	  }
	};


});