// JavaScript Document
var	data = new Array ("Петров", "253-93-10", "253-93-12",
    "кафе", "26.03", "12.00",
    "проезд", "5", "руб.");

var pic = new Array ("fam.png", "phone_work.png", "phone_home.png",
    "place.png", "data.png", "time.png",
    "kind.png", "price.png", "valuta.png");

var picOMO = new Array ("fam_.png", "phone_work_.png", "phone_home_.png",
    "place_.png", "data_.png", "time_.png",
    "kind_.png", "price_.png", "valuta_.png");


function ShowField (m,i) {
    document.f.elements[i].value = data[3 * m + i];
}

function ShowMenu (menu) {
    for(i=0; i<3; i++) {
        document.images[i+3].src = pic[3 * menu + i];
        ShowField(menu, i);void(0);
        this.onmouseover = this.src = picOMO[i];
    }
}