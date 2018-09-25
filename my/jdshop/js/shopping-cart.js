window.onload=function(){
 		$('.web-nav').mouseover(
function(){
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
//		function SelectAll() {
//		 var checkboxs=document.getElementsByName("choose");
//		 for (var i=0;i<checkboxs.length;i++) {
//		  var e=checkboxs[i];
//		  e.checked=!e.checked;
//		 }
//		}
//*********按钮的全选与反选***********
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
//******select-goods 中的选数量的多少***
		var jian1=document.getElementById("jian-1")
		var jia1=document.getElementById("jia-1")
		var texts1=document.getElementById("text-1")	
		jian1.onclick=function(){			
			if(texts1.value>-0){
				texts1.value--;
			}
		}
		jia1.onclick=function(){
			texts1.value++;
		}
//******select-goods 中的选数量的多少***
		var jian2=document.getElementById("jian-2")
		var jia2=document.getElementById("jia-2")
		var texts2=document.getElementById("text-2")	
		jian2.onclick=function(){			
			if(texts2.value>-0){
				texts2.value--;
			}
		}
		jia2.onclick=function(){
			texts2.value++;
		}
//******select-goods 中的选数量的多少***//*******商品信息******
		var tabimg = $(".tab-banner-box-img"),
		title = 1,
		lbp_w = tabimg.find(".products").width();		
	function showLimitBuyProducts(){
		if(title < 1){
			title = 4;
		} else if(title > 4){
			title = 1;
		}
		$("#J-lbcp").html(title);
		var products = $(".tab-banner-box-img .products").hide().eq(title-1).show(),
			ta = products.find("textarea");			
		if(ta.length){
			products.html(ta.val());
		}
	}				
	$(" .prev").click(function(){
		title--;
		showLimitBuyProducts();
	});
	$(" .next").click(function(){
		title++;
		showLimitBuyProducts();
	});
//*********图片的tab-banner切换


}