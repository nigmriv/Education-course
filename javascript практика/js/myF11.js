// JavaScript Document

//функция номер один. расчет времени движения

function r()
{
  var b=3000;
  var a=document.forma.speed.value;
  var s=b/a;
  document.forma.res.value=s;
  if(s<=25)
  {
	  alert( "слишком быстро" );
	  }
 if(s>50)
  {
	  alert( "слишком медленно" );
	  }
	}

//функция номер два. вывод чисел больше 1000 до 5000.

function number(){
document.write('кубы чисел от 1 до 100 меньше 5000 и больше 1000');
for(n=1; n<=100; n++)
{
	s=Math.pow(n,3);
	if (s < 5000 && s > 1000)
	document.write('<br>'+n+'<sup>3</sup>='+s); 
}
}
