jQuery(document).ready(function($) {
	// Mobile menu
	$('#mobile-menu').mmenu({"position":"right"});

	//Random color
	var colors = ["cyan", "orange", "purple"];
	var rand = Math.floor(Math.random()*(3)+0);
	$('body').addClass(colors[rand]);

	// Load animation
	$('.header').delay(300).animate({ opacity:1 },500);
	$('.header-page').delay(300).animate({ opacity:1, top:0 },700,function(){
		$('.header-page').css({
			'-webkit-transition-property':'right, width, height',
			'-webkit-transition-duration':'0.4s',
			'-moz-transition-property':'right, width, height',
			'-moz-transition-duration':'0.4s',
			'transition-property':'right, width, height',
			'transition-duration':'0.4s',
		});
	});
	$('.jumbotron.content').delay(300).animate({ opacity:1, top:600 },700,function(){
		$('.footer').fadeIn(500);
	});

	// Active links
	if( $('.home').length <= 0 ){
		var url = document.URL;
		var _array = url.split('/');
		var active = _array[_array.length-2];
		$('.header-primary ul li.'+active+'').addClass('active');
	}

	// Parallax effect
	function parallax(div){
		var scrollTop = $(window).scrollTop();
		div.css('background-position', 'center '+ (scrollTop*-0.25) + 'px');
	}

	if ($('.parallax').length){
		if( $('.single-portfolio').length <= 0 ){
			$(window).scroll(function(){
				if( $(window).width() > 960 ){
					parallax($('.parallax'));
				}
			});
		}
	}

	// Featured image hide on scroll
	$(window).scroll(function(e) {
		if ( $(window).width() > 480 ) {
			var target = $('.header-page').height()+50;
			var windowTop = $(document).scrollTop();

			if( windowTop >= target ){
				$('.header-page').css('display','none');
			}else{
				$('.header-page').css('display','block');
			}
		}
	});

	// Menu hover
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
		$('.header-primary ul li a span').css('top','0');
	}
	$('.header-primary ul li').hover(function(){
		$(this).children('a').css('color','rgba(0,0,0,0.01)');
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
			$(this).children('a').children('span').stop().animate({ top:-12 },200);
		}else{
			$(this).children('a').children('span').stop().animate({ top:-10 },200);
		}
	},function(){
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
			$(this).children('a').children('span').stop().animate({ top:0 },200);
		}else{
			$(this).children('a').children('span').stop().animate({ top:2 },200);
		}
	});

	/*if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)*/

	// Menu links
	$('.header-primary ul li').click(function(e){
		e.preventDefault();
		var link = $(this).children('a').attr('href');
		window.location.href = link;
	});

	// Homepage fullscreen
	if ($('.fullscreen').length){
		function resizeFullscreen(){
			var footerHeight = $('.footer').height();
			var targetHeight = $(window).height() - footerHeight;
			$('.fullscreen').height(targetHeight);
			$('.nav-box').height(targetHeight/2);
		}
		resizeFullscreen();
	}

	$(window).resize(function(){
		if ($('.fullscreen').length){
			resizeFullscreen();
		}
	});

	// Homepage titles
	if( $('.nav-box').length ){
		function navBox(){
			var hauteurTotal = $('.nav-box').height();
			var hauteurBox = $('.nav-box h2').height();
			var margin = (hauteurTotal-hauteurBox)/2;
			$('.nav-box h2').css('padding-top',margin);
		}
		navBox();

		$(window).resize(function(){
			if ($('.nav-box').length){
				navBox();
			}
		});
	}

	// Portfolio Center
	if ($('#container').length){
		function resizePortfolio(){
			var height = $('.mix').width();
			$('.mix').height(height);
		}
		resizePortfolio();
	}

	$(window).resize(function(){
		if ($('#container').length){
			resizePortfolio();
		}
	});

	// Portfolio titles
	if( $('.mix .directional-slide-hover').length ){
		function portfolioTitles(){
			$('.mix').each(function(){
				var hauteurTotal = $(this).height();
				var hauteurBox = $(this).children('.directional-slide-hover').children('h2').actual('height');
				var margin = (hauteurTotal-hauteurBox)/2;
				$(this).children('.directional-slide-hover').children('h2').css('margin-top',margin);
			});
		}
		portfolioTitles();
	}

	$(window).resize(function(){
		if ($('.mix').length){
			portfolioTitles();
		}
	});

	function borderHeight(){
		if( $(window).width() >= 780 ){
			var maxHeight = -1;
			$('.vc_span4.padding').each(function() {
				if ($(this).children('.wpb_wrapper').height()+15 > maxHeight)
					maxHeight = $(this).children('.wpb_wrapper').height()+15;
			});
			$('.border').each(function() {
				if($('.page-template-tpl-contact-php').length){
					$(this).height(maxHeight-90);
				}else{
					$(this).height(maxHeight);
				}
			});
		}else{
			$('.border').css('height','initial');
		}
	}
	borderHeight();

	$(window).resize(function(){
		if ($('.padding.border').length){
			borderHeight();
		}
	});

	// Homepage title fade in/out
	$(window).scroll(function() {
		if( $(window).width() > 960 ){
			$(".wrap-vertical header h1").css({
				'opacity' : 1-(($(this).scrollTop())/320)
			});
		}
	});

	// Scroll top
	$(window).scroll(function(e) {
		var windowTop = $(document).scrollTop();

		if( windowTop >= 200 ){
			$('.scrolltop').css('right','20px');
		}else{
			$('.scrolltop').css('right','-45px');
		}
	});

	$('.scrolltop').hover(function(){
		$(this).stop().animate({ opacity:0.5 },300);
	},function(){
		$(this).stop().animate({ opacity:1 },300);
	});

	// Blog featured image
	if( $('.archive .featured').length ){
		$('.featured').each(function(){
			var hauteur = $(this).parent().height();
			$(this).css('height',hauteur);
		});
	}

	if ( $('#container').length ) { $('#container').mixitup({'filter':'.show'}); }


	// Directional hover
	$("#boxes > div")
	.each(function(){})
	.directionalSlide({
		animateSpeed:300
	});

	$("#container > div")
	.each(function(){})
	.directionalSlide({
		animateSpeed:300
	});

	if( $('.background-img').length ){
		function bgImage(){
			var hauteur = $('.background-img').parent().height();
			$('.background-img').height(hauteur);
		}
		bgImage();
	}

	$('.content .vc-item .vc-inner a').click(function(e){
		e.preventDefault();
	});

	// Portfolio limit
	if( $('.post-type-archive-portfolio').length ){
		var max = 9999,
			limit = max-1,
			height = $('.portofolio-item:visible').height();

		if( $('.portofolio-item').length <= max ){
			$('.portfolio-view-more').hide();
		}

		$('.portofolio-item:hidden').css('cssText','height: '+height+'px !important;');
		$('.portofolio-item:gt('+limit+')').css('cssText','display: none !important;');
		$('.portofolio-item:gt('+limit+')').removeClass('mix');

		$('.portfolio-view-more').click(function(e){
			e.preventDefault();
			var jump = $('.portofolio-item:visible').last().attr('data-num');
			var limit = parseInt(jump)+12;
			$('.portofolio-item:lt('+limit+'):hidden').addClass('mix').css('height',height).fadeIn(500);
			if( $('.portofolio-item:hidden').length <= 0 ){
				$(this).fadeOut();
			}
		});
	}

	// Testimonials
	if( $('ul.testimonials').length ){
		$('ul.testimonials li').not(':first').hide();
		loop();
	}
	function loop(){
		setTimeout(function() {
			$('ul.testimonials li:first-child').appendTo('ul.testimonials').animate({ opacity:0, left:-100 },500,function(){
				$(this).css({ 'left':'0', 'opacity':'1' }).hide();
				$('ul.testimonials li:first-child').fadeIn(1000).animate({ opacity:1 },1500,function(){
					loop();
				});
			});
		},9000);
	}
});
















