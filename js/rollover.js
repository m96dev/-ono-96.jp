// JavaScript Document





$(document).ready(function() {
  $('#menu li.active img').each(function(){
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  });
  $('#menu img').hover(function(){
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }, function(){
    if (!$(this).parents("li").hasClass('active')) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });
});







$(document).ready(function(){
	$(".works_btn").click(function(){
		$(this).next().slideToggle(300);
	});
});











$(document).ready(function(){

  //client_btnがクリックされたら
  $('.btn1').click(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info1').toggleClass('switch');
  });
    $('.crient_area1').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info1').removeClass('switch');
  });

  $('.btn2').click(function () {
    $('.info2').toggleClass('switch');
  });
    $('.crient_area2').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info2').removeClass('switch');
  });

  $('.btn3').click(function () {
    $('.info3').toggleClass('switch');
  });
  $('.crient_area3').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info3').removeClass('switch');
  });
  
  $('.btn4').click(function () {
    $('.info4').toggleClass('switch');
  });
  $('.crient_area4').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info4').removeClass('switch');
  });
  
  $('.btn5').click(function () {
    $('.info5').toggleClass('switch');
  });
  $('.crient_area5').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info5').removeClass('switch');
  });
  
  $('.btn6').click(function () {
    $('.info6').toggleClass('switch');
  });
  $('.crient_area6').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info6').removeClass('switch');
  });
  
  $('.btn7').click(function () {
    $('.info7').toggleClass('switch');
  });
  $('.crient_area7').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info7').removeClass('switch');
  });
  
  $('.btn8').click(function () {
    $('.info8').toggleClass('switch');
  });
  $('.crient_area8').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info8').removeClass('switch');
  });
  
  $('.btn9').click(function () {
    $('.info9').toggleClass('switch');
  });
  $('.crient_area9').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info9').removeClass('switch');
  });
  
  $('.btn10').click(function () {
    $('.info10').toggleClass('switch');
  });
  $('.crient_area10').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info10').removeClass('switch');
  });
  
  $('.btn11').click(function () {
    $('.info11').toggleClass('switch');
  });
  $('.crient_area11').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info11').removeClass('switch');
  });
  
  $('.btn12').click(function () {
    $('.info12').toggleClass('switch');
  });
  $('.crient_area12').mouseleave(function () {
    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('.info12').removeClass('switch');
  });

});










$(function(){
var topBtn=$('#pagetop');
topBtn.hide();

$(window).scroll(function(){
  if($(this).scrollTop()>300){
    topBtn.fadeIn("slow");
  }else{
    topBtn.fadeOut("slow");
  } 
}); 

topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});

});