
function validate(){
	
	return new Promise(function(resolve,conflict){
		var userName="demo@experionglobal.com";
		var password="exp@123";
		if(userName=="demo@experionglobal.com"&&password=="exp@123"){
			resolve();
		}
		else{
			conflict();
		}
	})

}

validate()
	.then(function(){
		
		var xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange=function(){
			console.log(this.readyState+this.status);
			if (this.readyState==4 && this.status==200){
				console.log("res");
				var response=this.responseText;
				console.log(response);
				response=JSON.parse(response);
			}

		};
		
  		
		xhttp.open("GET","https://exptest.herokuapp.com/api/imageGallery", true);
		xhttp.send();
		
	})
	.catch(function(){
		alert("invalid credentials");
	});
	



