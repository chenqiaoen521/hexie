// JavaScript Document

$(function(){
	$(".jisuan .jia").click(function(){
		var n=$(".num").val();
		n++;
		$(".num").val(n);
	})
	$(".jisuan .jian").click(function(){
		var n=$(".num").val();
			if(n<2){
				n==1;
			}else{
				n--;
			$(".num").val(n);
			}
	})
})


$(function(){
	$(".huo_06 span").click(function(){
		$(this).parent(".huo_06").parent(".goodslist").hide()
	})
})

$(function(){
	$(".all span").click(function(){
		$(".goodslist").hide()
	})
})