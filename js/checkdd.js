// JavaScript Document
$(function(){
	$(".newadress").click(function(){
		$(this).siblings(".fillin").show();
	})
});

$(function() {
  $('label').click(function(){
    var radioId = $(this).attr(' ');
    $('label').removeAttr('class') && $(this).attr('class', 'checked');
    $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
  });
});
