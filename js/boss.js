$(".next").on("click",function(){
	console.log("123");
	$(this).hide();
	$(".prev").show();
	$(".slider-city ul").css("transform","translateX(-796px)");
})
$(".prev").on("click",function(){
	console.log("123");
	$(this).hide();
	$(".next").show();
	$(".slider-city ul").css("transform","translateX(0px)");
})
