
	function conversion()
	{
		var t;var a;var res;
		t=document.querySelector("select[name='Temp']").value;
		a=document.getElementById("val").value;
		if(a!=''){
		if(t=="Farenheit")
		{	
			a=parseFloat(a);
			res=(a-32)/1.8;
			document.getElementById("res").value=res+"\u2103";
		}
		 else if(t=="Celsius")
		{	
			a=parseFloat(a);
			res=(a*1.8)+32;
			document.getElementById("res").value=res+"\u2109";
		}}
		else{
			document.getElementById("res").value="Input the temperature";
		}


	}