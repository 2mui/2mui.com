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

    var d = {
      field_1: $("input[name='first-name']").val(),
      field_2: $("input[name='phone']").val(),
      field_3: $("input[name='email']").val(),
      field_4: $("input[name='description']").val(),
    }
    console.log(d)
    $.ajax({
      type: "POST",
      url: "https://jinshuju.net/api/v1/forms/BI4Zyh",
      data: d,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + "SXA3aG92MFExS0ZQNHFTY0NVaEJ4ZzpRcmkwR1JrLVVNNTBmdkxCNmRMRGVn");
      },
      success: function (response) {
        window.location.href = "/"
      },
      error: function(error) {
        console.log(error)
      }
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
