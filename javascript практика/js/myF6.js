// JavaScript Document

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

