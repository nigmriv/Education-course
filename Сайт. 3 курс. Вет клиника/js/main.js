// JavaScript Document
var slider = {
	slides:['img/1.jpg','img/2.jpg','img/3.png','img/4.jpg','img/5.jpg'],
	frame:0, // текущий кадр для отбражения - индекс картинки из массива
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("scr").style.backgroundImage = "url("+image+")";//document.getElementById("идентификатор") осуществляет доступ к элементу
	},
	init: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.frame]);//get – функция, которая возвращает значение свойства
	},
	left: function() { // крутим на один кадр влево
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},
	right: function() { // крутим на один кадр вправо
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);		
	}
};
window.onload = function() { // запуск слайдера после загрузки документа
	slider.init();
	setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
		slider.right();
	},5000);
};