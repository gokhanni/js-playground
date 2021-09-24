document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("jsCode").value = getSavedValue("jsCode");    
    document.getElementById("cssCode").value = getSavedValue("cssCode");
	document.getElementById("htmlCode").value = getSavedValue("htmlCode");	
	
	document.querySelectorAll("textarea").forEach(item => {
		item.addEventListener('input', function(e){
			var id = this.id;   
			var val = this.value;  
			localStorage.setItem(id, val);
		});
	});


    function getSavedValue  (v){
        if (!localStorage.getItem(v)) {
             return ""; 
        }
        return localStorage.getItem(v);
    };


});
