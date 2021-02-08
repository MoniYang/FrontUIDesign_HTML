
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        // $(".GHL-Chips-box").addClass("fixed");
        $(".GHL-SlideBar").addClass("fixed");
        $(".header").addClass("fixed");
    } else {
        // $(".GHL-Chips-box").removeClass("fixed");
        $(".GHL-SlideBar").removeClass("fixed");
        $(".header").removeClass("fixed");
    }
});

$(".tab_area_btn").click(function(){
    // $(".GHL-Chips").toggleClass('close', 1000);
    $(".tab_box").toggleClass('open', 1000);
    
    // $(".GHL-SlideBar").toggleClass('slideBarHeight', 1000);
});
$(".login_s").click(function(){
    // $(".GHL-Chips").toggleClass('close', 1000);
    $(".top_menu .login_s_area").toggle();
    
    // $(".GHL-SlideBar").toggleClass('slideBarHeight', 1000);
});
$(".bonus_top").click(function(){
    // $(".GHL-Chips").toggleClass('close', 1000);
    $(".bonus_bottom").toggle();
    
    // $(".GHL-SlideBar").toggleClass('slideBarHeight', 1000);
});
	// $(".chips_icon").click(function(){
    //     $(".GHL-Chips").css('display','block');
    //     $(".chips_icon").css('display','none');
    //     // $(".GHL-SlideBar").toggleClass('slideBarHeight', 1000);
	// });

	$(".close_btn").click(function(){
        $(".GHL-Chips").css('display','none');
        $(".chips_icon").css('display','block');
        // $(".GHL-SlideBar").toggleClass('slideBarHeight', 1000);
	});

    $(".show_input").hide();
    $(".edit_btn").click(function(){
        $(".show_text").hide();
        $(".show_input").show();
        // $(".GHL-SlideBar").toggleClass('slideBarHeight', 1000);
    });
    $(".input_btn").click(function(){
        $(".show_text").show();
        $(".show_input").hide();
        // $(".GHL-SlideBar").toggleClass('slideBarHeight', 1000);
    });
    $(".bet_item ul li").click(function(){
        $(this).addClass("active");
        $('.chips_money_box').addClass("active");
       

    });
    $('.close_btn').on("click", function(){
        
          
            $('.chips_money_box.active').removeClass('active');
        });

// Time
// var SetMinute = 0;
// function Check_Time() {
//     SetMinute += 1;
//     var Check_i = document.getElementById("Check_i");

//     var Cal_Hour = Math.floor(SetMinute / 3600);
//     var Cal_Minute = Math.floor(Math.floor(SetMinute % 3600) / 60);
//     var Cal_Second = SetMinute % 60;

//     Check_i.innerHTML =  Cal_Minute + "分" + Cal_Second + "秒";

// }
// var mm = window.setInterval("Check_Time()", 1000);


// 

// if  {
/*评论模块的滚动隐藏效果*/
/*
var windowTop=0;//初始话可视区域距离页面顶端的距离
$(window).scroll(function() {
    var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
    if(scrolls<windowTop){//当scrolls>windowTop时，表示页面在向下滑动
        alert(1);
            $('.chips_box').addClass('no_height');
        }
        windowTop=scrolls;
    }
   
);
*/

var lastMove = 0;



if (matchMedia('only screen and (min-width: 1024px)').matches) {

    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        var href = $.attr(this, 'href');
        var p = $(href);
        var offset = p.offset();
        var top = lastMove + offset.top - 110;
         $('html, body').animate({ scrollTop: top}, 500, 'linear');
         lastMove = top;
      });
    
    // smartphone/iphone... maybe run some small-screen related dom scripting?
}

if (matchMedia('only screen and (max-width: 991px)').matches) {

    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        var href = $.attr(this, 'href');
        var p = $(href);
        var offset = p.offset();
        var top = lastMove + offset.top - 62;
         $('html, body').animate({ scrollTop: top}, 500, 'linear');
         lastMove = top;
      });
    
    // smartphone/iphone... maybe run some small-screen related dom scripting?
}



  /*
$('.chips_box').addClass('no_height');
$(".GHL-SlideBar li a").click(function(){
    $('.chips_box').removeClass('no_height');
  });
  */