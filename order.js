var retrievedArr = localStorage.getItem("cosArr");
if(retrievedArr){
	var arr3 = JSON.parse(retrievedArr);
	
	for(i=1; i<=15; i++){
		if(arr3[i] !== "emty" ){
			document.getElementById("tables-list").innerHTML += "<option value=\""+i+"\"onclick=\"tablrNum(this.value)\">table #"+i+"</option>";	
		}
	}
}

var invoice = localStorage.getItem("showDiv");
if(invoice){
	document.getElementById("show").innerHTML = invoice;
}

var e = document.getElementById("tables-list");
var value = e.options[e.selectedIndex].value;
document.getElementById("tablrNum").innerHTML = value;
//------------------------------------------------------------

function subCal(v,p,ID){
	var prise = p*parseInt(v);
	document.getElementById(ID).innerHTML = prise +" SAR";
	sum();
	addOrder(v,prise,ID);
}

function addOrder(q,p,n){
	var t = parseInt(document.getElementById("tablrNum").innerHTML);
	
	for(i=1; i<=15 ; i++){
		if(i == t){
			if(arr3[i].Order.length ==1){
				arr3[i].Order.push({dish:n , quan:q , pise:p});
				localStorage.setItem("cosArr", JSON.stringify(arr3));
				console.log(arr3[i].Order);
			}
			else{
				notName = true;
				for(j=1; j<arr3[i].Order.length ;j++){
					if(arr3[i].Order[j].dish == n){
						arr3[i].Order[j].quan = q;
						arr3[i].Order[j].pise = p;
						localStorage.setItem("cosArr", JSON.stringify(arr3));
						notName = false;
					}
				}
				if(notName){
					arr3[i].Order.push({dish:n , quan:q , pise:p});
					localStorage.setItem("cosArr", JSON.stringify(arr3));
				}
			}
		}
	}
}

function sum() {
	let rows = document.querySelectorAll(".cal");
	let sum = 0 , tax = 0 , tot = 0;
	for (let i=0; i < rows.length; i++) {
		x = parseInt(rows[i].innerHTML);
		
		if(x !== 0){
			sum += x;
			tax = sum*0.15;
			tot = sum + tax;
		}
	}
	document.getElementById("subFinal").innerHTML = sum +" SAR";
	document.getElementById("tax").innerHTML = tax +" SAR";
	document.getElementById("total").innerHTML = tot +" SAR";
}



function Tnum(){
	var e = document.getElementById("tables-list");
	var value = e.options[e.selectedIndex].value;
	document.getElementById("tablrNum").innerHTML = value;
}

function order(){
	var value = document.getElementById("tablrNum").innerHTML;
	if(value == "-"){
		alert("Please choose a table");
	}
	else{
		for(i=1; i<=15; i++){
			if(i == value){
				if(arr3[i].Order.length == 1){
					alert("you didn't order anything !!");
				}
				else{
					ok = confirm("Sure that you don't want to add something else?");
					if(ok){
						orderT = "orderT" + value;						
						if(!document.getElementById(orderT)){
							document.getElementById("show").innerHTML += "<div style=\"border: 1px solid gray; margin: 2px 2px;\" id=\"DivOrderT" + value + "\"><table style=\"border: 1px black;\" id=\"orderT" + value + "\"> <tr><td colspan=\"2\" style=\"font-size: 16px; text-align: center;\" >" + arr3[i].Order[0] + "</td><td><button class=\"button printbtn\" type=\"button\" style=\"padding: 10px 21px; font-size: 13px; \" onclick=\" printIncoice(\'DivOrderT" + value + "\' ," + value + ")\">Print</button></td></tr> <tr><td>name</td><td>quantity</td><td>prise</td></tr>  </table><hr><h3 id=\"Divtot"+value+"\">Total: 0 SAR</h3></div>";
						}
						for(j=1; j<arr3[i].Order.length ;j++){
							document.getElementById(orderT).innerHTML += "<tr><td>" + arr3[i].Order[j].dish +"</td> <td>" + arr3[i].Order[j].quan +"</td> <td>" + arr3[i].Order[j].pise +"</td> </tr>";
						}
						divTotID = "Divtot"+value;
						if(document.getElementById(divTotID).innerHTML == "Total: 0 SAR"){
							document.getElementById(divTotID).innerHTML = document.getElementById("total").innerHTML;
						}
						else{
							x = parseInt(document.getElementById(divTotID).innerHTML);
							y = parseInt(document.getElementById("total").innerHTML);
							z = x+y ;
							document.getElementById(divTotID).innerHTML = "Total: " + z + " SAR";
						}
						
						localStorage.setItem("showDiv", document.getElementById("show").innerHTML);
						location.reload();
					}
				}
			}
		}
	}
}

function printIncoice(tid , t){
	var divContents = document.getElementById(tid).innerHTML;
	var a = window.open('', '', 'height=1000, width=1000');
	a.document.write('<html>');
	a.document.write('<body > <h1> THANK YOU !! <br>');
	a.document.write(divContents);
	a.document.write('</body></html>');
	a.document.close();
	a.print();
	
	document.getElementById(tid).remove();
	arr3[t] = "emty";
	localStorage.setItem("showDiv", document.getElementById("show").innerHTML);
	localStorage.setItem("cosArr", JSON.stringify(arr3));
	location.reload();
}

function sortTable() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("table");
	switching = true;
	
	while (switching) {
		switching = false;
		rows = table.rows;
		
		for (i = 2; i < 19; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[1];
			y = rows[i + 1].getElementsByTagName("TD")[1];
			
			if (Number(x.innerHTML) > Number(y.innerHTML)){
				shouldSwitch = true;
				break;
			}
		}
		
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTable_UP() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("table");
	switching = true;
	
	while (switching) {
		switching = false;
		rows = table.rows;
		
		for (i = 2; i < 19; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[1];
			y = rows[i + 1].getElementsByTagName("TD")[1];
			
			if (Number(x.innerHTML) < Number(y.innerHTML)){
				shouldSwitch = true;
				break;
			}
		}
		
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableDS() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("table");
	switching = true;
	
	while (switching) {
		switching = false;
		rows = table.rows;
		
		for (i = 22 ; i < 26; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[1];
			y = rows[i + 1].getElementsByTagName("TD")[1];
			
			if (Number(x.innerHTML) > Number(y.innerHTML)){
				shouldSwitch = true;
				break;
			}
		}
		
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableDS_UP() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("table");
	switching = true;
	
	while (switching) {
		switching = false;
		rows = table.rows;
		
		for (i = 22 ; i < 26; i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[1];
			y = rows[i + 1].getElementsByTagName("TD")[1];
			
			if (Number(x.innerHTML) < Number(y.innerHTML)){
				shouldSwitch = true;
				break;
			}
		}
		
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableD() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("table");
	switching = true;
	
	while (switching) {
		switching = false;
		rows = table.rows;
		
		for (i = 29; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[1];
			y = rows[i + 1].getElementsByTagName("TD")[1];
			
			if (Number(x.innerHTML) > Number(y.innerHTML)){
				shouldSwitch = true;
				break;
			}
		}
		
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortTableD_UP() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("table");
	switching = true;
	
	while (switching) {
		switching = false;
		rows = table.rows;
		
		for (i = 29; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[1];
			y = rows[i + 1].getElementsByTagName("TD")[1];
			
			if (Number(x.innerHTML) < Number(y.innerHTML)){
				shouldSwitch = true;
				break;
			}
		}
		
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}