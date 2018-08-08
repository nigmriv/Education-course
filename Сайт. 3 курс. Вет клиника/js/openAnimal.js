// JavaScript Document
function openAnimal(evt, animalName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");//document.getElementsByClassName - результатом работы будет массив дочерних элементов с подходящим именем класса, относительно указанного элемента
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(animalName).style.display = "block";//document.getElementById("идентификатор") осуществляет доступ к элементу
    evt.currentTarget.className += " active";
}