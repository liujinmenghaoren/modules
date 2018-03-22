function pwdBox(setting){
  var $dom = $(
      "<div>" + 
      "<label>密码：</label>" +
      "<div class= 'inputs'>" +
      "<input id='pwNormal' type= 'password'>" +
      "<img id='btnTest' src='image/eye-close.png' alt='显示密码' />" +
      "<input class='pwDisplay'>" +
      "</div>" +
      "</div>"
      );

  $dom.appendTo(setting.container);

  $('#pwNormal').css({'width':'220px',
                      'height':'24px',
                      'margin':'0'});
  $('.pwDisplay').css({'width':'216px',
                        'height':'20px',
                        'display':'none',
                        'position':'absolute',
                        'left':'2px',
                        'top':'11px',
                        'border':'#fff'});
  $('.inputs').css({'position':'relative',
                    'display':'inline-block'});
  $('img').css({'display':'inline-block',
                'height':'28px',
                'position':'relative',
                'top':'8px',
                'left':'-42px',
                'z-index':'9'});


  $('#pwNormal').on('input',function(){
    $('.pwDisplay').val($('#pwNormal').val());
  });

  $('#btnTest').mouseover(function(){
    $('#btnTest').attr('src','image/eye.png');
    $('.pwDisplay').css('display','inline-block');
  });

  $('#btnTest').mouseout(function(){
    $('#btnTest').attr('src','image/eye-close.png');
    $('.pwDisplay').css('display','none');
  });
}
