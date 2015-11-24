$(function(){ $.Placeholder.init({ color : '#ccc' }); $('body').stretch(); $('.Slider').tabslet({ mouseevent: 'hover', attribute: 'data-tab' }); $('.custom-select').customSelect(); $('.dropdown').dropdown(); 
$(".re_info_block").on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('none_active')){
			var thisLink = $(this).attr('href');
			$(".re_info_block").removeClass('active');
			$(".re_info_iblock").removeClass('active');
			$(this).addClass('active');
			$(thisLink).addClass('active');
		};
	});
	/* $(".re_alpha").on('click','a', function(e){
		e.preventDefault();
		if(!$(this).hasClass('none_active')){
			var thisLink = $(this).attr('href');
			$(".re_alpha a").removeClass('active');
			$(".re_alpha_blocks").removeClass('active');
			$(this).addClass('active');
			$(this).closest('.re_info_iblock').find(thisLink).addClass('active');
		};
	}); */ });