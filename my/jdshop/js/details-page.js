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

var arrimg    = ['url(img/goods.png)','url(img/goods30.jpg)','url(img/goods2.jpg)','url(img/goods30.jpg)','url(img/goods2.jpg)']			
			$('.hd img').mouseover(function(){
				var i=$(this).index()
				 $('.bd').css('background', arrimg[i])	//中图随着小图的变换而变换
				 $(this).css('border','2px solid #ff0000').siblings().css('border','2px solid transparent')
			})	

				var lis=$('.img-infor .iphone-color ul li')
//***********手机图片展示-左边的
			var i=0;
			function changeimg(){
				for(var x=0; x<lis.length;x++){
					lis[x].className="";
				}
				lis[i].className="active";
			}
			function goto(index){
				i=index;
				changeimg()
			}
			
			var jian=document.getElementById("jian")
			var jia=document.getElementById("jia")
			var texts=document.getElementById("text")	
			jian.onclick=function(){			
				if(texts.value>-0){
					texts.value--;
				}
			}
			jia.onclick=function(){
				texts.value++;
			}


		var tabimgleft = $(".tab-img-left"),
		sum = 1,
		tabimglength = tabimgleft.find(".products").width();		
	function tradeimg(){
		if(sum < 1){
			sum = 2;
		} else if(sum > 2){
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

//********手机tab图片的切换-右边的
	
		 $(".tab-menu li").mouseover(function(){
        var _index = $(this).index();
        $(".tab-box>div").eq(_index).show().siblings().hide();
	    $(this).addClass("change").siblings().removeClass("change");
	    });



}