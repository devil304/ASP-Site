var notlock = true;
var loginhide = 0;
		
function slideoff(){
	if(window.innerWidth>768){
		hideform();
	}
	$("#nav-menu").slideUp("fast");
	$('.collapse').collapse("hide");
	return 9;
}
function slideon(){
	$("#nav-menu").slideDown("fast", function(){
		if(window.innerWidth>768){
			$("#login-register").animate({top: $("#nav-menu").outerHeight( true )+"px"}, {duration: 400});
		}
	});
}
	
var subform = true;
		
var menuSlideHelpVal = 9;
		
function chagetologin(){
	subform = false;
	$( "#logreg" ).html( 'Logowanie:<input type="email" name="mail" placeholder="mail" required><br><input type="password" name="pass" placeholder="password" required><br><input type="submit" name="zaloguj" id="zaloguj" value="Zaloguj"><button id="rejestr">Zarejestruj</button>' );
	$("#hide-form").css("height", "1px");
	setTimeout(function(){
		$("#hide-form").css("height", $("#login-register").height()+"px"); 
	}, 1);
	reg();
	sub();
}
		
function log(){
	$("#log").click(function(){
		chagetologin();
	});
}
		
function reg(){
	$("#rejestr").click(function(){
		subform = false;
		$( "#logreg" ).html( 'Rejestracja:<input type="text" name="name" placeholder="Name" required><br><input type="email" name="mail" placeholder="mail" required><br><input type="password" name="pass" placeholder="password" required><br><input type="password" name="passr" placeholder="password again" required><br><input type="submit" name="zaloguj" id="zaloguj" value="Zarejestruj"><button id="log">Zaloguj</button>' );
		$("#hide-form").css("height", "1px");
		setTimeout(function(){
			$("#hide-form").css("height", $("#login-register").height()+"px"); 
		}, 1);
		log();
		sub();
	});
}
		
function sub(){
	$("#zaloguj").click(function(){
		subform=true;
		$("#logreg").submit();
	});
}
		
function hideform(){
	chagetologin();
	$("#login-register").animate({right: -($("#login-register").outerWidth(true))}, {duration: 400}, function(){
		$("#login-register").css("top", 0);
	});
}
		
$(document).ready(function() {
			
	$("#login-register").mouseover(function() {
		notlock = false;
	}).mouseout(function() {
		notlock = true;
	});
			
	reg();
			
	$("#logreg").submit(function(e){
		if(!subform){
			e.preventDefault();
			subform=true;
		}
	});
			
	$("#login-register").css("top", $("#nav-menu").outerHeight( true )+"px");
			
	$("#usr").click(function(){
		if(loginhide==0){
			if(window.innerWidth>768){
				$("#login-register").css("top", $("#nav-menu").outerHeight( true )+"px");
			}else{
				if($(window).scrollTop()>0){
					$("#login-register").css("top", 0);
				}else{
					$("#login-register").css("top", $("#nav-menu").outerHeight( true )+"px");
				}
			}
			$("#login-register").stop( true, true ).animate({right: 0}, {duration: 400});
			loginhide=1;
		}else{
			if(window.innerWidth>768){
				menuSlideHelpVal = 9;
			}
			hideform();
			loginhide=0;
		}
	});
			
	$("#hide-form").click(function(){
		if(window.innerWidth>768){
			menuSlideHelpVal = 9;
		}
		hideform();
		loginhide=0;
	});
	
	var sliderstatus=1;
				
	if($(window).scrollTop()>0){
		sliderstatus=0;
		menuSlideHelpVal=slideoff();
	}
	
	$(".navbar-toggler").click(function(){
		if(menuSlideHelpVal==9){
			menuSlideHelpVal=3;
		}else{
			menuSlideHelpVal=9;
		}
	});
	
	$(window).on('resize', function(){
		
		if($(window).scrollTop()<=0){
			sliderstatus=1;
			menuSlideHelpVal=slideon();
		}
					
		if(window.innerWidth>992){
			if(menuSlideHelpVal==3){
				menuSlideHelpVal=slideoff();
			}
		}
		if(sliderstatus==1 && (window.innerWidth>768 || $("#login-register").css("top") != 0)){
			$("#login-register").stop(true, true).animate({top: $("#nav-menu").outerHeight( true )+"px"}, {duration: 400});
		}
		if($("#login-register").css("right")!=0){
			hideform();
		}
		
		$("#hide-form").css("height", $("#login-register").height()+"px");
		
	});
	
	$(window).scroll(function(event){
		if($(window).scrollTop()>0){
			if(window.innerWidth<=768){
				if(loginhide==1){
					$("#login-register").animate({top: 0}, {duration: 400});
				}else{
					$("#login-register").css("top", 0);
				}
			}
			sliderstatus=0;
			menuSlideHelpVal=slideoff();
		}else{
			slideon();
			if(loginhide==1){
				$("#login-register").stop(true, true).animate({top: $("#nav-menu").outerHeight( true )+"px"}, {duration: 400});
			}else{
				$("#login-register").css("top", $("#nav-menu").outerHeight( true )+"px");
			}
			sliderstatus=1;
		}				
	});
	
	$( document ).on( "mousemove", function( event ) {
		if(event.pageY<(window.innerHeight/menuSlideHelpVal)+$(window).scrollTop() && sliderstatus==0){
			slideon();
			sliderstatus=1;
		}else if(event.pageY>(window.innerHeight/menuSlideHelpVal)+$(window).scrollTop() && sliderstatus==1 && $(window).scrollTop()>0 && notlock){
			sliderstatus=0;
			menuSlideHelpVal=slideoff();
		}
	});
	
	$("#hide-form").css("height", $("#login-register").height()+"px"); 
	chagetologin();
	$("#login-register").animate({right: -($("#login-register").outerWidth(true))}, {duration: 0}, function(){
		$("#login-register").css("top", 0);
	});
	
});