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
$(".up").click(function(){
	$(this).toggleClass(function(){
		if($(this).hasClass("up")){
		  $(this).removeClass("up");
		  $(".sss").html("展开");
		  $(".waibao").css("height","57px");
		  return "down";
		}else{
			$(this).removeClass("down");
			 $(".sss").html("收起");
			  $(".waibao").css("height","134px");
			return "up";
		}
	})
})
