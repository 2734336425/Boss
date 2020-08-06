
var divC=document.getElementsByClassName('divC');

var liA=document.getElementsByClassName("liA");

for (var n = 0; n < liA.length; n++) {
	(function(j){
		liA[j].onclick=function(){
			for (let i = 0; i < divC.length; i++) {
				if (i==j) {
					divC[i].style.display="inline-block";
				}
				else{
					divC[i].style.display="none";
				}
			}
			for (let k = 0; k < liA.length; k++) {
				if (k==j) {
					liA[k].style.color="#00c2b3";
					liA[k].style.fontWeight = "600";
					liA[k].style['border-bottom']="3px solid #00c2b3 ";
					color: ;
				}
				else{
					liA[k].style.color="grey";
					liA[k].style.fontWeight = "400";
					liA[k].style['border-bottom']="none";
				}
			}
		}
	})(n);
}