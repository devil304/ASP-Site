function numerid(tego){
	return parseInt(($(tego).attr('id')).substr(($(tego).attr('id')).length - (($(tego).attr('id')).length-8)));
}
function hidechide(){
	$(".chide").each(function(){
		MenuManager($(this),numerid($(this)));
	});
}
function MenuManager(to, numer){
	var tmp = $(to).next(".btn-light");
	while($(tmp).attr('id')!="collapse"+numer){
		if(!$(to).hasClass("chide")){
			$(tmp).slideDown("fast");
		}else{
			if($(tmp).hasClass("collapser") && !$(tmp).hasClass("chide")){
				$(tmp).toggleClass("chide");
			}
			$(tmp).slideUp("fast");
		}
		if($(tmp).next(".btn-light").length){
			tmp=$(tmp).next(".btn-light");
		}else{
			break;
		}
	}
	if(!$(to).hasClass("chide")){
		$(to).html($(to).html().replace('˅', '˄'));
	}else{
		$(to).html($(to).html().replace('˄', '˅'));
	}
}

$(document).ready(function() {

	$("#znajdz").css("height", $("#find").outerHeight(true)+"px");
	$(".wrapper").css("padding-top", $(".wrapper").width()*1.3+"px");
	
	$(window).on('resize', function(){
		
		$("#znajdz").css("height", $("#find").outerHeight(true)+"px");
		
		$(".wrapper").css("padding-top", $(".wrapper").width()*1.3+"px");
		
		if(window.innerWidth<=768){
			if(!$("#collapse0").hasClass("collapser")){
				$("#collapse0").addClass("collapser");
			}
		}else{
			if($("#collapse0").hasClass("collapser")){
				$("#collapse0").removeClass("collapser");
			}
		}
		
	});
	
	if(window.innerWidth<=768){
		$("#collapse0").addClass("chide");
	}
	
	$(".collapser").each(function(){
		$(this).click(function(){
			$(this).toggleClass("chide");
			MenuManager($(this),numerid($(this)));
			hidechide();
		});
	});
	hidechide();
	
});