// 页面加载完成后主函数入口
$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		loop: true,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
	})
})

// pag1动画脚本
var pag1_animate_in = function(){
	$("#pag1_img1").addClass('animated bounceInDown');
	$("#pag1_img2").delay(1000).queue(function(){$(this).addClass('animated bounceIn')});
	$("#pag1_img3").addClass('animated bounceInUp');
	$("#pag1_img4").delay(1000).queue(function(){$(this).addClass('animated rotateIn')});
	$(".arrow-up").delay(2000).queue(function(){$(this).addClass('animated fadeInUp')});
}
var pag1_animate_out = function(){
	$("#pag1_img1").addClass('animated bounceOutUp');
	$("#pag1_img2").addClass('animated bounceOut');
	$("#pag1_img3").addClass('animated bounceOutDown');
	$("#pag1_img4").addClass('animated rotateOut');
	$(".arrow-up").addClass('animated fadeOutDown');
}
var pag1_img2_opacity = function(){
	$("#pag1_img2").css({opacity:1});
}

// pag2动画脚本
var pag2_animate_in = function(){
	$("#pag2_img1").addClass('animated bounceInDown');
	$("#pag2_img3").delay(1000).queue(function(){$(this).addClass('animated bounceIn')});
	$("#pag2_img2").delay(1000).queue(function(){$(this).addClass('animated rotateIn')});
	$("#pag2_img4").addClass('animated bounceInUp');
	$(".arrow-up").delay(2000).queue(function(){$(this).addClass('animated fadeInUp')});
}

// pag3动画脚本
var pag3_animate_in = function(){
	$("#pag3_img1").addClass('animated bounceInDown');
	$("#pag3_img2").delay(1000).queue(function(){$(this).addClass('animated bounceIn')});
	$("#pag3_img3").addClass('animated bounceInUp');
	$(".arrow-up").delay(2000).queue(function(){$(this).addClass('animated fadeInUp')});
}

// pag4动画脚本
var pag4_animate_in = function(){
	$("#pag4_img1").addClass('animated bounceInDown');
	$("#pag4_img2").delay(1000).queue(function(){$(this).addClass('animated fadeInLeft')});
	$("#pag4_img3").addClass('animated bounceInUp');
	$(".arrow-up").delay(2000).queue(function(){$(this).addClass('animated fadeInUp')});
}

// pag5动画脚本
var pag5_animate_in = function(){
	$("#pag5_img1").addClass('animated bounceInDown');
	$("#pag5_img2").delay(1000).queue(function(){$(this).addClass('animated bounceIn')});
	$("#pag5_img3").addClass('animated bounceInUp');
	$("#pag5_img4").delay(1000).queue(function(){$(this).addClass('animated rotateIn')});
	$(".arrow-up").delay(2000).queue(function(){$(this).addClass('animated fadeInUp')});
}

// pag_slide动画
var pag_slide = function(url){
	window.location.hash = url;
}
