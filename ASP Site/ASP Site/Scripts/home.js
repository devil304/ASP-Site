function scrollThere(targetElement, speed) {
	if(window.innerWidth>992){
		$('html, body').stop().animate(
			{ scrollTop: targetElement.offset().top },
			speed,
			'swing'
		);
	}
}

function scrollProcessing(scrollDirection){
	var tsy = $('#a-wrapper').offset().top,
		tr1y = $('#reklama1').offset().top,
		tr2y = $('#reklama2').offset().top,
		lastScrollTop = $(window).scrollTop(),
		targetUp,
		targetDown,
		targetElement;
		
	if (lastScrollTop === tsy) {
		targetUp = $('#a-wrapper');
		targetDown = $('#reklama1');
	} else if (lastScrollTop === tr1y) {
		targetUp = $('#a-wrapper');
		targetDown = $('#reklama2');
	} else if (lastScrollTop === tr2y) {
		targetUp = $('#reklama1');
		targetDown = $('#reklama2');
	} else if (lastScrollTop < tr1y) {
		targetUp = $('#a-wrapper');
		targetDown = $('#reklama1');
	} else if (lastScrollTop < tr2y) {
		targetUp = $('#reklama1');
		targetDown = $('#reklama2');
	} else if (lastScrollTop > tr2y) {
		targetUp = $('#reklama2');
		targetDown = $('#reklama2');
	}

	if (scrollDirection == 0) {
		targetElement = targetDown;
	} else if (scrollDirection == 1) {
		targetElement = targetUp;
	}
	
	scrollThere(targetElement, 400);
}

$(document).ready(function() {
	
	$(".carousel-inner > .active > .d-block").css("left", ($(".carousel-inner > .active > .d-block").parent().width() - $(".carousel-inner > .active > .d-block").width()) / 2);
	
	$("#slider-wlasciwy").on('slide.bs.carousel', function () {
		$(".carousel-inner > .active").next().find(".d-block").css("left", ($(".carousel-inner > .active > .d-block").parent().width() - $(".carousel-inner > .active > .d-block").width()) / 2);
		$(".carousel-inner > .active").prev().find(".d-block").css("left", ($(".carousel-inner > .active > .d-block").parent().width() - $(".carousel-inner > .active > .d-block").width()) / 2);
	});
	
	if(window.innerWidth<=992){
		if($(document).height() - ((($(window).scrollTop()+$(window).height()))-$(document).height())<= window.innerHeight+(window.innerHeight/10)) {
			$("#stopka-kontakt").slideDown("fast");
		}else{
			$("#stopka-kontakt").slideUp("fast");
		}
	}else{
		if($(window).scrollTop()+$(window).height()/35>=$('#reklama2').offset().top){
			$("#stopka-kontakt").slideDown("fast");
		}else{
			$("#stopka-kontakt").slideUp("fast");
		}
	}
	
	$("#kontakt").click(function(){
		if(window.innerWidth>992){
			scrollThere($('#reklama2'),400);
		}else{
			$('html, body').stop().animate(
				{ scrollTop: $(document).height() },
				400,
				'swing'
			);
		}
	});
	
	$("#start,#l-n").each(function(){
		$(this).attr( "href", "#" );
	});
	
	$(window).on('resize', function(){
		
		$(".carousel-inner > .active").find(".d-block").css("left", ($(".carousel-inner > .active > .d-block").parent().width() - $(".carousel-inner > .active > .d-block").width()) / 2);
	
		if(window.innerWidth>992){
			$(".carousel-inner > .active > .d-block").css("left", ($(".carousel-inner > .active > .d-block").parent().width() - $(".carousel-inner > .active > .d-block").width()) / 2);
		}
		
	});
	
	$(window).scroll(function(event){
		
		clearTimeout($.data(this, 'scrollTimer'));
		
		$.data(this, 'scrollTimer', setTimeout(function() {
			var closest=$("#a-wrapper");
			$('#a-wrapper, #reklama1, #reklama2').each(function(){
				var tmp = $(this).offset().top-$(window).scrollTop();
				if(tmp<0){
					tmp*=-1;
				}
				var tmp2 = closest.offset().top-$(window).scrollTop();
				if(tmp2<0){
					tmp2*=-1;
				}
				if(tmp<tmp2){
					closest=$(this);
				}
			});
			scrollThere(closest,400);
		}, 250));
		if(window.innerWidth<=992){
			if($(document).height() - ((($(window).scrollTop()+$(window).height()))-$(document).height())<= window.innerHeight+(window.innerHeight/10)) {
				$("#stopka-kontakt").slideDown("fast");
			}else{
				$("#stopka-kontakt").slideUp("fast");
			}
		}else{
			if($(window).scrollTop()+$(window).height()/35>=$('#reklama2').offset().top){
				$("#stopka-kontakt").slideDown("fast");
			}else{
				$("#stopka-kontakt").slideUp("fast");
			}
		}
		
	});
	
	$(window).bind('mousewheel', function (e) {
		if ( e.originalEvent.wheelDelta / 120 > 0 ) {
			scrollProcessing(1);
		} else if ( e.originalEvent.wheelDelta / 120 <= 0 ) {
			scrollProcessing(0);
		} 
		if(window.innerWidth>992){
			e.preventDefault();
		}
	});
	
	$("#start,#l-n").each(function(){
		$(this).click(function(){
			$('html, body').stop().animate(
				{ scrollTop: 0 },
				400,
				'swing'
			);
		});
	});
	
});