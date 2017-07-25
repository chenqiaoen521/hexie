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
	$("#xiangmu1 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian1").removeClass("add");
	})
	$("#xiangmu2 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian2").removeClass("add");
	})
	$("#xiangmu3 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian3").removeClass("add");
	})
})
$(function(){
	$("#tuijian1").click(function(){
		$("#xiangmu1").show();
		$("#tuijian1").addClass("add");
	})
	$("#tuijian2").click(function(){
		$("#xiangmu2").show();
		$("#tuijian2").addClass("add");
	})
	$("#tuijian3").click(function(){
		$("#xiangmu3").show();
		$("#tuijian3").addClass("add");
	})
	$("#tuijian4").click(function(){
		$("#xiangmu4").show();
		$("#tuijian4").addClass("add");
	})
	$("#tuijian5").click(function(){
		$("#xiangmu5").show();
		$("#tuijian5").addClass("add");
	})
	$("#tuijian6").click(function(){
		$("#xiangmu6").show();
		$("#tuijian6").addClass("add");
	})
	$("#tuijian7").click(function(){
		$("#xiangmu7").show();
		$("#tuijian7").addClass("add");
	})
	$("#tuijian8").click(function(){
		$("#xiangmu8").show();
		$("#tuijian8").addClass("add");
	})
	$("#tuijian9").click(function(){
		$("#xiangmu9").show();
		$("#tuijian9").addClass("add");
	})
	$("#tuijian10").click(function(){
		$("#xiangmu10").show();
		$("#tuijian10").addClass("add");
	})
	$("#tuijian11").click(function(){
		$("#xiangmu11").show();
		$("#tuijian11").addClass("add");
	})
	$("#tuijian12").click(function(){
		$("#xiangmu12").show();
		$("#tuijian12").addClass("add");
	})
	$("#tuijian13").click(function(){
		$("#xiangmu13").show();
		$("#tuijian13").addClass("add");
	})
	$("#tuijian14").click(function(){
		$("#xiangmu14").show();
		$("#tuijian14").addClass("add");
	})
})

$(function(){
	$("#xiangmu1 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian1").removeClass("add");
	})
	$("#xiangmu2 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian2").removeClass("add");
	})
	$("#xiangmu3 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian3").removeClass("add");
	})
	$("#xiangmu4 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian4").removeClass("add");
	})
	$("#xiangmu5 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian5").removeClass("add");
	})
	$("#xiangmu6 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian6").removeClass("add");
	})
	$("#xiangmu7 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian7").removeClass("add");
	})
	$("#xiangmu8 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian8").removeClass("add");
	})
	$("#xiangmu9 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian9").removeClass("add");
	})
	$("#xiangmu10 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian10").removeClass("add");
	})
	$("#xiangmu11 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian11").removeClass("add");
	})
	$("#xiangmu12 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian12").removeClass("add");
	})
	$("#xiangmu13 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian13").removeClass("add");
	})
	$("#xiangmu14 .onex .delete").click(function(){
		$(this).parent(".onex").parent(".xiangmu").hide();
		$("#tuijian14").removeClass("add");
	})
})

$(function(){
	$(".guige").hover(function(){
		$(this).children("a").addClass("on");
	},function(){
		$(this).children("a").removeClass("on");
	});
	$(".box").hover(function(){
		$(this).children(".delete").show();
	},function(){
		$(this).children(".delete").hide();
	});
	$(".shouce .sctit").click(function(){
		$(this).siblings(".scimg").toggle();
	});
	$(".guige a").click(function(){
		$(".guige a").removeClass("on");
		$(this).addClass("on");
		$(".shouce").hide();
		$(".cpxq").show();
	});
	$(".close").click(function(){
		$(".cpxq").hide();
		$(".shouce").show();
	})
})