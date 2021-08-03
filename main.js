$(function () {
  $(".main-slider").slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: "main-dots",
    autoplay: 2000,
  });
  $(".rewiews-slider").slick({
    arrows: false,
    dots: true,
    autoplay: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    dotsClass: "rewiews-dots",
    cssEase: "ease-out",
    speed: 700,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 549,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
$(".menu__icon").on("click", function () {
  $(".menu__list").slideToggle();
});

$(document).ready(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
