$(function () {

	$(window).on("scroll", function () {
		$('.header').toggleClass("header--active", $(this).scrollTop() > 0);
	});

	$(".hero a").on("click", function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),

			top = $(id).offset().top;

		$('body,html').animate({
			scrollTop: top
		}, 1500);

	});

	$('.header__burger').on('click', function () {

		$('.header__burger').toggleClass('header__burger--active');
		$('.header__menu').toggleClass('header__menu--active');
		$('body').toggleClass('lock');

	});


	var mixer = mixitup('.jobs__inner');
});