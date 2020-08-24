$(document).ready(function() {
  "use strict";
  // Scroll to top
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $('a.scroll-to').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 700);
    event.preventDefault();
  });

  $('.site-testimonial-item').on('mouseenter', function(){
    $('.site-testimonial-item').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
  });
  $('.site-testimonial-item').on('mouseleave', function(){
    $('.site-testimonial-item').removeClass('inactive');
    $('.site-testimonial-item').removeClass('active');
  });

  $(document).on("submit", "#contact-form", function(e){
    e.preventDefault()
    // var d = {
    //   "field_1": $("input[name='first-name']").val(),
    //   "field_2": $("input[name='phone']").val(),
    //   "field_3": $("input[name='email']").val(),
    //   "field_4": $("textarea[name='description']").val(),
    // }
    console.log(d)
    var form = new FormData();
    form.append("field_1", $("input[name='first-name']").val());
    form.append("field_2", $("input[name='phone']").val());
    form.append("field_1", $("input[name='email']").val());
    form.append("field_1", $("textarea[name='description']").val());

    var settings = {
      "url": "https://jinshuju.net/api/v1/forms/BI4Zyh",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Authorization": "Basic SXA3aG92MFExS0ZQNHFTY0NVaEJ4ZzpRcmkwR1JrLVVNNTBmdkxCNmRMRGVn"
      },
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

  })
});

$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('.site-navigation').addClass('nav-bg');
  } else {
    $('.site-navigation').removeClass('nav-bg');
  }
});
