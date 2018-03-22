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
                'top':'10px',
                'left':'-42px',
                'z-index':'9'});


  $('#pwNormal').on('input',function(){
    $('.pwDisplay').val($('#pwNormal').val());
  });

  $('#btnTest').mouseover(function(){
    $('#btnTest').attr('src','data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk0ODc4MUIzNEU1MTFFNzkwMjdBQUE2OTE5RjZBMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk0ODc4MUMzNEU1MTFFNzkwMjdBQUE2OTE5RjZBMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTQ4NzgxOTM0RTUxMUU3OTAyN0FBQTY5MTlGNkExRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTQ4NzgxQTM0RTUxMUU3OTAyN0FBQTY5MTlGNkExRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt4+95UAAAMLSURBVHja7JhraxNBFIY3NY3FS5piqSFtYysq1qbgDYsYwYpX1H9Q/J2ltbFC0S8qgjam9otGE6r10iZRQq2J75R3YdjOzM4mMRjIgQeyu3N5Z+bMnDMJ1et1p5Osx+kw6wruCu50wWH5IRQKNTroOBgGgyAGDoB94A/4BTbBV1AA66AWtBP3NAs3Mdh+cAacBCXwCaxQXBVsgwjo4yCGwCXWeweyYCtopyH5HLac4UPgIkiCt2CVgm3tMDgNJkAePAcV2xkOIlh8TIFzFPoK/G5ihXrBWQoXbb0WulolWPjkdS7xY/BDU26AszfKmRRWBh9BTlNP1JmhC2Xo800JFhvpNv3uhWbDiI13GRznTOUl/+yn+0yB9+AZ2FHUvwBOgXmwoRO8+8NFYSPgIRj3OSXugZtcAZ1FWOa+4TgdZ3+jKsG7Gg2Ck6wc9/HFNLgVwHeF6CuG73H2m1QJ1o00Qb+a57npGHxWzMqS5xSZBg/INN+59oR1BjRtrrPfGerwjXRRFl7wEetwg61ww7hirzGI9JJhvnNFi7JvWNcxiF6gjqhJsPCzu9xcRYvlFb72QXqe1PhxhN9cy6v81GNF6rjDgSsFX2X4zFn6Y5SRzbUhQ9mj0u9N78xpLEfhaZ3gGnOAf21unmFbVusSy5yJlGVjJeYJrn0xlP3sCc8Vi/ZT1LOsEyxC7RzDb8KiQRHBjknPWWkDyrbNb/KRWfBpO0Edc3IK0KOZtUVww+N3KltlxhaRwvASxeyQAt+VpQ2Y8tkncfa/uCexMgQOEeVmLUSnGQyCBI60z+acZf/WgcNhfpthHjFmKPdUCrs2oXk/66hsjP1l2H9D+fAgl2cNvNSkgKrkxz3uYpbJz3lwAjzi7aSp9LKPUSfM0FoyhOoJLmeUx2RZOtu/K+rE2HaVqWu1lQn8FJPu/z6B112Rspy5SgChbbsiqS6hk7yEbvFM3vC5hI6w3hqTJutLaCsEe6/5QswRijvI98KHf3IQ37jzW3fNb/CfzBoTlKLTBuv+VdUV3BXcZvsrwADU1x297QTiiQAAAABJRU5ErkJggg==');
    $('.pwDisplay').css('display','inline-block');
  });

  $('#btnTest').mouseout(function(){
    $('#btnTest').attr('src','data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk0ODc4MTczNEU1MTFFNzkwMjdBQUE2OTE5RjZBMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk0ODc4MTgzNEU1MTFFNzkwMjdBQUE2OTE5RjZBMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTQ4NzgxNTM0RTUxMUU3OTAyN0FBQTY5MTlGNkExRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTQ4NzgxNjM0RTUxMUU3OTAyN0FBQTY5MTlGNkExRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pog7ZpEAAAPTSURBVHja1JnbTxNBFMa7RZGIVvACpNaKBo0g3hAlNBKDStQX9cH4pDwZ/zONiYnyYAzhJipR45VEBbxEFJQQ0QByq4Ct30m+mqHsTGdpBTnJLwvszuw3Z86cM7M48Xjct5zM71tmtsJrA8dx/v5I4rzGMiEo1Ywv1MMbwTmwl33E/veQkJnZBELg95LFsEx3KmiD4CMIgnAmBaV4r89RY0a9YWFrwAUQBdeVsDgM9oAsen8SjIDv4CsHG1tobKcjeB2oBQXgKXip3MsG07zmgDw+F2K7d6ALjC6GYPFsJUPhLdhBYVfBL4v2a8EuUAr6wDMw/i8Ey81ycAB0g04wA0rAMdAD7nuYoZVgP4VLX6+YIjMieDVFiSfvguGk+2dBIbgFhpSwuATGQD8HNOzSdz5DS0KojTGflmDJuScZd881C6aQokVsg+IpP+M3zIX4CTwCsy7Z6iDYCZqUQXsWHKJnH4BeQ2o8zcUk8d3ClJds4vGjYBW4oxn4NlDDWex3E2wqHGGKbTKIFYswlhs4rRFNv3KvmQuzWtNXL99Xq8vvOsFBNmpi3tRZPr3SztjrZLxXuCzYhLWzTb6mz0FFdNBGcIAPN6cQ62N6ekPvJTwk8bkP5GpEy2y8ZlufQXQzdQRMgrMZj7K4BixS0xbwOWkAk6xyETUEk9r1sa3JBqjjFFOgq+Aals8ey1waYNlNWAG9Pc1p36wRPZLsOY31UPgRneAYvZOuTfBanRS/CcvysMvLMoVEB3NquWVnP5lnE/aNVxEzBdazkrmV53GL/supp0MnWBZEI8tv0KJDyZVbld+7lAU4yRmrdDnZhBl6JgtSRyN1abOEeK0VnODoTCabnzIuVh/LcDvFzNCLOS5prizFOini+1upZ24FSeBS5S5aiJYFUWeogufBZYaBzVmykO8Nuek0Vbov3IzIPqLY8NxDerhO8bS6iB9TuJrmZjV9FfN9bXz//C2j5eZHpuc9eKHZAvqZEbZzm9inpDtZlMdZ2Rp5z619BbeqLTydpLW9zGHVkam8Ny+u5pbqUk5ngB4e4+6rhO1uJA06j31HuemJGo//hhh228DLsb4eHFKrj6VVgStccKrVs18n1YlDSPeI1MXVbpNTs3lolVm6pqQ/qyKSqUPobp7pRpmThxi7Uc0htISh0s099qKemtUFU8S43UBxucoXoQkO4gfzcxWfu8m/LbpgryaDO8NNzW2vgv26IqIjAyZ73Q8svcW6xaV771J9bn3C4hHxqmGpBI/zODVlsZHXVzqP34cz8SEyrnxjjtt8H3aW278M/ggwAK/yecNBQ2OWAAAAAElFTkSuQmCC');
    $('.pwDisplay').css('display','none');
  });
}
