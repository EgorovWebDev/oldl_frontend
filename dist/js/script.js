// TODO TABS



// TODO dropdown menu


//  TODO hamburger


// Показ информации о посте при наведении
$(function() {
	$('.tab-item').each(function() {
			$(this).hover(function() {
				$(this).find('.tab-info__hidden').css('display', 'flex');
			}, function() {
				$(this).find('.tab-info__hidden').css('display', 'none');
			});
	});
});