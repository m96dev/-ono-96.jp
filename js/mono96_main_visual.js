// JavaScript Document
$(document).ready(function () {

  hsize = $(window).height();

  $("#mono96_img").css("height", hsize + "px");
  $("#mono96_img_black").css("height", hsize + "px");
});

$(window).resize(function () {

  hsize = $(window).height();

  $("#mono96_img").css("height", hsize + "px");
  $("#mono96_img_black").css("height", hsize + "px");
});