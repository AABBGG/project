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

var tabimgleft = $(".tab-img-left"),
		sum = 1,
		tabimglength = tabimgleft.find(".products").width();		
	function tradeimg(){
		if(sum < 1){
			sum = 3;
		} else if(sum > 3){
			sum = 1;
		}
		$("#J-lbcp").html(sum);
		var products = $(".tab-img-left .products").hide().eq(sum-1).show(),
			ta = products.find("textarea");			
		if(ta.length){
			products.html(ta.val());
		}
	}				
	$(" .trade").click(function(){
		sum++;
		tradeimg();
	});
	
	
	var tabimgbox = $(".tab-banner-box-img"),
		time = 1,
		tabimgboxlength = tabimgbox.find(".products-ul").width();		
	function imgchangex(){
		if(time < 1){
			time = 4;
		} else if(time > 4){
			time = 1;
		}
		$("#mathx").html(time);
		var productsul = $(".tab-banner-box-img .products-ul").hide().eq(time-1).show(),
			tass = products.find("textarea");			
		if(tass.length){
			productsul.html(tass.val());
		}
	}				
	$(" .befor").click(function(){
		time--;
		imgchangex();
	});
	$(" .after").click(function(){
		time++;
		imgchangex();
	});
//*********图片的tab-banner切换

}