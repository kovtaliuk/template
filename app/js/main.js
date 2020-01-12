$(document).ready(function () {
	if($('select').length > 0) {
		jQuery('select').niceSelect();
	}
	$("#banner-slider").slick({
		slidesToShow:1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
	});
	$("#gallery-slider").slick({
		slidesToShow: 3,
		dots: false,
		arrows: true,
		centerMode: true,
	});
	$(".reviews-text-slider").slick({
		slidesToShow:1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
	});
	$(".reviews-screens-slider").slick({
		slidesToShow:3,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	$(".reviews-video-slider").slick({
		slidesToShow:1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
	});

	$(".form-inner-item.phone input").inputmask({"mask": "+7(999) 999-9999"});
	$(".video").fancybox().attr('data-fancybox', 'group');

	$(".form-validate").validate({
		rules:{
			name:{
				required: true,
				minlength: 4,
				maxlength: 16,
			},
			phone:{
				required: true,
				minlength: 6,
				maxlength: 16,
			},
		},
		messages:{
			name:{
				required: "Это поле обязательно для заполнения",
				minlength: "Логин должен быть минимум 4 символа",
				maxlength: "Максимальное число символов - 16",
			},
			phone:{
				required: "Это поле обязательно для заполнения",
				minlength: "Пароль должен быть минимум 6 символа",
				maxlength: "Пароль должен быть максимум 16 символов",
			},
		}
	});

	$('.form-validate').each( function(){
		var form = $(this);
		form.validate({
			rules:{
				name:{
					required: true,
					minlength: 4,
					maxlength: 16,
				},
				phone:{
					required: true,
					minlength: 6,
					maxlength: 16,
				},
			},
			messages:{
				name:{
					required: "Это поле обязательно для заполнения",
					minlength: "Логин должен быть минимум 4 символа",
					maxlength: "Максимальное число символов - 16",
				},
				phone:{
					required: "Это поле обязательно для заполнения",
					minlength: "Пароль должен быть минимум 6 символа",
					maxlength: "Пароль должен быть максимум 16 символов",
				},
			}
		});
	});

	/**************tabs**************/
	$('.tabs-nav a').on('click', function (event) {
		event.preventDefault();

		$('.tab-active').removeClass('tab-active');
		$(this).parent().addClass('tab-active');
		$('.tabs-stage-item').removeClass('show');
		$($(this).attr('href')).addClass('show')
	});
	$('.tabs-nav a:first').trigger('click'); // Default

	/**************question-tabs**************/
	$('.question-item .title').on('click', function () {
		if ($(this).parent('.question-item').hasClass('show')) {
			$(this).parent('.question-item').removeClass('show', {duration:1000});
		} else {
			$('.question-item').removeClass('show', {duration:1000});
			$(this).parent('.question-item').addClass('show', {duration:1000});
		}
	});
	$('#nav-icon').click(function(){
		$('body').toggleClass('fixed');
		$(this).toggleClass('open');
		$('header .nav-list').toggleClass('active');
	});

	/*scroll to item menu*/
	var menuHeaderLi = jQuery('.nav-list li a, .btn-mouse');
	menuHeaderLi.on('click', function(event) {
		var target = jQuery(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

	function monitorSize(){
		var windowsWidth = $(window).width();
		var btnHeader = $(' header .row.top .btn-white-header');
		var btnMenu = $('.nav-list .btn-white-header');
		var phoneMailHeader = $('.phone-mail-header');
		var languageList = $('.language-list');

		if (windowsWidth <= 767 && btnHeader.length > 0) {
			btnHeader.insertAfter('header .nav-list ul');
			phoneMailHeader.insertAfter('header .nav-list ul');
			languageList.insertAfter('header .nav-list ul');
		}
		else if (windowsWidth >= 768 && btnMenu.length > 0) {
			btnMenu.insertAfter('header .time-work');
			languageList.insertAfter('header .time-work');
			phoneMailHeader.insertAfter('header .time-work');
		}
	}
	$(document).ready(function () {
		monitorSize();
	});
	$(window).resize(function () {
		monitorSize();
	});
});
