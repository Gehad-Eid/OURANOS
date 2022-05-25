var starRate = localStorage.getItem("rate");
if(starRate){
	var rateArr = JSON.parse(starRate);
	
	for(i=1; i < rateArr.length; i++){
		if(rateArr[i]){
			ida = "staffAVG" + i;
			document.getElementById(ida).innerHTML = rateArr[i].arr[0].toFixed(2) + "/5"; 
		}
	}
}
else{
	rateArr =[];
	rateArr[0] = "no employee 0";
}


/* 
	function starOver(ID,sNum){
	
	starID = "#"+ID+"s"+sNum;
	switch(sNum){
	case 1:
	$(starID).css("color","khaki");
	break;
	
	case 2:
	starID = "#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	case 3:
	starID = "#"+ID+"s"+(sNum-2) + "#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	case 4:
	starID = "#"+ID+"s"+(sNum-3) + "#"+ID+"s"+(sNum-2) + "#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	case 5:
	starID = "#"+ID+"s"+(sNum-4) + "#"+ID+"s"+(sNum-3) + "#"+ID+"s"+(sNum-2) + "#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	default:
	alert("seems like thers somthing wrong!");
	}
	$(starID).css("color","khaki");				
	
	}
	
	
	function starOut(ID,sNum){
	
	starID = "#"+ID+"s"+sNum;
	switch(sNum){
	case 1:
	$(starID).css("color","khaki");
	break;
	
	case 2:
	starID = "#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	case 3:
	starID = "#"+ID+"s"+(sNum-2) + ",#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	case 4:
	starID = "#"+ID+"s"+(sNum-3) + ",#"+ID+"s"+(sNum-2) + ",#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	case 5:
	starID = "#"+ID+"s"+(sNum-4) + ",#"+ID+"s"+(sNum-3) + ",#"+ID+"s"+(sNum-2) + ",#"+ID+"s"+(sNum-1) + ",#"+ID+"s"+sNum;
	break;
	
	default:
	alert("seems like thers somthing wrong!");
	}
	$(starID).css("color","gray");				
	
} */

/* 
	$("#1s1").hover(function(){
	$("#1s1").css("color","khaki");
	});	
	
	
	$("#1s2").hover(function(){
	$("#1s1,#1s2").css("color","khaki");
	
	});
	
	$("#1s3").hover(function(){
	$("#1s1,#1s2,#1s3").css("color","khaki");				
	});
	
	$("#1s4").hover(function(){
	$("#1s1,#1s2,#1s3,#1s4").css("color","khaki"); 				
	});
	
	$("#1s5").hover(function(){
	$("#1s1,#1s2,#1s3,#1s4,#1s5").css("color","khaki"); 				
	});
}); */

function rateCal(v , indx){
	if(!rateArr[indx]){
		a = [];
		a[0] = v;
		rateArr[indx] = {arr:a};
		rateArr[indx].arr.push(v);
		localStorage.setItem("rate", JSON.stringify(rateArr));
		ida = "staffAVG" + indx;
		document.getElementById(ida).innerHTML = v + "/5";
		
		/* starID = "#"+indx+"s"+v;
		
		if(v=1){
			$(starID).css("color","khaki");
			starIDnot = "#"+indx+"s"+(v+4) + ",#"+indx+"s"+(v+3) + ",#"+indx+"s"+(v+2) + ",#"+indx+"s"+(v+1);	
		}
		
		if(v=2){
			starID = "#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
			starIDnot = "#"+indx+"s"+(v+3) + ",#"+indx+"s"+(v+2) + ",#"+indx+"s"+(v+1);
		}
		
		if(v=3){
			starID = "#"+indx+"s"+(v-2) + ",#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
			starIDnot = "#"+indx+"s"+(v+2) + ",#"+indx+"s"+(v+1);
		}
		
		if(v=4){
			starID = "#"+indx+"s"+(v-3) + ",#"+indx+"s"+(v-2) + ",#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
			starIDnot = "#"+indx+"s"+(v+1);
		}
		
		if(v=5){
			starID = "#"+indx+"s"+(v-4) + ",#"+indx+"s"+(v-3) + ",#"+indx+"s"+(v-2) + ",#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
		}
		
		
		$(starID).css("color","khaki");					
		$(starIDnot).css("color","black"); */					
	}
	else{
		rateArr[indx].arr.push(v);
		sum = 0;
		for(i=1; i<rateArr[indx].arr.length; i++){
			sum += rateArr[indx].arr[i];
		}
		
		avg = sum / (rateArr[indx].arr.length-1);
		
		ida = "staffAVG" + indx;
		document.getElementById(ida).innerHTML = avg.toFixed(2) + "/5";
		rateArr[indx].arr[0] = avg;
		localStorage.setItem("rate", JSON.stringify(rateArr));
		
		/* starID = "#"+indx+"s"+v;
		
		if(v<=1){
			$(starID).css("color","khaki");
			starIDnot = "#"+indx+"s"+(v+4) + ",#"+indx+"s"+(v+3) + ",#"+indx+"s"+(v+2) + ",#"+indx+"s"+(v+1);	
			
		}
		
		if(v>1 && v<=2){
			starID = "#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
			starIDnot = "#"+indx+"s"+(v+3) + ",#"+indx+"s"+(v+2) + ",#"+indx+"s"+(v+1);	
			
		}
		
		if(v>2 && v<=3){
			starID = "#"+indx+"s"+(v-2) + ",#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
			starIDnot = "#"+indx+"s"+(v+2) + ",#"+indx+"s"+(v+1);	
			
		}
		
		if(v>3 && v<=4){
			starID = "#"+indx+"s"+(v-3) + ",#"+indx+"s"+(v-2) + ",#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
			starIDnot = "#"+indx+"s"+(v+1);	
			
		}
		
		if(v>4 && v<=5){
			starID = "#"+indx+"s"+(v-4) + ",#"+indx+"s"+(v-3) + ",#"+indx+"s"+(v-2) + ",#"+indx+"s"+(v-1) + ",#"+indx+"s"+v;
		}
		
		
		$(starID).css("color","khaki");	
		$(starIDnot).css("color","black"); */	
	}
}									