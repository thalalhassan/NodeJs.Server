
function valid()
{
	var name = document.forms["RegForm"]["username"]; 
    var password = document.forms["RegForm"]["pwd"];



	 if((name.value).length<4)
	
	{
		data="Username Error (length<4)";
		message(data);
		name.focus();
		return false;
	}
	if(password.value.length<8)
	{
		data="Password Error (length<8)";
		message(data);
		password.focus();
    	return false;
	}
	
	
	 
	 data="Welcome to library!";
	 message(data);

	 document.getElementById('RegForm').submit();
	 return true;
}
// alert box

function message(data) {
		alert(data)
  }




