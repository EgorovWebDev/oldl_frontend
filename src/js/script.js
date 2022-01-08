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

// Скрытие и показ вкладок в кабинета автора
$(function() {
	$(".tabs .tabs-nav").click(function() {
		$(".tabs .tabs-nav").removeClass("tabs-nav__active").eq($(this).index()).addClass("tabs-nav__active");
		$(".tab").removeClass("tab-active").hide().eq($(this).index()).fadeIn().css('display','flex');
	}).eq(0);
});

// Скрытие и показ лайкнутых и последних комментариев
$(function() {
	$("#commentButtonLatest").click(function () {
		$("#commentButtonLiked").removeClass("button-comment__active");
		$("#commentButtonLatest").addClass("button-comment__active");
		$("#likedCommentsList").hide();
		$("#latestCommentsList").fadeIn();
	});
	$("#commentButtonLiked").click(function () {
		$("#commentButtonLatest").removeClass("button-comment__active");
		$("#commentButtonLiked").addClass("button-comment__active");
		$("#latestCommentsList").hide();
		$("#likedCommentsList").fadeIn();
	});
})