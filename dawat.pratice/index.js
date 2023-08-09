$(document).ready(function() {
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll > $('#header').height()) {
      $('#header').parent().removeClass('fixed-top');
      $('#header').addClass(['fixed-top', 'bg-white', 'text-black']);
      $('#header-img').attr('src', 'images/main_logo_black.png');
    } else {
      $('#header').parent().addClass('fixed-top');
      $('#header').removeClass(['fixed-top', 'bg-white', 'text-black']);
      $('#header-img').attr('src', 'images/main_logo.png');
    }
    $('.header-link').each(function() {
      const link = '#nav-bar .nav-link[href="#' + this.id + '"]';
      if (scroll > $(this).offset().top - 250) {
        $('#nav-bar .nav-item').removeClass('active');
        $(link).parent().addClass('active');
      }
    });
  });
  $('.pogo-slider').pogoSlider({
    pauseOnHover: false
  }).data('plugin_pogoSlider');
  $('#home2 > .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
  });
  $('#home3 > .owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    margin: 20,
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('#menu .nav-item').click(function(event) {
    event.preventDefault();
    $('#menu .nav-item').removeClass('active');
    $(this).addClass('active');
    let menu = $(this).data('menu');
    if (menu === 'all') {
      $('.menu').show();
    } else {
      $('.menu').hide();
      $('.' + menu).show();
    }
  });
});
