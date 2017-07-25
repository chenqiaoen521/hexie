// JavaScript Document
/*页面顶部下拉菜单效果*/

$(function(){
	/*鼠标指向父级*/

	$(".navbox .nav li").hover(function(){
		/*子级显示*/
		$(this).children(".dropnav").slideDown(200);
		
	},function(){
		$(this).children(".dropnav").stop().slideUp(200);
		
			 })
			
	});
	
/*左边悬浮广告*/
		$(document).scroll(function(){
			
				var x = document.getElementById('main').offsetTop;
				var y =  $(document).scrollTop();

				var a = x-y;
				if(x-y <= 50){

					$(".adbox").addClass("ontop");

					}
				else{
					$(".adbox").removeClass("ontop");
					}
				
			
			});
			
/*页面滚动到达一定高度出现*/
/* $(function(){
var win=$(window);
var sc=$(document);
win.scroll(function(){
  if(sc.scrollTop()>=50){
	$(".quick").show(); 
  }else{
	$(".quick").hide();
  };
  if(sc.scrollTop()>=200){
	$(".gotop").slideDown(100); 
  }else{
	$(".gotop").slideUp(100);
  }
}) 
 })*/

/*回到顶部*/
$(function(){ 
			$('.gotop').click(function(){
			$('html,body').animate({scrollTop: '0px'}, 200);}); 
		});

/*二维码出现*/
$(function(){

	$(".quick ul .weixin").hover(function(){
		$(this).children(".code").stop().fadeIn(200);
	},function(){
		$(this).children(".code").fadeOut(200);
		 })
			
	});
$(function(){

	$(".quick ul .shouji").hover(function(){
		$(this).children(".code1").stop().fadeIn(200);
	},function(){
		$(this).children(".code1").fadeOut(200);
		 })
			
	});
	
	
/*注册时是否阅读协议*/
$(document).ready(function () { 
$(".remember").click(function () { 
if (!$(this).hasClass("checked")) { 
$(this).addClass("checked"); 
} else { 
$(this).removeClass("checked"); 
} 
}); 
}) 

/*选择车型四个步骤*/

$(function(){
	$(".step1 ul li").click(function(){
		$(".step1").hide();
		$(".step2").show();
		$(".choosed").show();
		$(".data-index1").show();
		$(".foursteps1").css("background","url(images/car_08.png)")
		$("#cx2").removeClass("head_div3")
		$("#cx2").addClass("head_div2")
		$("#cxspan2").removeClass("round2")
		$("#cxspan2").addClass("round")
	})
	$(".step2 ul li").click(function(){
		$(".step2").hide();
		$(".step3").show();
		$(".choosed").show();
		$(".data-index1").show();
		$(".data-index2").show();
		$(".foursteps1").css("background","url(images/car_06.png)")
		$("#cx3").removeClass("head_div3")
		$("#cx3").addClass("head_div2")
		$("#cxspan3").removeClass("round2")
		$("#cxspan3").addClass("round")
	})
	$(".step3 ul li").click(function(){
		$(".step3").hide();
		$(".step4").show();
		$(".choosed").show();
		$(".data-index3").show();
		$(".foursteps1").css("background","url(images/car_03.png)")
		$("#cx4").removeClass("head_div3")
		$("#cx4").addClass("head_div2")
		$("#cxspan4").removeClass("round2")
		$("#cxspan4").addClass("round")
	})
	$(".step4 ul li").click(function(){
		$(".step4").hide();
		$(".step5").show();
		$(".choosed").hide();
	})
	$(".data-index1 .CarHistoryTitleDel").click(function(){
		$(".step2,.step3,.step4,.step5").hide();
		$(".step1").show();
		$(".choosed").hide();
		$(".data-index1,.data-index2,.data-index3,.data-index4").hide();
		$(".foursteps1").css("background","url(images/car_15.png)")
		$("#cx2,#cx3,#cx4").removeClass("head_div2")
		$("#cx2,#cx3,#cx4").addClass("head_div3")
		$("#cxspan2,#cxspan3,#cxspan4").removeClass("round")
		$("#cxspan2,#cxspan3,#cxspan4").addClass("round2")
	})
	$(".data-index2 .CarHistoryTitleDel").click(function(){
		$(".step1,.step3,.step4,.step5").hide();
		$(".step2").show();
		$(".choosed").show();
		$(".data-index1").show();
		$(".data-index2,.data-index3,.data-index4").hide();
		$(".foursteps1").css("background","url(images/car_08.png)")
		$("#cx3,#cx4").removeClass("head_div2")
		$("#cx3,#cx4").addClass("head_div3")
		$("#cxspan3,#cxspan4").removeClass("round")
		$("#cxspan3,#cxspan4").addClass("round2")
	})
	$(".data-index3 .CarHistoryTitleDel").click(function(){
		$(".step1,.step2,.step4,.step5").hide();
		$(".step3").show();
		$(".choosed").show();
		$(".data-index1,.data-index2").show();
		$(".data-index4").hide();
		$(".foursteps1").css("background","url(images/car_06.png)")
		$("#cx4").removeClass("head_div2")
		$("#cx4").addClass("head_div3")
		$("#cxspan4").removeClass("round")
		$("#cxspan4").addClass("round2")
	})
});




//首页广告banner图
function jianqu(){
	$("#topbanner1").hide();
	$("#topbanner2").show();
	$(".jianqu").hide();
};



//首页选取年月
$(function(){$("#riqi .default").click(function(){$(".boxbox").toggle();});$("#ddddd").click(function(){$(".boxbox").hide();});$(".roadyear a").click(function(){$(".roadyear a").removeClass("current");$(this).addClass("current"); });$(".roadmonth a").click(function(){$(".roadmonth a").removeClass("current"); $(this).addClass("current"); $(".boxbox").hide();});});