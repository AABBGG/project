

$(function () {

    var firstMenu = $('.header .menuItem').first();
    var menubarX = firstMenu.position().left + 34;
 // active 块激活
    $('header.header menu .menubar').css({
        width: firstMenu.find('.item-title').innerWidth() + "px",
        left: menubarX + 'px'
    })
// 展开菜单
    $('.header .menuItem .item-title').mouseover(function () {
        $('header.header .menubar').animate({
            width: $(this).innerWidth() + "px",
            left: ($(this).parent().position().left + 34) + 'px'
        }, 100)
        $(this).next('.drop-down').show().animate({
            top: 60
        }, 100);
    })
// 关闭菜单	
    $('.header .menuItem').mouseleave(function () {
        $(this).find('.drop-down').hide().css({
            top: 80
        })
    })


// --------- rightMenu--------
    var show = true;
    $('.titleBox').click(function () {
        if (show) {
            $('.one').css({
                transform: 'rotate(43deg)',
                transformOrigin: '0 0',
                marginLeft: '11px',
                transition: ' transform 1s'
            })
            $('.two').css({
                transform: 'rotate(-46.5deg)',
                transformOrigin: '0 0',
                marginTop: '4px',
                transition: ' transform 1s'
            })
            show = false;
        } else {
            $('.one').css({
                transform: 'rotate(0deg)',
                marginLeft: '0',
                transition: ' transform 1s'
            })
            $('.two').css({
                transform: 'rotate(0deg)',
                marginTop: '-2px',
                transition: ' transform 1s'
            })
            show = true
        }
        $('.showTitle').toggle();
    })
//------------获取滚动条位置-----
    console.log($(this).scrollTop())
// --------- animalList--------

    if ($(this).width() <= 992 && $(this).width() >= 768) {
    // --- 768 <= width() <=992 --------
        $('.animalOne').animate({
            marginTop: -220,
            transition: 'all 1s easeOut 3s'
        }, 600)
        $('.animalTwo').animate({
            marginTop: -220,
            transition: 'all 1s easeOut 3s'
        }, 800)
        $('.animalThree').animate({
            marginTop: -220,
            transition: 'all 1s easeOut 3s'
        }, 1000)
        $('.animalFour').animate({
            marginTop: -220,
            transition: 'all 1s easeOut 3s'
        }, 1200)
    }
    if ($(this).width() < 768) {
// --- width()  <768 --------
        $('.animalOne').animate({
            marginTop: -220,
            transition: 'all 1s easeOut 3s'
        }, 600)
        $('.animalTwo').animate({
            marginTop: -220,
            transition: 'all 1s easeOut 3s'
        }, 800)

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 184) {
                console.log($(this).scrollTop())
                $('.animalThree').animate({
                    marginTop: -220,
                    transition: 'all 1s easeOut 3s'
                }, 1000)
                $('.animalFour').animate({
                    marginTop: -220,
                    transition: 'all 1s easeOut 3s'
                }, 1200)
            }
        })
    }
    if ($(this).width() > 992) {
// --- width() >992 --------
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 90) {
                $('.animalOne').animate({
                    marginTop: -220,
                    transition: 'all 1s easeOut 3s'
                }, 600)
                $('.animalTwo').animate({
                    marginTop: -220,
                    transition: 'all 1s easeOut 3s'
                }, 800)
                $('.animalThree').animate({
                    marginTop: -220,
                    transition: 'all 1s easeOut 3s'
                }, 1000)
                $('.animalFour').animate({
                    marginTop: -220,
                    transition: 'all 1s easeOut 3s'
                }, 1200)
            }
        })
    }

//----------are----- 
//------width()> 414
    if ($(this).width() > 414) {
        $(window).scroll(function () {
            console.log($(this).scrollTop())
            if ($(this).scrollTop() >= 430) {
                $('.weAre').animate({
                    marginTop: '-50%',
                    transition: 'all 1s easeOut 3s'
                }, 1000)
                $('.inforAboutUs').animate({
                    bottom: '320',
                    transition: 'all 1s easeOut 3s'
                }, 1000)
                $('.inforTwo').animate({
                    bottom: '260',
                    transition: 'all 1s easeOut 3s'
                }, 1200)
                $('.inforThree').animate({
                    bottom: '180',
                    transition: 'all 1s easeOut 3s'
                }, 1400)
            }
            if ($(this).scrollTop() >= 626) {
                $('.inforBtn').animate({
                    bottom: '80px',
                    transition: 'all 6s easeOut 6s'
                }, 1500)
            }
        })
    }

    if ($(this).width() <= 414) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 490) {
                $('.inforAboutUs').animate({
                    bottom: '180',
                    transition: 'all 1s easeOut 3s'
                }, 1000)
            }
            if ($(this).scrollTop() >= 680) {
                $('.inforTwo').animate({
                    bottom: '200',
                    transition: 'all 1s easeOut 3s'
                }, 1200)
            }
            if ($(this).scrollTop() >= 780) {
                $('.inforThree').animate({
                    bottom: '130',
                    transition: 'all 1s easeOut 3s'
                }, 1200)
            }
            if ($(this).scrollTop() >= 945) {
                $('.inforBtn').animate({
                    bottom: '80',
                    transition: 'all 1s easeOut 3s'
                }, 1200)
            }
        })
    }
//------width() >768
    if ($(this).width() > 768) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 670) {
                $('.newCase').animate({
                    marginTop: '-180',
                    transition: 'all 1s easeOut 3s'
                }, 1000)
            }
            if ($(this).scrollTop() >= 670) {
                $('.newList').animate({
                    marginTop: '-150',
                    transition: 'all 1s easeOut 3s'
                }, 1300)
            }
        })
    }


    if ($(this).width() <= 768) {
        $(window).scroll(function () {
            console.log($(this).scrollTop())
            if ($(this).scrollTop() >= 670) {
                $('.newCase').animate({
                    marginTop: '-180',
                    transition: 'all 1s easeOut 3s'
                }, 1000)
            }
            if ($(this).scrollTop() >= 1050) {
                $('.newList').animate({
                    marginTop: '-150',
                    transition: 'all 1s easeOut 3s'
                }, 1300)
            }
        })
    }

    $('.twoImgList').hover(function () {
        $('.imgHidden', this).stop().animate({
            height: '240px'
        });
    }, function () {
        $('.imgHidden', this).stop().animate({
            height: '0'
        });
    });

//-----------imgNewsList----
//-------width() <=992
    if ($(this).width() <= 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1410) {
                console.log($(this).scrollTop())
                $('.sileOneImg').animate({
                    marginTop: '-280',
                    transition: 'all 1s easeOut 3s'
                }, 1000)
            }
            if ($(this).scrollTop() >= 1700) {
                console.log($(this).scrollTop())
                $('.sileTwoImg').animate({
                    marginTop: '-280',
                    transition: 'all 1s easeOut 3s'
                }, 1100)
            }
            if ($(this).scrollTop() >= 2160) {
                console.log($(this).scrollTop())
                $('.sileThreeImg').animate({
                    marginTop: '-280',
                    transition: 'all 1s easeOut 3s'
                }, 1200)
            }
            if ($(this).scrollTop() >= 2440) {
                console.log($(this).scrollTop())
                $('.sileFourImg').animate({
                    marginTop: '-280',
                    transition: 'all 1s easeOut 3s'
                }, 1250)
            }
            if ($(this).scrollTop() >= 2800) {
                console.log($(this).scrollTop())
                $('.sileFiveImg').animate({
                    marginTop: '-200',
                    transition: 'all 1s easeOut 3s'
                }, 1300)
            }
            if ($(this).scrollTop() >= 3058) {
                console.log($(this).scrollTop())
                $('.sileSixImg').animate({
                    marginTop: '-200',
                    transition: 'all 1s easeOut 3s'
                }, 1350)
            }
            if ($(this).scrollTop() >= 3360) {
                $('.bottomBtn').animate({
                    marginTop: '-70',
                    transition: 'all 1s easeOut 3s'
                }, 1500)
            }
        })
    }

//-------width() >992
    if ($(this).width() > 992) {
        $(window).scroll(function () {
            console.log($(this).scrollTop())
            if ($(this).scrollTop() >= 940) {
                $('.sileOneImg').animate({
                    marginTop: '-280',
                    transition: 'all 1s easeOut 3s'
                }, 700)
                $('.sileTwoImg').animate({
                    marginTop: '-280',
                    transition: 'all 1s easeOut 3s'
                }, 1000)
                $('.sileThreeImg').animate({
                    marginTop: '-280',
                    transition: 'all 1s easeOut 3s'
                }, 1300)
            }

            if ($(this).scrollTop() >= 1300) {
                $('.sileFourImg').animate({
                    marginTop: '-200',
                    transition: 'all 1s easeOut 3s'
                }, 900)
                $('.sileFiveImg').animate({
                    marginTop: '-200',
                    transition: 'all 1s easeOut 3s'
                }, 1400)
                $('.sileSixImg').animate({
                    marginTop: '-200',
                    transition: 'all 1s easeOut 3s'
                }, 1700)
            }
            if ($(this).scrollTop() >= 1550) {
                $('.bottomBtn').animate({
                    marginTop: '-70',
                    transition: 'all 1s easeOut 3s'
                }, 1200)
            }
        })
    }

//---------threeCade-----
//-----width() >= 1200
    if ($(this).width() >= 1200) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1800) {
                $('.cadeOne').animate({
                    marginTop: -100
                }, 900).show()
                $('.cadeTwo').animate({
                    marginTop: -100
                }, 1100).show()
                $('.cadeThree').animate({
                    marginTop: -100
                }, 1200).show()
                $('.bttn').animate({
                    marginTop: -70
                }, 1000).show()
            }
        });
    }
//-------768<width()< 1200-----
    if ($(this).width() < 1200 && $(this).width() > 768) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 2000) {
                $('.bttn').animate({
                    marginTop: -70
                }, 1000).show()
            }
            if ($(this).scrollTop() >= 2100) {
                $('.cadeOne').animate({
                    marginTop: -100
                }, 900).show()
                $('.cadeTwo').animate({
                    marginTop: -100
                }, 1100).show()
                $('.cadeThree').animate({
                    marginTop: -100
                }, 1200).show()

            }
        });
    }

//------width()<=768
    if ($(this).width() <= 768) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 3515) {
                $('.bttn').animate({
                    marginTop: -70
                }, 1000).show()
            }
            if ($(this).scrollTop() >= 3635) {
                $('.cadeOne').animate({
                    marginTop: -100
                }, 900).show()

            }
            if ($(this).scrollTop() >= 3780) {
                $('.cadeTwo').animate({
                    marginTop: -100
                }, 1100).show()

            }
            if ($(this).scrollTop() >= 3635) {
                $('.cadeThree').animate({
                    marginTop: -100
                }, 1200).show()

            }
        });
    }
//			以上是判断									
    var index = 0;
    $(' .list').eq(index).show()
    function ani() {
        $(' .list')
            .eq(index)
            .show()
            .siblings()
            .hide()
        $(' .list').css({
            top: 150
        }).stop().animate({
            top: 0,
        })
    }
    $(' .btn-list span').mouseover(function () {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')

        index = $(this).index();
        $(' .btn')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active')
        ani()
    })
    $(' .btn').mouseover(function () {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')

        index = $(this).index();

        $(' .btn-list span')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active')
        ani()
    })


//--------footerBottom----
    if ($(this).width() > 768) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 2280) {
                $('.leftInfor').animate({
                    marginTop: -310
                }, 1000).show()
                $('.oneRight').animate({
                    marginTop: -310
                }, 1000).show()
                $('.twoRight').animate({
                    marginTop: -310
                }, 1200).show()
                $('.threeRight').animate({
                    marginTop: -310
                }, 1300).show()
                $('.bottomContact').animate({
                    marginTop: -100
                }, 1300).show()
            }
        });

    }

    if ($(this).width() <= 414) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 4050) {
                $('.leftInfor').animate({
                    marginTop: -310
                }, 1000).show()
                $('.oneRight').animate({
                    marginTop: -310
                }, 1000).show()
                $('.twoRight').animate({
                    marginTop: -310
                }, 1200).show()
                $('.threeRight').animate({
                    marginTop: -310
                }, 1300).show()
                $('.bottomContact').animate({
                    marginTop: -100
                }, 1300).show()
            }
        });

    }


    if ($(this).width() >= 414 && $(this).width() <= 768) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 3830) {
                $('.leftInfor').animate({
                    marginTop: -310
                }, 1000).show()
                $('.oneRight').animate({
                    marginTop: -310
                }, 1000).show()
                $('.twoRight').animate({
                    marginTop: -310
                }, 1200).show()
                $('.threeRight').animate({
                    marginTop: -310
                }, 1300).show()
                $('.bottomContact').animate({
                    marginTop: -100
                }, 1300).show()
            }
        });

    }
})













