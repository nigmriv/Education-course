document.addEventListener("DOMContentLoaded", ready);

var lis = new Array();

function ready()  {

	lis = document.getElementsByClassName("dmenu");
	for(var i = 0; i<lis.length;i++){
		lis[i].addEventListener("mousedown", ondown);
	}

}
function ondown(e){
	var elems = new Array();
	for(var i = 0;i<lis.length;i++){
		elems = lis[i].getElementsByTagName("UL");
		for (var j = 0; j < elems.length; j++) {
			if(lis[i] == e.target){
				elems[j].style.display = "block";
				continue;
			}
			elems[j].style.display = "none";
		}
	}

}