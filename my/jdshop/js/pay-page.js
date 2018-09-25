window.onload=function(){
			$('.web-nav').mouseover(function(){
		$('.drop-nav').show()
	}).mouseleave(function(){
		$('.drop-nav').hide()
	})
//**************导航的下拉***********
	$(".nav-menu li").mouseenter(function(){
				$(".slider").animate({
					left:$(this).offset().left-340			
				},100)
				$(".slider").css({		
					width:$(this).width()
				})	

			})
			
			$(".nav-menu").mouseleave(function(){
				$(".slider").css({
					width:'50'
				})
				$(".slider").animate({
					left:"18"
				},200)
			})
//*********	nav 导航 以上一样*****************	
}