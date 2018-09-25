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
	
		var $imgCt = $(".img-ct"),
					$preBtn = $(".btn-pre"),
					$nextBtn = $(".btn-next"),
					$bullet = $(".bullet");
				var $firstImg = $imgCt.find("li").first(),//获取第一张图片
					$lastImg = $imgCt.find("li").last();  //获取第二张图片
				var curPageIndex = 0;
				var imgLength = $imgCt.children().length;	//图片的个数
				var isAnimate = false;
				$imgCt.prepend($lastImg.clone())	//把最后一张图片克隆，在第一张前插入
				$imgCt.append($firstImg.clone())	//把第一张图片克隆，在最后一张后插入
				$imgCt.width($firstImg.width() * $imgCt.children().length)  //第一张图片的宽度去乘以  图片的个数，为总宽度
				$preBtn.on("click",function(){
					playPre();
				})
				$nextBtn.on("click",function(){
					 playNext();
				})
				function playNext(){
					isAnimate = true;		
					$imgCt.animate({
						left:"-=800"
					},function(){
						curPageIndex++;
						if(curPageIndex === imgLength){
							$imgCt.css({"left": "-800px"})
							curPageIndex = 0
						}
						isAnimate = false; 
						setBullet();
					})
				}
				function playPre(){
					isAnimate = true;
					$imgCt.animate({
						left:"+=800"
					},function(){
						curPageIndex--;
						if(curPageIndex<0){
							$imgCt.css("left",-(imgLength*$firstImg.width()));
							   curPageIndex = imgLength -1
						}
						isAnimate=false;
						setBullet()
					})
				}
				function setBullet(){
					 $bullet.find('li').removeClass('active') 
						   			  .eq(curPageIndex).addClass('active')		   
				}				
				setInterval(playNext,3000) //自动轮播
				
			$('.bullet-ct .bullet li').click(function(){
				var n=$(this).index()
				var	o=$(this).parent().find('.active').index()
				console.log("当前元素的index值:"+n);
				console.log("之前元素的index值:"+o);				
				if(n>o){
					for(var i=0;i<n-o;i++){
						playNext()
					}					
				}
				if(n<o){
					for(var i=0;i<o-n;i++){
						playPre()
					}
					
				}
			})
//*********轮播图banner****************
			$(".tab-menu li").mouseover(function(){
		        var _index = $(this).index();
		        $(".tab-box>div").eq(_index).show().siblings().hide();
		    $(this).addClass("change").siblings().removeClass("change");
		    });
//***********家用电器中间的部分************
			$(".tab-menu-two li").mouseover(function(){
				var _index = $(this).index();
				$(".tab-box-two>div").eq(_index).show().siblings().hide();
			 $(this).addClass("change").siblings().removeClass("change");
			});
//***********电脑办公中间的部分************
	
	
}
