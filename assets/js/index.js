$(document).ready(function () {
  let count = 0;
  let cartCount = 0;
  const menImages = [
    '../assets/img/shop/product-2.png',
    '../assets/img/shop/product-4.png',
    '../assets/img/shop/product-5.png',
    '../assets/img/shop/product-9.png',
    '../assets/img/shop/product-18.png',
    '../assets/img/shop/product-8.png',
    '../assets/img/shop/product-11.png',
    '../assets/img/shop/product-12.png',
    '../assets/img/shop/product-13.png',
    '../assets/img/shop/product-14.png',
    '../assets/img/shop/product-15.png',
  ];
  const womenImages = [
    '../assets/img/shop/product-1.png',
    '../assets/img/shop/product-3.png',
    '../assets/img/shop/product-6.png',
    '../assets/img/shop/product-7.png',
    '../assets/img/shop/product-16.png',
    '../assets/img/shop/product-17.png',
    '../assets/img/shop/product-19.png',
    '../assets/img/shop/product-20.png',
    '../assets/img/shop/product-21.png',
    '../assets/img/shop/product-22.png',
  ];

  function changeImage(images, direction) {
    switch (direction) {
      case 'right':
        count++;
        if (count >= images.length - 2) count = 0;
        $('#img').attr('src', images[count]);
        $('#img-2').attr('src', images[count + 1]);
        $('#img-3').attr('src', images[count + 2]);
        break;
      case 'left':
        count--;
        if (count <= 0) count = images.length - 1;
        $('#img').attr('src', images[count]);
        $('#img-2').attr('src', images[count + 1]);
        $('#img-3').attr('src', images[count + 2]);
        break;
      default:
        $('#img').attr('src', images[0]);
        $('#img').attr('src', images[1]);
        $('#img').attr('src', images[2]);
        break;
    }
  }

  $('#right').click(function () {
    if ($('#gender').val() === 'men') {
      images = menImages;
    } else {
      images = womenImages;
    }
    changeImage(images, 'right');
  });
  $('#left').click(function () {
    if ($('#gender').val() === 'men') {
      images = menImages;
    } else {
      images = womenImages;
    }
    changeImage(images, 'left');
  });
  $('.add-to-cart').click(function () {
    cartCount++;
    $('#cart-item').text(cartCount);
    if ($('.cart-notification').css('display', 'none'))
      $('.cart-notification').css('display', 'inline-block');
    else $('.cart-notification').css('display', 'none');
  });
  $('#read').click(function () {
    if ($('.toRead').hasClass('d-none')) $('.toRead').removeClass('d-none');
    else $('.toRead').addClass('d-none');
  });

  $('#card').keypress(function (e) {
    if (isNaN(String.fromCharCode(e.which))) return false;
  });
  $('#card').keyup(function () {
    let card = $(this).val();
    if (card.length === 16) {
      $('#card').addClass('is-valid');
      $('#card').removeClass('is-invalid');
    } else {
      $('#card').addClass('is-invalid');
      $('#card').removeClass('is-valid');
    }
  });
  $('#cvv').keypress(function (e) {
    if (isNaN(String.fromCharCode(e.which))) return false;
  });
  $('#cvv').keyup(function () {
    let cvv = $(this).val();
    if (cvv.length === 3) {
      $('#cvv').addClass('is-valid');
      $('#cvv').removeClass('is-invalid');
    } else {
      $('#cvv').addClass('is-invalid');
      $('#cvv').removeClass('is-valid');
    }
  });
  $('#exp').keyup(function () {
    let exp = $(this).val();
    const regex = new RegExp('^([0-9]{2})/([0-9]{2})$');
    if (regex.test(exp)) {
      $('#exp').addClass('is-valid');
      $('#exp').removeClass('is-invalid');
    } else {
      $('#exp').addClass('is-invalid');
      $('#exp').removeClass('is-valid');
    }
  });
});
