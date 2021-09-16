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
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'keyLIDCQy17hAunRu' }).base('appqSpkkWt5817qh4');

    var d = new Date();
    var dateStr =
      d.getFullYear() + "/" +
      ("00" + (d.getMonth() + 1)).slice(-2) + "/" +
      ("00" + d.getDate()).slice(-2) + " " +
      ("00" + d.getHours()).slice(-2) + ":" +
      ("00" + d.getMinutes()).slice(-2) + ":" +
      ("00" + d.getSeconds()).slice(-2);
    console.log(dateStr);

    var data = {
      Name: $("input[name='first-name']").val(),
      Phone: $("input[name='phone']").val(),
      Email: $("input[name='email']").val(),
      Description: $("input[name='description']").val(),
      Date: dateStr
    }


    base('inquiries').create([
      {
        "fields": data
      }
    ], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
      alert("提交成功,我们销售人员会第一时间联系您！")
      window.location.href = "/contact";
    });


    // var d = {
    //   "field_1": $("input[name='first-name']").val(),
    //   "field_2": $("input[name='phone']").val(),
    //   "field_3": $("input[name='email']").val(),
    //   "field_4": $("textarea[name='description']").val(),
    // }
    // console.log(d)
    // 金数据文档说是支持json提交，其实是要用表单提交
    // var form = new FormData();
    // form.append("field_1", $("input[name='first-name']").val());
    // form.append("field_2", $("input[name='phone']").val());
    // form.append("field_3", $("input[name='email']").val());
    // form.append("field_4", $("textarea[name='description']").val());
    // form.append("field_5", new Date());

    // var settings = {
    //   "url": "https://jinshuju.net/api/v1/forms/BI4Zyh",
    //   "method": "POST",
    //   "timeout": 0,
    //   "headers": {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     "Authorization": "Basic SXA3aG92MFExS0ZQNHFTY0NVaEJ4ZzpRcmkwR1JrLVVNNTBmdkxCNmRMRGVn"
    //   },
    //   "processData": false,
    //   "mimeType": "multipart/form-data",
    //   "contentType": false,
    //   "data": form
    // };


    // $.ajax(settings).done(function (response) {
    //   alert("提交成功,我们销售人员会第一时间联系您！")
    //   console.log(response);
    //   window.location.href = "/";
    // });

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
