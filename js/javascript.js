async function randomuser(){
	const response = await fetch('https://randomuser.me/api/');
	const data = await response.json();
	const user = data.results[0];
	console.log(data)
	displayuser(user);
}
console.log("sdad");

randomuser();
function displayuser(data){
	document.getElementById("name").addEventListener('click', function(){	
		document.getElementById('perfil').innerHTML= "Hi my name is "+ data.name.first + " "+ data.name.last;
	})
	document.getElementById('email').addEventListener('click', function(){	
		document.getElementById('perfil').innerHTML= data.email;
	})
	document.getElementById('telefono').addEventListener('click', function(){	
		document.getElementById('perfil').innerHTML= data.cell;
	})
	document.getElementById('avatar').setAttribute('src', data.picture.large);
	document.getElementById('ciudad').addEventListener('click', function(){
		document.getElementById('perfil').innerHTML = data.location.city + ", " + data.location.country;
	})
	document.getElementById('emailfot').innerHTML = data.email;
}






