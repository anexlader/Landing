
// function test1(){
// 	$(".left-board").toggleClass("active");
// 	$(".right-board").toggleClass("active");
// }



$(document).ready(function(){

	$('.slider-nav').slick({
	arrows: true,
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 2,
	asNavFor: '.slider-for',
	centerMode: true,
	focusOnSelect: true
	});


	// $('.slider-for').slick({
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	//   fade: true,
	// });
				

	$('.phone-scr').slick({
		arrows: false,
	  centerMode: true,
	  centerPadding: '80px',
	  slidesToShow: 3,
	  responsive: [
	  	{
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '10px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// //при нажатии на ссылку
	// $(".navbar-collapse a").click(function() {
	//   //если она не имеет класс dropdown-toggle
	//   if (!$(this).hasClass("dropdown-toggle")) {
	//     //то закрыть меню
	//     $(".navbar-collapse").collapse('hide');
	//     return false;
	//   }
	// });

// document.getElementByID('radio2').click();

});

