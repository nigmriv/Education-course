// JavaScript Document
function tip (tipOn, event) {
	var tipText = document.getElementById("theTip"); // id соответствует, указанному в "непонятная фраза";
	var tipOn = document.getElementById("tipOn"); // id подсказки;
	tipOn.appendChild(tipText);
	if (document.addEventListener) {

		tipOn.addEventListener("mouseover",showTip,true);
		tipOn.addEventListener("mouseout",hideTip,true);

	} else if (document.attachEvent) {

		tipOn.setCapture();
		tipOn.attachEvent("onmouseover", showTip);
		tipOn.attachEvent("onmouseout", hideTip);

	}

	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble=true;

	if (event.preventDefault) event.preventDefault();
	else event.returnValue=false;
		function showTip (e) {
		if (!e) e = window.event;
		tipText.style.display = "block";
		tipText.style.left = e.clientX;//положение подсказки по оси X, в данном случае совпадает с положением курсора
		tipText.style.top = e.clientY + 5 + "px";//положение подсказки по оси Y. Задан отступ от курсора в 5 px.
		tipOn.style.cursor = "help";//при наведении на фразу рядом с курсором появляется знак вопроса
	}

	function hideTip (e) {
		if (!e) e = window.event;
		tipText.style.display = "none";
				if (document.removeEventListener) {

			document.removeEventListener("mouseover", showTip, true);
			document.removeEventListener("mouseout", hideTip, true);

		} else if (document.detachEvent) {

			tipOn.detachEvent("onlosecapture", showTip);
			tipOn.detachEvent("onmouseover", showTip);
			tipOn.detachEvent("onmouseout", hideTip);
			tipOn.releaseCapture();

		}

		if (e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	}
}