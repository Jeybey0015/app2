
function logIn() {
    var name = document.forms["form1"]["username"].value;
    
    if (name == "") {
        alert("Please Enter Your Name.");
        return false;
    }
    else
    {
    	localStorage.setItem("name",name);
    	document.forms["form1"]["username"].value="";
       	location.href = 'Greeting.html';
    }
}

function cont() {
	location.href='content.html';
}

document.getElementById('name').innerHTML = localStorage.getItem('name');