
$(document).ready(function(){
    
 
$('.slick-slider').slick({
  centerMode: true,
  slidesToShow: 3,
  centerPadding:'20px',
  dots: true,
  arrows: true,
  swipe: true,
//  infinite: true,
  swipeToSlide: true,
  adaptiveHeight: true,
    responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    ]
  });


  $('.shop-slider').slick({
    slidesToShow: 4,
    dots: false,
    arrows: true,
    swipe: true,
  })

  $('.types-slider').slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    swipe: true,
  })



});