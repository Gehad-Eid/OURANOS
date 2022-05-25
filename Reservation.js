
var arr2 = JSON.parse(localStorage.getItem ("cosArr"));

if(arr2){
	for(i=1; i<16 ; i++)
	{
		if( arr2[i] !== "emty")
		{
			var imag = document.getElementById(arr2[i].table_id);
			imag.alt = arr2[i].availability;
			imag.src = arr2[i].sorc;
		}
	}
	arr = arr2;
}
else{
	var arr = Array(16).fill("emty");
	arr[0] =["no T0"];
}



var valdN = false;
var valdP = false;
var valdC = false;


function validationN(){
	check = false;
	var nameRegex = /^[a-zA-Z\-]+$/;
	var name = document.getElementById("formid").name.value;
	
	if((!isNaN(name) || !name.match(nameRegex)) && name !== ""){
		alert("Only alphabets are allowed in the name field , try again.");
		check = true;
	}
	
	if(name == ""){
		alert("The name field is a empty, please try again.");
		check = true;
	}
	
	if(!check){
		valdN = true;
	}
}

function validationP(){
	check = false;
	var phone = document.getElementById("formid").Phone.value;
	
	if((isNaN(phone) || phone.length !== 10) && phone !== ""){
		alert("The phone should be a number of 10 digits, please try again .");
		check = true;
	}
	
	if(phone == ""){
		alert("The Phone number field is a empty, please try again.");
		check = true;
	}
	
	if(!check){
		valdP = true;
	}
}

function validationC(){
	check = false;
	var numOfCus= document.getElementById("formid").numcstmr.value;
	
	if((isNaN(numOfCus) || numOfCus < 1 || numOfCus > 6) && numOfCus !== ""){
		alert("Number of customers should be a number between 1 and 6, please try again .");
		check = true;
	}
	
	if(numOfCus == ""){
		alert("The number of customers field is a empty, please try again.");
		check = true;
	}
	
	if(!check){
		valdC = true;
	}
}



function changeImage(im,numT,ID){
	y = document.getElementById("formid");
	z = document.getElementById(ID);
	
	if(valdC && valdP && valdN){
		if(z.alt == "red"){
			
			let txt="Please choose another table \n\n The information of the customer who reserved this table: \n";
			txt+= "name: "+ arr2[ID].Name +"\n";
			txt+= "phone number: " + arr2[ID].Phone +"\n";
			txt+= "Number of customers: " + arr2[ID].Number_of_customers + "\n";
			
			alert(txt);
		}
		else{
			
			if(y.numcstmr.value > numT){
				confirm("Please choose another table that have more than or equal " + y.numcstmr.value +" chair \n\nNotice that the maximum capacity for a table is 6");
			}
			else{ 
				
				switch(numT) {
					case 6:
					z.src = "tables/red6.jpg";
					z.alt = "red";
					break;
					
					case 4:
					z.src = "tables/red4.jpg";
					z.alt = "red";
					break;
					
					case 2:
					z.src = "tables/red2.jpeg";
					z.alt = "red";
					break;
					
					default:
					alert("seems like thers somthing wrong!");
				}
			}	
		}
	}
	else{
		alert("Please fill the information correctly first");
	}
}

function SubmitForm(fId){
	ok = confirm("Are you sure you want to reserve this table?");
	if(ok){
		var f = document.getElementById(fId);
		
		for(i=1; i<=15; i++){
			var ID = i.toString();
			var imag = document.getElementById(ID);
			
			if(imag.alt == "red"){
				
				if(arr[i] == "emty" ){
					a = [];
					str = "Table "+i;
					a[0] = str;
					arr[i]={Name:f.name.value , Phone:f.Phone.value , Number_of_customers:f.numcstmr.value , table_id:ID , availability: imag.alt , sorc:imag.src ,Order:a} 
					localStorage.setItem("cosArr", JSON.stringify(arr));
				}
			}
		}
	}
}
