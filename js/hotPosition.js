
var divC=document.getElementsByClassName('divC');

var liA=document.getElementsByClassName("liA")


		for (var n = 0; n < liA.length; n++) {
			(function(j){
		
			liA[j].onclick=function(){
				for (let i = 0; i < divC.length; i++) {
					if (i==j) {
						divC[i].style.display="inline-block";
						liA[i].style.color="green";
						liA[i].style['border-bottom']="1px solid red ";
						
					}
					else{
						divC[i].style.display="none";
						liA[i].style.color="grey";
						liA[i].style['border-bottom']="none";
					}
					
				}		
			}
		})(n);
	}
