/*
Author       : Dreamguys
Template Name: Dreams EMR - Bootstrap Template
Version      : 1.0
*/

(function($) {
	"use strict";
	
	// Variables declarations
	var $wrapper = $('.main-wrapper');
	var $slimScrolls = $('.slimscroll');
	var $pageWrapper = $('.page-wrapper');

	//feather.replace();

	// Page Content Height Resize
	$(window).resize(function () {
		if ($('.page-wrapper').length > 0) {
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});

	// Loader
	setTimeout(function () {
		$("#global-loader").fadeOut("slow");
	}, 100);

	if (localStorage.theme) document.documentElement.setAttribute("data-layout-mode", localStorage.theme);

	// Mobile menu sidebar overlay
	$('body').append('<div class="sidebar-overlay"></div>');

	$(document).on('click', '#mobile_btn', function() {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		$('#task_window').removeClass('opened');
		return false;
	});

	$(".sidebar-overlay").on("click", function () {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$wrapper.removeClass('slide-nav');
		$('.sidebar-overlay').removeClass('opened');
		$('#task_window').removeClass('opened');
	});

	// Logo Hide Btn

	$(document).on("click",".hideset",function () {
		$(this).parent().parent().parent().hide();
	});

	$(document).on("click",".delete-set",function () {
		$(this).parent().parent().hide();
	});

	// Stick Sidebar

	if ($(window).width() > 1199) {
		if ($('.theiaStickySidebar').length > 0) {
			$('.theiaStickySidebar').theiaStickySidebar({
				// Settings
				additionalMarginTop: 30
			});
		}
	}

	$('.notes-tog').on('click', function () {
		$('.section-bulk-widget').toggleClass('section-notes-dashboard');
	});
	$('.notes-tog').on('click', function () {
		$('.budget-role-notes').toggleClass('budgeted-role-notes');
		
	});
	$('.notes-tog').on('click', function () {
		$('.notes-page-wrapper').toggleClass('notes-tag-left');
	});


	//Notes Slider
	if ($('.notes-slider').length > 0) {
		$('.notes-slider').owlCarousel({
			loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navContainer: '.slide-nav5',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1300: {
					items: 3
				}
			}
		})
	}

	// image file upload image
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
	
			reader.onload = function (e) {
				$('#blah').attr('src', e.target.result);
			}
	
			reader.readAsDataURL(input.files[0]);
		}
	}

	
	// Datetimepicker
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
	
	// toggle-password
	if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
			$(this).toggleClass("fa-eye fa-eye-slash");
			var input = $(".pass-input");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	if($('.toggle-passwords').length > 0) {
		$(document).on('click', '.toggle-passwords', function() {
			$(this).toggleClass("fa-eye fa-eye-slash");
			var input = $(".pass-inputs");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	if($('.toggle-passworda').length > 0) {
		$(document).on('click', '.toggle-passworda', function() {
			$(this).toggleClass("fa-eye fa-eye-slash");
			var input = $(".pass-inputa");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {setTimeout
				input.attr("type", "password");
			}
		});
	}


	// Coming Soon
	if($('.comming-soon-pg').length > 0) {
		// Get html elements
		let day = document.querySelector('.days');
		let hour = document.querySelector('.hours');
		let minute = document.querySelector('.minutes');
		let second = document.querySelector('.seconds');

		function setCountdown() {

		// Set countdown date
		let countdownDate = new Date('sep 30, 2024 16:00:00').getTime();

		// Update countdown every second
		let updateCount = setInterval(function(){

			// Get today's date and time
			let todayDate = new Date().getTime();

			// Get distance between now and countdown date
			let distance = countdownDate - todayDate;

			let days = Math.floor(distance / (1000 * 60 * 60 *24));

			let hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 *60));

			let minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));

			let seconds = Math.floor(distance % (1000 * 60) / 1000);

			// Display values in html elements
			day.textContent = days;
			hour.textContent = hours;
			minute.textContent = minutes;
			second.textContent = seconds;

			// if countdown expires
			if(distance < 0){
				clearInterval(updateCount);
				document.querySelector(".comming-soon-pg").innerHTML = '<h1>EXPIRED</h1>'
			}
		}, 1000)
		}

		setCountdown()
	}

	// Select 2
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}

	// Top Scroll 
	setTimeout(function () {
		$(window).scroll(function(){ 
			if ($(this).scrollTop() > 100) { 
				$('#scroll').fadeIn(); 
			} else { 
				$('#scroll').fadeOut(); 
			} 
		}); 
		$('#scroll').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	}, 1000);
	


	// Counter 
	if($('.counter').length > 0) {
		$('.counter').counterUp({
			delay: 20,
			time: 2000
		});
	}
	if($('#timer-countdown').length > 0) {
		$( '#timer-countdown' ).countdown( {
			from: 180, // 3 minutes (3*60)
			to: 0, // stop at zero
			movingUnit: 1000, // 1000 for 1 second increment/decrements
			timerEnd: undefined,
			outputPattern: '$day Day $hour : $minute : $second',
			autostart: true
		});
	}
	
	if($('#timer-countup').length > 0) {
		$( '#timer-countup' ).countdown( {
			from: 0,
			to: 180 
		});
	}
	
	if($('#timer-countinbetween').length > 0) {
		$( '#timer-countinbetween' ).countdown( {
			from: 30,
			to: 20 
		});
	}
	
	if($('#timer-countercallback').length > 0) {
		$( '#timer-countercallback' ).countdown( {
			from: 10,
			to: 0,
			timerEnd: function() {
				this.css( { 'text-decoration':'line-through' } ).animate( { 'opacity':.5 }, 500 );
			} 
		});
	}
	
	if($('#timer-outputpattern').length > 0) {
		$( '#timer-outputpattern' ).countdown( {
			outputPattern: '$day Days $hour Hour $minute Min $second Sec..',
			from: 60 * 60 * 24 * 3
		});
	}

	// Summernote

	if($('#summernote').length > 0) {
		$('#summernote').summernote({
		height: 300,                 // set editor height
		minHeight: null,             // set minimum height of editor
		maxHeight: null,             // set maximum height of editor
		focus: false                 // set focus to editable area after initializing summernote
		});
	}
	
	// Sidebar Slimscroll
	if($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}

	// Sidebar
	var Sidemenu = function() {
		this.$menuItem = $('.sidebar-menu a');
	};

	function init() {
		var $this = Sidemenu;
		$('.sidebar-menu a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(250);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('.sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}

	
	// Sidebar Initiate
	init();
	$(document).on('mouseover', function(e) {
        e.stopPropagation();
        if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
            var targ = $(e.target).closest('.sidebar, .header-left').length;
            if (targ) {
                $('body').addClass('expand-menu');
                $('.subdrop + ul').slideDown();
            } else {
                $('body').removeClass('expand-menu');
                $('.subdrop + ul').slideUp();
            }
            return false;
        }
    });

	// Table Responsive

	setTimeout(function () {
		$(document).ready(function () {
			$('.table').parent().addClass('table-responsive');
		});
	}, 1000);

	// Date Range Picker

	if($('.bookingrange').length > 0) {
		var start = moment().subtract(6, 'days');
		var end = moment();

		function booking_range(start, end) {
			$('.bookingrange span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
		}

		$('.bookingrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		}, booking_range);

		booking_range(start, end);
	}


	//toggle_btn
	$(document).on('click', '#toggle_btn', function() {
		if ($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$(this).addClass('active');
			$('.subdrop + ul');
			localStorage.setItem('screenModeNightTokenState', 'night');
			setTimeout(function() {
				$("body").removeClass("mini-sidebar");
				$(".header-left").addClass("active");
			}, 100);
		} else {
			$('body').addClass('mini-sidebar');
			$(this).removeClass('active');
			$('.subdrop + ul');
			localStorage.removeItem('screenModeNightTokenState', 'night');
			setTimeout(function() {
				$("body").addClass("mini-sidebar");
				$(".header-left").removeClass("active");
			}, 100);
		}
		return false;
	});


	if (localStorage.getItem('screenModeNightTokenState') == 'night') {
		setTimeout(function() {
			$("body").removeClass("mini-sidebar");
			$(".header-left").addClass("active");
		}, 100);
	}

	$('.search-addon span').on('click', function(){
		$('.searchinputs').removeClass('show');
	});
	$('.theme-image').on('click', function(){
		$('.theme-image').removeClass('active');
		$(this).addClass('active');
	});

	if($('.custom-file-container').length > 0) {
		//First upload
		var firstUpload = new FileUploadWithPreview('myFirstImage')
		//Second upload
		var secondUpload = new FileUploadWithPreview('mySecondImage')
	}

	// Popover

	if($('.popover-list').length > 0) {
		var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
		})
	}

	var selectAllItems = "#select-all";
	var checkboxItem = "td :checkbox";
	$(selectAllItems).on('click', function() {
		
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}
		
	});

	var selectAllItems = "#select-all2";
	var checkboxItem = "td :checkbox";
	$(selectAllItems).on('click', function() {
		
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}
	});

	var selectAllItems = "#select-all3";
	var checkboxItem = "td :checkbox";
	$(selectAllItems).on('click', function() {
		
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}
	});

	var selectAllItems = "#select-all4";
	var checkboxItem = "td :checkbox";
	$(selectAllItems).on('click', function() {
		
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}
	});

	var selectAllItems = "#select-all5";
	var checkboxItem = "td :checkbox";
	$(selectAllItems).on('click', function() {
		
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}
	});
		
	// Tooltip

	if($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}

	$('ul.tabs li').on('click', function(){
		var $this = $(this);
		var $theTab = $(this).attr('id');
		console.log($theTab);
		if($this.hasClass('active')){
		  // do nothing
		} else{
		  $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
		  $('.tabs_container .tab_content[data-tab="'+$theTab+'"], ul.tabs li[id="'+$theTab+'"]').addClass('active');
		}
		
	});	

	// Date Range Picker

	if ($('input[name="datetimes"]').length > 0) {
		$('input[name="datetimes"]').daterangepicker({
		timePicker: true,
		startDate: moment().startOf('hour'),
		endDate: moment().startOf('hour').add(32, 'hour'),
		locale: {
		format: 'M/DD hh:mm A'
		}
	});
	}

	//Top Online Contacts

	if($('.top-online-contacts .swiper-container').length > 0 ){
		var swiper = new Swiper('.top-online-contacts .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 15,
			breakpoints: {
				1399: {
					slidesPerView: 4,
					spaceBetween: 30
				}
				// Add more breakpoints as needed
			}
		});
	}

	// Chat Actions

	$(".close_profile").on('click', function () {
		if ( $(window).width() > 991 && $(window).width() < 1201) {
			$(".chat").css('margin-left', 0);
		}
		if ($(window).width() < 992) {
			$('.chat').removeClass('hide-chatbar');
		}
	});

	if($('.emoj-action').length > 0) {
		$(".emoj-action").on('click', function () {
			$('.emoj-group-list').toggle();
		});
	}

	if($('.emoj-action-foot').length > 0) {
		$(".emoj-action-foot").on('click', function () {
			$('.emoj-group-list-foot').toggle();
		});
	}

	if($('.custom-input').length > 0) {
		const inputRange = document.querySelector('.custom-input');
		inputRange.addEventListener('input', function () {
			const progress = (inputRange.value - inputRange.min) / (inputRange.max - inputRange.min) * 100;
			inputRange.style.background = `linear-gradient(to top, var(--md-sys-color-on-surface-variant) 0%, var(--md-sys-color-on-surface-variant) ${progress}%, var(--md-sys-color-surface-variant) ${progress}%, var(--md-sys-color-surface-variant) 100%)`;
		});
	}

	// Mute Video
		
	if($('.mute-video').length > 0) {
		$(".mute-video").on('click', function(){
			if($(this).hasClass("stop")) {
				$(this).removeClass("stop");
				$(".mute-video i").removeClass("bx-video-off");
				$(".mute-video i").addClass("bx-video");
				$(".join-call .join-video").removeClass("video-hide");
				$(".video-avatar").removeClass("active");
				$(this).attr("data-bs-original-title","Stop Camera");
				$(".meeting .join-video.user-active").removeClass("video-hide");
				
				$(".join-video.user-active .more-icon").removeClass("vid-view");				
				$(".action-info.vid-view li .mute-vid i").removeClass("feather-video-off");
				$(".action-info.vid-view li .mute-vid i").addClass("feather-video");
			}
			else{
				$(this).addClass("stop");
				$(".mute-video i").removeClass("bx-video");
				$(".mute-video i").addClass("bx-video-off");
				$(".join-call .join-video").addClass("video-hide");
				$(".video-avatar").addClass("active");
				$(this).attr("data-bs-original-title","Start Camera");
				$(".meeting .join-video.user-active").addClass("video-hide");
				
				$(".add-list .user-active .action-info").addClass("vid-view");
				$(".action-info.vid-view li .mute-vid i").removeClass("feather-video");
				$(".action-info.vid-view li .mute-vid i").addClass("feather-video-off");
			}
		});
	}

	// Mute Audio

	if($('.mute-bt').length > 0) {
		$(".mute-bt").on('click', function(){
			if($(this).hasClass("stop")) {
				$(this).removeClass("stop");
				$(".mute-bt i").removeClass("ti-microphone-off");
				$(".mute-bt i").addClass("ti-microphone");
				$(this).attr("data-bs-original-title","Mute Audio");
				$(".join-video.user-active .more-icon").removeClass("mic-view");
				
				$(".action-info.vid-view li .mute-mic i").removeClass("feather-mic-off");
				$(".action-info.vid-view li .mute-mic i").addClass("feather-mic");
			}
			else{
				$(this).addClass("stop");
				$(".mute-bt i").removeClass("ti-microphone");
				$(".mute-bt i").addClass("ti-microphone-off");
				$(this).attr("data-bs-original-title","Unmute Audio");				
				$(".join-video.user-active .more-icon").addClass("mic-view");
				
				$(".add-list .user-active .action-info").addClass("vid-view");
				$(".action-info.vid-view li .mute-mic i").removeClass("feather-mic");
				$(".action-info.vid-view li .mute-mic i").addClass("feather-mic-off");
			}
		});
	}

	// Mute User Audio

	if($('.other-mic-off').length > 0) {
		$(".other-mic-off i").on('click', function(){
			if($(this).parent().hasClass("stop")) {
				$(this).parent().removeClass("stop");
				$(this).removeClass("bx-microphone-off");
				$(this).addClass("bx-microphone");
			}
			else{
				$(this).parent().addClass("stop");
				$(this).removeClass("bx-microphone");
				$(this).addClass("bx-microphone-off");
			}
		});
	}

	// Mute User Video
		
	if($('.other-video-off').length > 0) {
		$(".other-video-off i").on('click', function(){
			if($(this).parent().hasClass("stop")) {
				$(this).parent().removeClass("stop");
				$(this).removeClass("bx-video-off");
				$(this).addClass("bx-video");
			}
			else{
				$(this).parent().addClass("stop");
				$(this).removeClass("bx-video");
				$(this).addClass("bx-video-off");
			}
		});
	}

	// Video Slider

	if($('.video-slide').length > 0) {      
		$('.video-slide').owlCarousel({
			items: 4,
			loop:true,
			margin:24,
			nav:true,
			dots: false,
			autoplay:true,
			smartSpeed: 1000,
			navText: ['<i class="fa fa-angle-left" data-bs-toggle="tooltip" title="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" data-bs-toggle="tooltip" title="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:3
				},
				991:{
					items:3
				},
				1200:{
					items:4
				},
				1401:{
					items:4
				}
			}
		})
	}

	//Chat Resize

	$(".close_profile").on("click", function () {
		$('.right-user-side').removeClass('open-message');
		$('.chat-center-blk .card-comman').addClass('chat-center-space');
	});

	//Call Resize
	$(".close_profile").on("click", function () {
		$('.right-user-side').removeClass('open-message');
		$('.video-screen-inner').removeClass('video-space');
		$('.right-side-party').removeClass('open-message');
		$('.meeting-list').removeClass('add-meeting');
		$('#chat-room').removeClass('open-chats');
		$('.meeting-list').removeClass('add-meeting');
		$('.call-user-side').addClass('add-setting');
	});
	$("#add-partispant").on("click", function () {
		$('.right-side-party').addClass('open-message');
		$('#chat-room').removeClass('open-chats');
		$('.meeting-list').addClass('add-meeting');
	});
	$("#show-message").on("click", function () {
		$('#chat-room').addClass('open-chats');
		$('.right-side-party').removeClass('open-message');
		$('.meeting-list').addClass('add-meeting');
	});

	//Chat Search Visible

	$('.close-btn-chat').on('click', function () {
		$('.chat-search').removeClass('visible-chat');
	});
	$(".chat-search .form-control").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".chat .chat-body .messages .chats").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	function toggleFullscreen(elem) {
		elem = elem || document.documentElement;
		if (!document.fullscreenElement && !document.mozFullScreenElement &&
		!document.webkitFullscreenElement && !document.msFullscreenElement) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
		} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
		}
	}

	// Custom Country Code Selector

	if ($('#phone').length > 0) {
		var input = document.querySelector("#phone");
		window.intlTelInput(input, {
			utilsScript: "assets/plugins/intltelinput/js/utils.js",
		});
	}

	// Custom Country Code Selector

	if ($('#phone2').length > 0) {
		var input = document.querySelector("#phone2");
		window.intlTelInput(input, {
			utilsScript: "assets/plugins/intltelinput/js/utils.js",
		});
	}

	// Datetimepicker time

	if ($('.timepicker').length > 0) {
		$('.timepicker').datetimepicker({
			format: 'HH:mm A',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	// Collapse Header
	if($('#btnFullscreen').length > 0) {
		document.getElementById('btnFullscreen').addEventListener('click', function() {
			toggleFullscreen();
		});
	}

	//Lab Result Slider

	if ($('.lab-result-slider').length > 0) {
		$('.lab-result-slider').owlCarousel({
			loop: true,
			margin: 24,
			dots: false,
			items: 3,
			nav: true,
			navContainer: '.slide-nav2',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				700: {
					items: 2
				},
				1400: {
					items: 3
				}
			}
		})
	}

	// Visit History Slider

	if ($('.visit-history-slider').length > 0) {
		$('.visit-history-slider').owlCarousel({
			loop: true,
			margin: 24,
			dots: false,
			items: 3,
			nav: true,
			navContainer: '.slide-nav3',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				700: {
					items: 2
				},
				1400: {
					items: 2
				}
			}
		})
	}

	// Medical History Slider

	if ($('.medical-history-slider').length > 0) {
		$('.medical-history-slider').owlCarousel({
			loop: true,
			margin: 12,
			dots: false,
			items: 3.5,
			nav: true,
			navContainer: '.slide-nav4',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				700: {
					items: 2
				},
				1400: {
					items: 3
				}
			}
		})
	}

	// Increment Decrement

	$(".inc").on('click', function() {
	    updateValue(this, 1);
	});
	$(".dec").on('click', function() {
	    updateValue(this, -1);
	});
	function updateValue(obj, delta) {
	    var item = $(obj).parent().find("input");
	    var newValue = parseInt(item.val(), 10) + delta;
	    item.val(Math.max(newValue, 0));
	}	
	if ($('#upload-file').length > 0) {
		setTimeout(function(){$('#upload-file').modal('hide')},4000);
	}
	if ($('#upload-folder').length > 0) {
		setTimeout(function(){$('#upload-folder').modal('hide')},4000);
		$(".upload-modal").on("hidden.bs.modal", function () {
			$(".upload-message").modal('show');
			setTimeout(function(){$('.upload-message').modal('hide')},3000);
		});
	}

	
	// card with fullscreen 

	let DIV_CARD = ".card";
	let cardFullscreenBtn = document.querySelectorAll(
		'[data-bs-toggle="card-fullscreen"]'
	);
	cardFullscreenBtn.forEach((ele) => {
		ele.addEventListener("click", function (e) {
		  let $this = this;
		  let card = $this.closest(DIV_CARD);
		  card.classList.toggle("card-fullscreen");
		  card.classList.remove("card-collapsed");
		  e.preventDefault();
		  return false;
		});
	});
  	let DIV_CARD_CLOSE = ".card";
	let cardRemoveBtn = document.querySelectorAll(
			'[data-bs-toggle="card-remove"]'
	);
	cardRemoveBtn.forEach((ele) => {
		ele.addEventListener("click", function (e) {
			e.preventDefault();
			let $this = this;
			let card = $this.closest(DIV_CARD_CLOSE);
			card.remove();
			return false;
		});
	});
	$(".user-list-item:not(body.status-page .user-list-item, body.voice-call-page .user-list-item)").on('click', function () {
		if ($(window).width() < 992) {
			$('.left-sidebar').addClass('hide-left-sidebar');
			$('.chat').addClass('show-chatbar');
		}
	});	
	$(".left_sides").on('click', function () {
		if ($(window).width() <= 991) {
			$('.sidebar-group').removeClass('hide-left-sidebar');
			$('.sidebar-menu').removeClass('d-none');
		}
	});
	$(".left_sides").on('click', function () {
		if ($(window).width() <= 991) {
			$('.chat-messages').removeClass('show-chatbar');
		}
	});
	$(".user-list li a").on('click', function () {
		if ($(window).width() <= 767) {
			$('.left-sidebar').addClass('hide-left-sidebar');
				$('.sidebar-menu').addClass('d-none');
		}
	});

	//Advance Tabs

	$(".next").on('click', function () {
		const nextTabLinkEl = $(".nav-tabs .active")
			.closest("li")
			.next("li")
			.find("a")[0];
		const nextTab = new bootstrap.Tab(nextTabLinkEl);
		nextTab.show();
	});

	$(".previous").on('click', function () {
		const prevTabLinkEl = $(".nav-tabs .active")
			.closest("li")
			.prev("li")
			.find("a")[0];
		const prevTab = new bootstrap.Tab(prevTabLinkEl);
		prevTab.show();
	});

	// Datatable
	if($('.datatable').length > 0) {
		$('.datatable').DataTable({
			"bFilter": true, 
			"ordering": true,
			"info": false,
			"language": {
				search: ' ',
				sLengthMenu: 'Row Per Page _MENU_ Entries',
				searchPlaceholder: "Search",
				info: "_START_ - _END_ of _TOTAL_ items",
				paginate: {
					next: '<i class="ti ti-chevron-right text-dark fs-18"></i>',
					previous: '<i class="ti ti-chevron-left text-dark fs-18"></i>'
				},
			 }
		});
	}

	// Availability Slider
	
	if ($('.availability-slider').length > 0) {
		$('.availability-slider').owlCarousel({
			loop: true,
			margin: 15,
			dots: false,
			nav: false,
			smartSpeed: 2000,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				1200: {
					items: 4
				},
				1400: {
					items: 2
				},
				1600: {
					items: 3
				}
			}
		})
	}

	// Prescriptions Slider

	if ($('.prescribe-slider').length > 0) {
		$('.prescribe-slider').owlCarousel({
			loop: true,
			margin: 15,
			dots: false,
			nav: false,
			smartSpeed: 2000,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1200: {
					items: 2
				},
				1300: {
					items: 2
				}
			}
		})
	}

	// Schedule Slider

	if ($('.schedule-slider').length > 0) {
		$('.schedule-slider').owlCarousel({
			loop: true,
			margin: 15,
			dots: false,
			nav: false,
			smartSpeed: 2000,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 3
				},
				768: {
					items: 5
				},
				1200: {
					items: 5
				},
				1300: {
					items: 5
				}
			}
		})
	}

	// Sidebar popup overlay
	
	if($('.add-popup').length > 0) {
		$(".add-popup").on("click", function () {
			$('.toggle-popup').addClass('sidebar-popup');
			$('.sidebar-overlay').addClass('open');
			$('body').addClass('canvas');
		});
		$(".sidebar-close").on("click", function () {
			$('.toggle-popup').removeClass('sidebar-popup');
			$('.sidebar-overlay').removeClass('open');
			$('body').removeClass('canvas');
			$('body').addClass('overflow-x-hidden');
		});
		$('.sidebar-overlay').on('click', function () {
			$('.toggle-popup').removeClass('sidebar-popup');
			$('.sidebar-overlay').removeClass('open');
			$('body').removeClass('canvas');
		});
	}
	
	if($('.add-popup1').length > 0) {
		$(".add-popup1").on("click", function () {
			$('.toggle-popup1').addClass('sidebar-popup');
			$('.sidebar-overlay').addClass('open');
			$('body').addClass('canvas1');
		});
		$(".sidebar-close").on("click", function () {
			$('.toggle-popup1').removeClass('sidebar-popup');
			$('.sidebar-overlay').removeClass('open');
			$('body').removeClass('canvas1');
			$('body').addClass('overflow-x-hidden');
		});
		$('.sidebar-overlay').on('click', function () {
			$('.toggle-popup1').removeClass('sidebar-popup');
			$('.sidebar-overlay').removeClass('open');
			$('body').removeClass('canvas1');
		});
	}

	// Datetimepicker

	if($('.yearpicker').length > 0 ){
		$('.yearpicker').datetimepicker({
			viewMode: 'years',
			format: 'MMM YYYY',

			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
	
	// Add Image 

	$('#image_sign').on('change', function(){
		$("#frames").html('');
		for (var i = 0; i < $(this)[0].files.length; i++) {
			$("#frames").append('<img src="'+window.URL.createObjectURL(this.files[i])+'" width="100px" height="100px">');
		}
	});

	$('.image-sign').on('change', function(){
		$(".frames").html('');
		for (var i = 0; i < $(this)[0].files.length; i++) {
			$(".frames").append('<img src="'+window.URL.createObjectURL(this.files[i])+'" width="100px" height="100px">');
		}
	});
	$('#image_sign2').change(function(){
		$("#frames2").html('');
		for (var i = 0; i < $(this)[0].files.length; i++) {
			$("#frames2").append('<img src="'+window.URL.createObjectURL(this.files[i])+'" width="100px" height="100px">');
		}
	});

	// Listen for back button click

	let Tab1 ="#v-pills-info"
	let Tab2 ="#v-pills-vituals"
	let Tab3 = '#v-pills-medical-history';
	let Tab4 ="#v-pills-complaints"

	if($('.patient-add').length > 0) {
		document.getElementById('backButton').addEventListener('click', function() {
			$(Tab3).addClass('active');
			$(Tab4).removeClass('active');
			$("#v-pills-medical-history-tab").addClass('active').removeClass('activated')
			$("#v-pills-complaints-tab").removeClass('active')
		});	
		document.getElementById('save-basic-info').addEventListener('click', function() {
			$(Tab2).addClass('active');
			$(Tab1).removeClass('active');
			$("#v-pills-vituals-tab").addClass('active');
			$("#v-pills-info-tab").removeClass('active').addClass('activated');
		});
	
		document.getElementById('save-vitals').addEventListener('click', function() {
			$(Tab3).addClass('active');
			$(Tab2).removeClass('active');
			$("#v-pills-medical-history-tab").addClass('active');
			$("#v-pills-vituals-tab").removeClass('active').addClass('activated');
		});
	
		document.getElementById('save-medical-history').addEventListener('click', function() {
			$(Tab4).addClass('active');
			$(Tab3).removeClass('active');
			$("#v-pills-complaints-tab").addClass('active');
			$("#v-pills-medical-history-tab").removeClass('active').addClass('activated');
		});	
	}

	$(".tab-links li").on('click', function() {
	    $(this).addClass("active").siblings().removeClass('active');
	});

	// Visit Slider
	
	if ($('.visit-slider').length > 0) {
		$('.visit-slider').owlCarousel({
			loop: true,
			margin: 15,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navContainer: '.visit-nav',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				992: {
					items: 3
				},
				1200: {
					items: 3
				},
				1400: {
					items: 4
				}
			}
		})
	}

	// Past Visit Slider
	
	if ($('.past-visit-slider').length > 0) {
		$('.past-visit-slider').owlCarousel({
			loop: true,
			margin: 0,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navContainer: '.visits-nav',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				}
			}
		})
	}

	// Select Image 

	if ($('.image-select').length > 0) {
		$('.image-select').select2({
			placeholder: 'Select',
			minimumResultsForSearch: -1,
			width: '100%',
			templateResult: function(option) {
				if (!option.id) { return option.text; }
				var selected = option.selected ? 'checked' : '';
				var $option = $(
					'<div class="d-flex align-items-center"><img class="patient-image" src="' + $(option.element).data('image') + '"><span class="option-text"> '+ option.text +' </span></div>' 
				);
				return $option;
			},
			templateSelection: function(option) {
				if (!option.id) { return option.text; }
				var $option = $(
				'<span class="option-text">' + option.text + '</span>'
				);
				return $option;
			}
		});
	}

	// All Booking Calendar

	if($('#calendar-appointment').length > 0) {
		document.addEventListener('DOMContentLoaded', function() {
			var calendarEl = document.getElementById('calendar-appointment');
		
			var calendar = new FullCalendar.Calendar(calendarEl, {
			  initialView: 'dayGridMonth', 
			  events: [
				{
				  title: '',
				  images: [
					{ url: 'assets/img/patients/patient-01.jpg', data: 'Gifford - 10:00 AM to 11:00 AM' },
					{ url: 'assets/img/patients/patient-02.jpg', data: 'Richard - 10:30 AM to 11:30 AM' }
				  ],					
				  backgroundColor: '#F3F6FF',				  
				  start: new Date($.now() - 168000000).toJSON().slice(0, 10)
				},
				{
					title: '',
					images: [
					  { url: 'assets/img/patients/patient-04.jpg', data: 'Thomas -  10:00 AM to 11:00 AM' },
					  { url: 'assets/img/patients/patient-05.jpg', data: 'Shaver - 10:30 AM to 11:30 AM' },
					  { url: 'assets/img/patients/patient-06.jpg', data: 'Ann - 10:00 AM to 11:00 AM' },
					  { url: 'assets/img/patients/patient-07.jpg', data: 'Claffin - 11:00 AM to 12:00 PM' },
					  { url: 'assets/img/patients/patient-08.jpg', data: 'Enrique - 12:30 PM to 01:30 PM' }
					],					
					backgroundColor: '#F3F6FF' ,				  
					start: new Date($.now() + 338000000).toJSON().slice(0, 10)
				  },
				  {
					  title: '',
					  images: [
						{ url: 'assets/img/patients/patient-09.jpg', data: 'Cassandra -  10:00 AM to 11:00 AM' },
						{ url: 'assets/img/patients/patient-10.jpg', data: 'Deacon - 10:30 AM to 11:30 AM' },
						{ url: 'assets/img/patients/patient-11.jpg', data: 'Stone - 10:00 AM to 11:00 AM' },
						{ url: 'assets/img/patients/patient-12.jpg', data: ' Evans - 11:00 AM to 12:00 PM' }
					  ],					
					  backgroundColor: '#F3F6FF',				  
					  start: new Date($.now() - 338000000).toJSON().slice(0, 10) 
				  },
				  {
					  title: '',
					  images: [
						{ url: 'assets/img/patients/patient-09.jpg', data: 'Cassandra -  10:00 AM to 11:00 AM' },
						{ url: 'assets/img/patients/patient-10.jpg', data: 'Deacon - 10:30 AM to 11:30 AM' },
						{ url: 'assets/img/patients/patient-11.jpg', data: 'Stone - 10:00 AM to 11:00 AM' },
						{ url: 'assets/img/patients/patient-12.jpg', data: ' Evans - 11:00 AM to 12:00 PM' }
					  ],					
					  backgroundColor: '#F3F6FF',				  
					  start: new Date($.now() + 68000000).toJSON().slice(0, 10) 
				  }
			  ],
			  headerToolbar: {
				start: 'title',
				end: 'prev,today,next'
			  },
			  eventDidMount: function(info) {
				var eventEl = info.el;
				var tdEl = eventEl.closest('td'); 		
				if (tdEl) {
				  tdEl.style.backgroundColor = info.event.backgroundColor; 
				}
				var eventEl = info.el;
				var images = info.event.extendedProps.images;		
				var imagesHtml = images.slice(0, 2).map(function(imageData) {
				  return '<img class="fc-event-image calendar-img" src="' + imageData.url + '" alt="' + imageData.tooltip + '" data-bs-toggle="tooltip" data-bs-placement="top" title="' + imageData.data + '">';
				}).join('');				
				var moreImagesHtml = images.slice(2).map(function(imageData) {
				  return '<div class="d-flex align-items-center cal-img"><img class="fc-event-image calendar-img" src="' + imageData.url + '"  alt="' + imageData.data + '" data-bs-toggle="tooltip" data-bs-placement="top" title="' + imageData.tooltip + '" style="display: none;"><span style="display:none;">' + imageData.data + '</span></div>';
				}).join('');	

				var showMoreLink = '';
				if (images.length > 2) {
				  showMoreLink = '<a href="javascript:void(0);" class="show-more">Show more</a>';
				  var popoverContent = '<div class="popover-close"><button type="button" class="btn-close" aria-label="Close"></button></div>' + moreImagesHtml;
				  var popover = new bootstrap.Popover(eventEl, {
					title: 'Appointment',
					content: popoverContent,
					trigger: 'click',
					placement: 'auto',
					container: 'body',
					html: true
				  });
				  var popoverElement = popover._element;
				  popoverElement.addEventListener('click', function(e) {
					if (e.target.classList.contains('popover-close')) {
					  popover.hide();
					}
				  });
				}				
				var imagesContainer = document.createElement('div');
				imagesContainer.innerHTML = imagesHtml + moreImagesHtml + showMoreLink;
				eventEl.querySelector('.fc-event-title-container').appendChild(imagesContainer);		
				var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
				var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
				  return new bootstrap.Tooltip(tooltipTriggerEl);
				});
			  }
			});
		
			calendar.render();
		});			
	}

	// Visit Slider
	
	if ($('.template-slider').length > 0) {
		$('.template-slider').owlCarousel({
			loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navContainer: '.template-nav',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				992: {
					items: 3
				},
				1200: {
					items: 4
				},
				1400: {
					items: 5
				}
			}
		})
	}

	// Add New Field

	$(".addfield-info").on('click','.trash-icon', function () {
		$(this).closest('.field-cont').remove();
		return false;
    });

	$(".add-field").on('click', function () {

		var servicecontent = '<div class="row align-items-center field-cont">'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">Temprature</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="Eg:97.8">'+
						'<span class="text-group-right">F</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">Pulse</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="80">'+
						'<span class="text-group-right">mmHg</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">Respiratory Rate</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="454">'+
						'<span class="text-group-right">rpm</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">SPO2</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="97">'+
						'<span class="text-group-right">%</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">Height</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="Eg:97.8">'+
						'<span class="text-group-right">cm</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">Weight</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="Eg:97.8">'+
						'<span class="text-group-right">Kg</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">Waist</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="Eg:97.8">'+
						'<span class="text-group-right">cm</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">BSA</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="1.7">'+
						'<span class="text-group-right">M</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">BMI</label>'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="19.2">'+
						'<span class="text-group-right">kg/cm</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<label class="form-label">&nbsp;</label>'+
				'<a href="javascript:void(0);" class="trash-icon"><i class="ti ti-trash"></i></a>'+
			'</div>'+
		'</div>';
			
			setTimeout(function () {
				$('.select');
				setTimeout(function () {
					$('.select').select2({
						minimumResultsForSearch: -1,
						width: '100%'
					});
				}, 100);
			}, 100);
		$(".addfield-info").append(servicecontent);
		return false;
	});

	// Add New medication

	$(".medications-info").on('click','.trash-icon', function () {
		$(this).closest('.medications-cont').remove();
		return false;
    });

	$(".add-medicine").on('click', function () {

		var servicecontent = '<div class="row align-items-center medications-cont">'+
		'<div class="col-sm-6 col-lg-4 col-xl-2">'+
				'<div class="mb-4">'+
					'<input type="text" class="form-control" placeholder="Eg: Monstrat Tab">'+
				'</div>'+
			'</div>'+
			'<div class="col-sm-6 col-lg-4 col-xl-2">'+
				'<div class="mb-4">'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="Eg:97.8">'+
						'<span class="text-group-right">Kg</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-sm-6 col-lg-4 col-xl-2">'+
				'<div class="mb-4">'+
					'<div class="input-text-group">'+
						'<input type="text" class="form-control" placeholder="1">'+
						'<span class="text-group-right">M</span>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-sm-6 col-lg-4 col-xl-2">'+
				'<div class="mb-4">'+
					'<select class="select">'+
						'<option>1-0-1</option>'+
						'<option>1-0-0</option>'+
						'<option>0-0-1</option>'+
					'</select>'+
				'</div>'+
			'</div>'+
			'<div class="col-sm-6 col-lg-4 col-xl-2">'+
				'<div class="mb-4">'+
					'<select class="select">'+
						'<option>Before Meal</option>'+
						'<option>After Meal</option>'+
					'</select>'+
				'</div>'+
			'</div>'+
			'<div class="col-sm-6 col-lg-4 col-xl-2">'+
				'<div class="d-flex align-items-center">'+
					'<div class="mb-4">'+
						'<input type="text" class="form-control" >'+
					'</div>'+
					'<div class="mb-4">'+
						'<a href="javascript:void(0);" class="trash-icon ms-3"><i class="ti ti-trash"></i></a>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>';			
			setTimeout(function () {
				$('.select');
				setTimeout(function () {
					$('.select').select2({
						minimumResultsForSearch: -1,
						width: '100%'
					});
				}, 100);
			}, 100);
		$(".medications-info").append(servicecontent);
		return false;
	});

	// Add New Diagnosis

	$(".diagnosis-info").on('click','.trash-icon', function () {
		$(this).closest('.diagnosis-cont').remove();
		return false;
    });

	$(".add-diagnosis").on('click', function () {

		var servicecontent = '<div class="row d-flex align-items-center diagnosis-cont">'+
			'<div class="col-xl-2 col-md-4">'+
				'<div class="mb-4">'+
					'<label class="form-label">Fever</label>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-5 col-md-4">'+
				'<div class="mb-4">'+
					'<div class="input-text-group">'+
						'<select class="select">'+
							'<option>Diagonosis Type</option>'+
							'<option>Hectic</option>'+
							'<option>Continuous Fever</option>'+
							'<option>Relapsing</option>'+
						'</select>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-5 col-md-4">'+
				'<div class="mb-4">'+
					'<div class="input-text-group d-flex align-items-center">'+
						'<input type="text" class="form-control" >'+
						'<a href="javascript:void(0);" class="trash-icon"><i class="ti ti-trash"></i></a>'+
					'</div>'+
				'</div>'+
				'<a href="javascript:void(0);" class="text-danger ms-4 trash-icon ms-3">Delete</a>'+
			'</div>'+
		'</div>';
		setTimeout(function () {
			$('.select');
			setTimeout(function () {
				$('.select').select2({
					minimumResultsForSearch: -1,
					width: '100%'
				});
			}, 100);
		}, 100);
		$(".diagnosis-info").append(servicecontent);
		return false;
	});
	$(".add-education-details").on('click', function () {

		var servicecontent = '<div class="row diagnosis_details">'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-3">'+
					'	<label class="form-label">Institute Name</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-3">'+
					'	<label class="form-label">Year</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6">'+
				'<div class="mb-3">'+
					'	<label class="form-label">No of Years</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-3 col-md-6 d-flex align-items-center justify-content-between">'+
				'<div class="mb-3 w-100">'+
					'	<label class="form-label">Job Description</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
				'<a href="javascript:void(0);" class="text-danger ms-4 trash-icon">Delete</a>'+
			'</div>'+
		'</div>';
		setTimeout(function () {
			$('.select');
			setTimeout(function () {
				$('.select').select2({
					minimumResultsForSearch: -1,
					width: '100%'
				});
			}, 100);
		}, 100);
		$(".diagnosis-info").append(servicecontent);
		return false;
	});

	$(".diagnosis-info").on('click','.trash-icon', function () {
		$(this).closest('.diagnosis_details').remove();
		return false;
    });



	$(".add-experience-details").on('click', function () {

		var servicecontent = '<div class="row experience_details">'+
			'<div class="col-xl-4 col-md-6">'+
				'<div class="mb-3">'+
					'	<label class="form-label">Hospital Name</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-4 col-md-6">'+
				'<div class="mb-3">'+
					'	<label class="form-label">Year</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-4 col-md-6 d-flex align-items-center justify-content-between">'+
				'<div class="mb-3 w-100">'+
					'	<label class="form-label">No of Years</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
				'<a href="javascript:void(0);" class="text-danger ms-4 trash-icon">Delete</a>'+
			'</div>'+
		'</div>';
		setTimeout(function () {
			$('.select');
			setTimeout(function () {
				$('.select').select2({
					minimumResultsForSearch: -1,
					width: '100%'
				});
			}, 100);
		}, 100);
		$(".experience").append(servicecontent);
		return false;
	});

	$(".experience").on('click','.trash-icon', function () {
		$(this).closest('.experience_details').remove();
		return false;
    });



	$(".membership_btn").on('click', function () {

		var servicecontent = '<div class="row membership">'+
			'<div class="col-xl-4 col-md-6">'+
				'<div class="mb-3">'+
					'<label class="form-label">Title</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-4 col-md-6">'+
				'<div class="mb-3">'+
					'	<label class="form-label">Year</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-4 col-md-6  d-flex align-items-center justify-content-between">'+
				'<div class="mb-3 w-100">'+
					'	<label class="form-label">Description</label>'+
					'<input type="text" class="form-control">'+
					
				'</div>'+
				'<a href="javascript:void(0);" class="text-danger ms-4 trash-icon">Delete</a>'+
			'</div>'+
		'</div>';
		setTimeout(function () {
			$('.select');
			setTimeout(function () {
				$('.select').select2({
					minimumResultsForSearch: -1,
					width: '100%'
				});
			}, 100);
		}, 100);
		$(".membership_details").append(servicecontent);
		return false;
	});

	$(".membership_details").on('click','.trash-icon', function () {
		$(this).closest('.membership').remove();
		return false;
    });


	
	$(".award_btn").on('click', function () {

		var servicecontent = '<div class="row award">'+
			'<div class="col-xl-4 col-md-6">'+
				'<div class="mb-3">'+
					'<label class="form-label">Award Name</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-4 col-md-6">'+
				'<div class="mb-3">'+
					'	<label class="form-label">Year</label>'+
					'<input type="text" class="form-control" >'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-4 col-md-6  d-flex align-items-center justify-content-between">'+
				'<div class="mb-3 w-100">'+
					'	<label class="form-label">Description</label>'+
					'<input type="text" class="form-control">'+
					
				'</div>'+
				'<a href="javascript:void(0);" class="text-danger ms-4 trash-icon">Delete</a>'+
			'</div>'+
		'</div>';
		setTimeout(function () {
			$('.select');
			setTimeout(function () {
				$('.select').select2({
					minimumResultsForSearch: -1,
					width: '100%'
				});
			}, 100);
		}, 100);
		$(".award_details").append(servicecontent);
		return false;
	});

	$(".award_details").on('click','.trash-icon', function () {
		$(this).closest('.award').remove();
		return false;
    });

	// Clipboard 
	if($('.clipboard').length > 0) {
		new ClipboardJS('.btn');
	}

	// Add New Complaint

	$(".complaint-info").on('click','.trash-icon', function () {
		$(this).closest('.complaint-cont').remove();
		return false;
    });
	$(".add-complaint").on('click', function () {
		var servicecontent = '<div class="row d-flex align-items-center complaint-cont">'+
			'<div class="col-xl-2 col-md-4">'+
				'<div class="mb-4">'+
					'<label class="form-label">Fever</label>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-10 col-md-8">'+
				'<div class="mb-4">'+
					'<div class="input-text-group d-flex align-items-center">'+
						'<input type="text" class="form-control" ">'+
						'<a href="javascript:void(0);" class="trash-icon ms-3"><i class="ti ti-trash"></i></a>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>';
		setTimeout(function () {
			$('.select');
			setTimeout(function () {
				$('.select').select2({
					minimumResultsForSearch: -1,
					width: '100%'
				});
			}, 100);
		}, 100);
		$(".complaint-info").append(servicecontent);
		return false;
	});

	// Add New Followup

	$(".followup-info").on('click','.trash-icon', function () {
		$(this).closest('.followup-cont').remove();
		return false;
    });
	$(".add-followup").on('click', function () {
		var servicecontent = '<div class="row align-items-center followup-cont">'+
			'<div class="col-xl-8 col-md-6">'+
				'<div class="mb-4">'+
					'<label class="form-label">Followup Consultation</label>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-4 col-md-6">'+
				'<div class="mb-4">'+
					'<div class="d-flex align-items-center">'+
						'<div class="w-100">'+
							'<select class="select">'+
								'<option>Select</option>'+
								'<option>Yes</option>'+
								'<option>No</option>'+
							'</select>'+
						'</div>'+
						'<a href="javascript:void(0);" class="trash-icon ms-3"><i class="ti ti-trash"></i></a>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>';			
			setTimeout(function () {
				$('.select');
				setTimeout(function () {
					$('.select').select2({
						minimumResultsForSearch: -1,
						width: '100%'
					});
				}, 100);
			}, 100);
		$(".followup-info").append(servicecontent);
		return false;
	});

	// Authentication Slider
	
	if ($('.authentication-slider').length > 0) {
		$('.authentication-slider').owlCarousel({
			loop: true,
			margin: 24,
			dots: true,
			nav: false,
			smartSpeed: 1000,
			autoplay: true,
			navContainer: '.template-nav',
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 1
				},
				576: {
					items: 1
				},
				992: {
					items: 1
				},
				1200: {
					items: 1
				},
				1400: {
					items: 1
				}
			}
		})
	}

	// Staff Wizard

	$(".wizard-field .wizard-next-btn").on('click', function () { 
		$(this).closest('fieldset').next().fadeIn('slow');
		$(this).closest('fieldset').css({
			'display': 'none'
		});
		
		$('.progress-wizard .active').removeClass('active').addClass('activated').next().addClass('active');
	});

	$('.calendar-day').on('click', function() {
        $('.calendar-day').removeClass('selected');
        $(this).addClass('selected');
    });

	$('.todo-inbox-check input').click(function(){
		$(this).parent().parent().toggleClass('todo-strike-content');
	});

	// Get Full Year
	if ($('#getFullYear').length > 0) {
	const date = new Date();
	let year = date.getFullYear();
		document.getElementById("getFullYear").innerHTML = year;
	}
	
})(jQuery);	