// JavaScript Document
        function calc() {
            var type_design = document.getElementById("type_design"); //получаем ссылку на элемент Select 
            var is_html = document.getElementById("is_html"); //получаем ссылку на чекбокс 
            var count = document.getElementById("count"); //получаем ссылку на элемент input 
            var result = document.getElementById("result"); //получаем ссылку на элемент span
			
            var price = 0;
            price += parseInt(type_design.options[type_design.selectedIndex].value);
            price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
            price = parseInt(count.value) * price;
			
            result.innerHTML = price;}
			
