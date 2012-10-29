function init() {
      preload_image_object = new Image();
      // set image url
      image_url = new Array();
      image_url[0] = "img/bg-all.png";
      image_url[1] = "img/bg-else.png";
      image_url[2] = "img/bg.png";
      image_url[3] = "img/flipleft.png";
      image_url[4] = "img/flipright.png";
      image_url[5] = "img/main.png";
      image_url[6] = "img/pass.png";

       var i = 0;
       for(i=0; i<=6; i++) 
         preload_image_object.src = image_url[i];    
} 

window.onload = init;

$(function(){
  if (! $('#cv-2011-2').hasClass('index')) {
      $('#cv-2011-2').addClass('else');
  } 
  
  if ($('#cv-2011-2').hasClass('else')){
    $('#cv-2011-2.else .story').addClass('all');
  } else if ($('#cv-2011-2').hasClass('index')) {
    $('#cv-2011-2.index .story').addClass('front');
  } 
  
  if ($('#cv-2011-2.index').hasClass('end')) {
    $('#cv-2011-2.index.end .story:first').css('top', '100px');
    $('#cv-2011-2.index.end').css('background','url(img/bg-else.png) #fff');
  }
  
  $('p.layouttekst-hele span.date').each(function(){
    $(this).next('span.info').addClass('noleft');
    $(this).closest('p').prev('p').css('margin-bottom', '5px').addClass('last');
    if($(this).closest('p').prev('p').hasClass('last')) {
      $(this).closest('p').prev('p.last').prev('p').find('.info').not('.noleft').css('font-weight', '600');
    }
    if($(this).find('.first').next('span').hasClass('third')) {
      $(this).find('.first').css({'width': '85px','margin': '0'});
    }
    if($(this).find('span').length < 2 && $(this).find('span').hasClass('third')) {
      $(this).find('.third').css('width','130px');
    }
  });
  $('div.leftcol').each(function(){
    $(this).find('.heading').not('.heading:first').css('margin-top', '10px');
  });
  $('.leftcol:first').next('.leftcol').css('margin-top','34px');
  
});