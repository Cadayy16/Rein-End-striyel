$("#home-section-01").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    drag: true,
    autoplay: true,
    autoplaySpeed: 1200,
})

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
    ]
  });